window.onload = function(){
    // set the dimensions of the canvas
  var margin = {top: 20, right: 20, bottom: 180, left: 80},
    width = 1500 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
  var y = d3.scale.log().range([height, 0.1]);

  // define the axis
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
    return "<strong>Density by km2:</strong> <span style='color:white'>" + d.population + ", " + d.country + "</span>";
  })

  // add the SVG element
  var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  // call tip
  svg.call(tip);

  // load the data
  d3.json("data.json", function(error, data) {

    data.forEach(function(d) {
        d.country = d.country;
        d.population = +d.population;
    });

  // scale the range of the data
  x.domain(data.map(function(d) { return d.country; }));
  y.domain([0.00001, d3.max(data, function(d) { return d.population; })]);

  // add axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

 // add axis text
  svg.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height +160)
      .text("Countries (sorted by density)");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Density (logarithmic scale)");

  // Add bar chart
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.country); })
      .attr("y", function(d) {console.log(y(d.population));return y(parseInt(d.population)); })
      .attr("width", x.rangeBand())
      .attr("height", function(d) { return height - y(d.population); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

  });
}
