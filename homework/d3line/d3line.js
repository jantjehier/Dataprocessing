d3.json("csv.json", function(error, data) {
  data.forEach(function(d) {
        d.windsnelheid = d.windsnelheid;
        d.vochtigheid = +d.vochtigheid;
        d.jaar = +d.jaar;
        d.temperatuur = +d.temperatuur;
        d.plaats = +d.plaats;
  });
