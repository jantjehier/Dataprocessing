/*Jan Maarten de Vries Student number: 11408731*/
window.onload = function(){

  // making svg, width, height and g
  var svg = d3.select("svg"),
      margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // value to change the dates
  var parseDate = d3.time.format("%Y%m%d").parse;

  // the dropdown menu that changes the file that wil be loaded.
  d3.selectAll(".m")
		  .on("click", function() {
				var city = this.getAttribute("value");

        var file;
				if(city == "344")
        {
					file = "csv2.json";

				}
        else
        {
					file = "csv.json";
				}
  // loading the file.
  d3.json(file, function(error, data) {

    // removing the old graph.
    d3.selectAll("path.line").remove();
    d3.selectAll("path.line2").remove();
    d3.selectAll("path.line3").remove();
    d3.selectAll("circle").remove();
    d3.selectAll("path.focusline").remove();
    d3.selectAll("g > *").remove();

    // loading the data.
    data.forEach(function(d) {
        d.jaar = parseDate(d.jaar);
        d.windsnelheid = +d.windsnelheid;
        d.temperatuur = +d.temperatuur;
        d.vochtigheid = +d.vochtigheid;
  })

    // the domains for x and y
    var xdomain = d3.extent(data, function(d) { return d.jaar; });
    var ydomain = d3.extent(data, function(d) { return d.temperatuur; });

    // the scale for x
    var xscale = d3.time.scale()
        .range([0, width])
        .domain(xdomain);

    // the scale for y.
    var yscale = d3.scale.linear()
        .range([height, 0])
        .domain(ydomain);

    // the x axis
    var xAxis = d3.svg.axis()
        .scale(xscale)
        .orient("bottom");

    // the y axis.
    var yAxis = d3.svg.axis()
        .scale(yscale)
        .orient("left");

    // preparing the lines (windspeed, temperature and humidity)
    var line = d3.svg.line()
        .x(function(d) { return xscale(d.jaar); })
        .y(function(d) { return yscale(d.windsnelheid); })

    var line2 = d3.svg.line()
        .x(function(d) { return xscale(d.jaar); })
        .y(function(d) { return yscale(d.temperatuur); })

    var line3 = d3.svg.line()
        .x(function(d) { return xscale(d.jaar); })
        .y(function(d) { return yscale(d.vochtigheid); })

    // adding the x axis
    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // adding the y axis.
    g.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .style("text-anchor", "end")
        .text("windsnelheid, temperatuur, vochtigheid");

    // adding the lines
    g.append("path")
        .attr("class", "line")
        .attr("d", line(data));

    g.append("path")
        .attr("class", "line2")
        .attr("d", line2(data));

    g.append("path")
        .attr("class", "line3")
        .attr("d", line3(data));

    // making circles for selecting values.
    g.selectAll('circle').data(data).enter().append('circle')
        .attr('cx', function(d) { return xscale(d.jaar); })
        .attr('cy', function(d) { return yscale(d.windsnelheid); })
        .attr('r', 1)
        .attr('class', 'circle')
        .attr("fill", "steelblue");

    // focus tracking
    var focus = g.append('g').attr("class", "line");
    var focus2 = g.append('g').attr("class", "line2");
    var focus3 = g.append('g').attr("class", "line3");

    // adding the text and focus lines.
    focus.append('line')
        .attr('id', 'focusLineX')
        .attr('class', 'focusLine')
    focus.append('circle')
        .attr('id', 'focusCircle')
        .attr('r', 1)
        .attr('class', 'circle focusCircle');
    focus.append("text")
        .attr('id', 'focusTexty')
        .attr("x", -25)
        .attr("dy", ".35em")
    focus.append("text")
        .attr('id', 'focusTextx')
        .attr("x", (width - 200))
        .attr("dy", ".35em");

    focus2.append("text")
        .attr('id', 'focusTexty2')
        .attr("x", -25)
        .attr("dy", ".35em")
    focus2.append("text")
        .attr('id', 'focusTextx2')
        .attr("x", (width - 2000))
        .attr("dy", ".35em");

    focus3.append("text")
        .attr('id', 'focusTexty3')
        .attr("x", -25)
        .attr("dy", ".35em")
    focus3.append("text")
        .attr('id', 'focusTextx3')
        .attr("x", (width - 2000))
        .attr("dy", ".35em");

    var bisectDate = d3.bisector(function(d) { return d.jaar; }).left;

    // making a rect that knows hows moving over the graph.
    g.append('rect')
        .attr('class', 'overlay')
        .attr('width', width)
        .attr('height', height)
        .attr("fill", "white")
        .attr("opacity", 0)
        .on('mouseover', function() { focus.style('display', null), focus2.style('display', null), focus3.style('display', null); })
        .on('mouseout', function() { focus.style('display', 'none'), focus2.style('display', 'none'), focus3.style('display', 'none'); })
        .on('mousemove', function() {
            var mouse = d3.mouse(this);
            var mouseDate = xscale.invert(mouse[0]);
            // returns the index to the current dat
            var i = bisectDate(data, mouseDate);

            var d0 = data[i - 1]
            var d1 = data[i];

            // work out which date value is closest to the mouse
            var d = mouseDate - d0[0] > d1[0] - mouseDate ? d1 : d0;

            // the x and y data.
            var x = xscale(d.jaar);
            var y = yscale(d.windsnelheid);
            var y2 = yscale(d.temperatuur);
            var y3 = yscale(d.vochtigheid);

            // adding the data that wil be shown when moving over the graph.
            focus.select('#focusCircle')
                .attr('cx', x)
                .attr('cy', y);
            focus.select('#focusLineX')
                .attr('x1', x).attr('y1', yscale(ydomain[0]))
                .attr('x2', x).attr('y2', yscale(ydomain[1]));
            focus.select('#focusLineY')
                .attr('x1', xscale(xdomain[0])).attr('y1', y)
                .attr('x2', xscale(xdomain[1])).attr('y2', y);
            focus.select("#focusTexty")
                .attr("transform", "translate(" + xscale(xdomain[0]) + "," + (y) + ")")
                .text(d.windsnelheid);
              x = x - focus.select("#focusTextx").node().getComputedTextLength() * xscale(d[0]);
            focus.select("#focusTextx")
                .attr("transform", "translate(" + x + "," + (yscale(ydomain[1]) - 10) + ")")
                .text(d.jaar);

            focus2.select("#focusTexty2")
                .attr("transform", "translate(" + xscale(xdomain[0]) + "," + (y2) + ")")
                .text(d.temperatuur);
              x = x - focus2.select("#focusTextx2").node().getComputedTextLength() * xscale(d[0]);

            focus3.select("#focusTexty3")
                .attr("transform", "translate(" + xscale(xdomain[0]) + "," + (y3) + ")")
                .text(d.vochtigheid);
              x = x - focus3.select("#focusTextx3").node().getComputedTextLength() * xscale(d[0]);


            });
        });
    });
}
