window.onload = function(){

  // adding the svg, width, height and g.
  var svg = d3.select("svg"),
      margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // changes dates in javascript dates
  var parseDate = d3.time.format("%Y%m%d").parse;

  // loading the data
  d3.json("csv.json", function(error, data) {

    data.forEach(function(d) {
        d.jaar = parseDate(d.jaar);
        d.windsnelheid = +d.windsnelheid;
  })

    // the domains
    var xdomain = d3.extent(data, function(d) { return d.jaar; });
    var ydomain = d3.extent(data, function(d) { return d.windsnelheid; });

    // the scales
    var xscale = d3.time.scale()
        .range([0, width])
        .domain(xdomain);

    var yscale = d3.scale.linear()
        .range([height, 0])
        .domain(ydomain);

    // the axis
    var xAxis = d3.svg.axis()
        .scale(xscale)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yscale)
        .orient("left");

    // the line for the windspeed with x value the date
    var line = d3.svg.line()
        .x(function(d) { return xscale(d.jaar); })
        .y(function(d) { return yscale(d.windsnelheid); })

    // x axis
    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // y axis
    g.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .style("text-anchor", "end")
        .text("windsnelheid");

    // path to line
    g.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    // adding circles
    g.selectAll('circle').data(data).enter().append('circle')
        .attr('cx', function(d) { return xscale(d.jaar); })
        .attr('cy', function(d) { return yscale(d.windsnelheid); })
        .attr('r', 3)
        .attr('class', 'circle')
        .attr("fill", "steelblue");

    // focus tracking
    var focus = g.append('g').attr("class", "line");

    // appending crosshairlines, circles and text
    focus.append('line')
        .attr('id', 'focusLineX')
        .attr('class', 'focusLine')
    focus.append('line')
        .attr('id', 'focusLineY')
        .attr('class', 'focusLine')
    focus.append('circle')
        .attr('id', 'focusCircle')
        .attr('r', 4)
        .attr('class', 'circle focusCircle');
    focus.append("text")
        .attr('id', 'focusTexty')
        .attr("x", -21)
        .attr("dy", ".35em")
    focus.append("text")
        .attr('id', 'focusTextx')
        .attr("x", (width - 200))
        .attr("dy", ".35em");

    var bisectDate = d3.bisector(function(d) { return d.jaar; }).left;

    // the rect that detects the mouse position
    g.append('rect')
        .attr('class', 'overlay')
        .attr('width', width)
        .attr('height', height)
        .attr("fill", "white")
        .attr("opacity", 0)
        .on('mouseover', function() { focus.style('display', null); })
        .on('mouseout', function() { focus.style('display', 'none'); })
        .on('mousemove', function() {
            var mouse = d3.mouse(this);
            var mouseDate = xscale.invert(mouse[0]);
            var i = bisectDate(data, mouseDate); // returns the index to the current data item

            var d0 = data[i - 1]
            var d1 = data[i];

            // work out which date value is closest to the mouse
            var d = mouseDate - d0[0] > d1[0] - mouseDate ? d1 : d0;

            var x = xscale(d.jaar);
            var y = yscale(d.windsnelheid);

            // adding the text, focuscircle and focuslines.
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
                .attr("transform", "translate(" + xscale(xdomain[0]) + "," + (y - 10) + ")")
                .text(d.windsnelheid);
              x = x - focus.select("#focusTextx").node().getComputedTextLength() * xscale(d[0]);
            focus.select("#focusTextx")
                .attr("transform", "translate(" + x + "," + (yscale(ydomain[1]) - 10) + ")")
                .text(d.jaar);
        });
    });
}
