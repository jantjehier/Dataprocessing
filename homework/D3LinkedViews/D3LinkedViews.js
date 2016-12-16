// Jan Maarten de Vries Student number: 11408731

//list of countrycodes for this assignment we need the 3 letter country code.
var country_codes = [
  ["af", "AFG", "Afghanistan"],
  ["ax", "ALA", "Åland Islands"],
  ["al", "ALB", "Albania"],
  ["dz", "DZA", "Algeria"],
  ["as", "ASM", "American Samoa"],
  ["ad", "AND", "Andorra"],
  ["ao", "AGO", "Angola"],
  ["ai", "AIA", "Anguilla"],
  ["aq", "ATA", "Antarctica"],
  ["ag", "ATG", "Antigua and Barbuda"],
  ["ar", "ARG", "Argentina"],
  ["am", "ARM", "Armenia"],
  ["aw", "ABW", "Aruba"],
  ["au", "AUS", "Australia"],
  ["at", "AUT", "Austria"],
  ["az", "AZE", "Azerbaijan"],
  ["bs", "BHS", "Bahamas"],
  ["bh", "BHR", "Bahrain"],
  ["bd", "BGD", "Bangladesh"],
  ["bb", "BRB", "Barbados"],
  ["by", "BLR", "Belarus"],
  ["be", "BEL", "Belgium"],
  ["bz", "BLZ", "Belize"],
  ["bj", "BEN", "Benin"],
  ["bm", "BMU", "Bermuda"],
  ["bt", "BTN", "Bhutan"],
  ["bo", "BOL", "Bolivia"],
  ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
  ["ba", "BIH", "Bosnia and Herzegovina"],
  ["bw", "BWA", "Botswana"],
  ["bv", "BVT", "Bouvet Island"],
  ["br", "BRA", "Brazil"],
  ["io", "IOT", "British Indian Ocean Territory"],
  ["bn", "BRN", "Brunei Darussalam"],
  ["bg", "BGR", "Bulgaria"],
  ["bf", "BFA", "Burkina Faso"],
  ["bi", "BDI", "Burundi"],
  ["kh", "KHM", "Cambodia"],
  ["cm", "CMR", "Cameroon"],
  ["ca", "CAN", "Canada"],
  ["cv", "CPV", "Cape Verde"],
  ["ky", "CYM", "Cayman Islands"],
  ["cf", "CAF", "Central African Republic"],
  ["td", "TCD", "Chad"],
  ["cl", "CHL", "Chile"],
  ["cn", "CHN", "China"],
  ["cx", "CXR", "Christmas Island"],
  ["cc", "CCK", "Cocos (Keeling) Islands"],
  ["co", "COL", "Colombia"],
  ["km", "COM", "Comoros"],
  ["cg", "COG", "Congo"],
  ["cd", "COD", "Congo the Democratic Republic of the"],
  ["ck", "COK", "Cook Islands"],
  ["cr", "CRI", "Costa Rica"],
  ["ci", "CIV", "Côte d'Ivoire"],
  ["hr", "HRV", "Croatia"],
  ["cu", "CUB", "Cuba"],
  ["cw", "CUW", "Curaçao"],
  ["cy", "CYP", "Cyprus"],
  ["cz", "CZE", "Czech Republic"],
  ["dk", "DNK", "Denmark"],
  ["dj", "DJI", "Djibouti"],
  ["dm", "DMA", "Dominica"],
  ["do", "DOM", "Dominican Republic"],
  ["ec", "ECU", "Ecuador"],
  ["eg", "EGY", "Egypt"],
  ["sv", "SLV", "El Salvador"],
  ["gq", "GNQ", "Equatorial Guinea"],
  ["er", "ERI", "Eritrea"],
  ["ee", "EST", "Estonia"],
  ["et", "ETH", "Ethiopia"],
  ["fk", "FLK", "Falkland Islands (Malvinas)"],
  ["fo", "FRO", "Faroe Islands"],
  ["fj", "FJI", "Fiji"],
  ["fi", "FIN", "Finland"],
  ["fr", "FRA", "France"],
  ["gf", "GUF", "French Guiana"],
  ["pf", "PYF", "French Polynesia"],
  ["tf", "ATF", "French Southern Territories"],
  ["ga", "GAB", "Gabon"],
  ["gm", "GMB", "Gambia"],
  ["ge", "GEO", "Georgia"],
  ["de", "DEU", "Germany"],
  ["gh", "GHA", "Ghana"],
  ["gi", "GIB", "Gibraltar"],
  ["gr", "GRC", "Greece"],
  ["gl", "GRL", "Greenland"],
  ["gd", "GRD", "Grenada"],
  ["gp", "GLP", "Guadeloupe"],
  ["gu", "GUM", "Guam"],
  ["gt", "GTM", "Guatemala"],
  ["gg", "GGY", "Guernsey"],
  ["gn", "GIN", "Guinea"],
  ["gw", "GNB", "Guinea-Bissau"],
  ["gy", "GUY", "Guyana"],
  ["ht", "HTI", "Haiti"],
  ["hm", "HMD", "Heard Island and McDonald Islands"],
  ["va", "VAT", "Holy See (Vatican City State)"],
  ["hn", "HND", "Honduras"],
  ["hk", "HKG", "Hong Kong"],
  ["hu", "HUN", "Hungary"],
  ["is", "ISL", "Iceland"],
  ["in", "IND", "India"],
  ["id", "IDN", "Indonesia"],
  ["ir", "IRN", "Iran"],
  ["iq", "IRQ", "Iraq"],
  ["ie", "IRL", "Ireland"],
  ["im", "IMN", "Isle of Man"],
  ["il", "ISR", "Israel"],
  ["it", "ITA", "Italy"],
  ["jm", "JAM", "Jamaica"],
  ["jp", "JPN", "Japan"],
  ["je", "JEY", "Jersey"],
  ["jo", "JOR", "Jordan"],
  ["kz", "KAZ", "Kazakhstan"],
  ["ke", "KEN", "Kenya"],
  ["ki", "KIR", "Kiribati"],
  ["kp", "PRK", "North Korea"],
  ["kr", "KOR", "South Korea"],
  ["kw", "KWT", "Kuwait"],
  ["kg", "KGZ", "Kyrgyzstan"],
  ["la", "LAO", "Lao People's Democratic Republic"],
  ["lv", "LVA", "Latvia"],
  ["lb", "LBN", "Lebanon"],
  ["ls", "LSO", "Lesotho"],
  ["lr", "LBR", "Liberia"],
  ["ly", "LBY", "Libya"],
  ["li", "LIE", "Liechtenstein"],
  ["lt", "LTU", "Lithuania"],
  ["lu", "LUX", "Luxembourg"],
  ["mo", "MAC", "Macao"],
  ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
  ["mg", "MDG", "Madagascar"],
  ["mw", "MWI", "Malawi"],
  ["my", "MYS", "Malaysia"],
  ["mv", "MDV", "Maldives"],
  ["ml", "MLI", "Mali"],
  ["mt", "MLT", "Malta"],
  ["mh", "MHL", "Marshall Islands"],
  ["mq", "MTQ", "Martinique"],
  ["mr", "MRT", "Mauritania"],
  ["mu", "MUS", "Mauritius"],
  ["yt", "MYT", "Mayotte"],
  ["mx", "MEX", "Mexico"],
  ["fm", "FSM", "Micronesia, Federated States of"],
  ["md", "MDA", "Moldova, Republic of"],
  ["mc", "MCO", "Monaco"],
  ["mn", "MNG", "Mongolia"],
  ["me", "MNE", "Montenegro"],
  ["ms", "MSR", "Montserrat"],
  ["ma", "MAR", "Morocco"],
  ["mz", "MOZ", "Mozambique"],
  ["mm", "MMR", "Myanmar"],
  ["na", "NAM", "Namibia"],
  ["nr", "NRU", "Nauru"],
  ["np", "NPL", "Nepal"],
  ["nl", "NLD", "Netherlands"],
  ["nc", "NCL", "New Caledonia"],
  ["nz", "NZL", "New Zealand"],
  ["ni", "NIC", "Nicaragua"],
  ["ne", "NER", "Niger"],
  ["ng", "NGA", "Nigeria"],
  ["nu", "NIU", "Niue"],
  ["nf", "NFK", "Norfolk Island"],
  ["mp", "MNP", "Northern Mariana Islands"],
  ["no", "NOR", "Norway"],
  ["om", "OMN", "Oman"],
  ["pk", "PAK", "Pakistan"],
  ["pw", "PLW", "Palau"],
  ["ps", "PSE", "Palestine, State of"],
  ["pa", "PAN", "Panama"],
  ["pg", "PNG", "Papua New Guinea"],
  ["py", "PRY", "Paraguay"],
  ["pe", "PER", "Peru"],
  ["ph", "PHL", "Philippines"],
  ["pn", "PCN", "Pitcairn"],
  ["pl", "POL", "Poland"],
  ["pt", "PRT", "Portugal"],
  ["pr", "PRI", "Puerto Rico"],
  ["qa", "QAT", "Qatar"],
  ["re", "REU", "Réunion"],
  ["ro", "ROU", "Romania"],
  ["ru", "RUS", "Russia"],
  ["rw", "RWA", "Rwanda"],
  ["bl", "BLM", "Saint Barthélemy"],
  ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
  ["kn", "KNA", "Saint Kitts and Nevis"],
  ["lc", "LCA", "Saint Lucia"],
  ["mf", "MAF", "Saint Martin (French part)"],
  ["pm", "SPM", "Saint Pierre and Miquelon"],
  ["vc", "VCT", "Saint Vincent and the Grenadines"],
  ["ws", "WSM", "Samoa"],
  ["sm", "SMR", "San Marino"],
  ["st", "STP", "Sao Tome and Principe"],
  ["sa", "SAU", "Saudi Arabia"],
  ["sn", "SEN", "Senegal"],
  ["rs", "SRB", "Serbia"],
  ["sc", "SYC", "Seychelles"],
  ["sl", "SLE", "Sierra Leone"],
  ["sg", "SGP", "Singapore"],
  ["sx", "SXM", "Sint Maarten (Dutch part)"],
  ["sk", "SVK", "Slovakia"],
  ["si", "SVN", "Slovenia"],
  ["sb", "SLB", "Solomon Islands"],
  ["so", "SOM", "Somalia"],
  ["za", "ZAF", "South Africa"],
  ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
  ["ss", "SSD", "South Sudan"],
  ["es", "ESP", "Spain"],
  ["lk", "LKA", "Sri Lanka"],
  ["sd", "SDN", "Sudan"],
  ["sr", "SUR", "Suriname"],
  ["sj", "SJM", "Svalbard and Jan Mayen"],
  ["sz", "SWZ", "Swaziland"],
  ["se", "SWE", "Sweden"],
  ["ch", "CHE", "Switzerland"],
  ["sy", "SYR", "Syrian Arab Republic"],
  ["tw", "TWN", "Taiwan, Province of China"],
  ["tj", "TJK", "Tajikistan"],
  ["tz", "TZA", "Tanzania, United Republic of"],
  ["th", "THA", "Thailand"],
  ["tl", "TLS", "Timor-Leste"],
  ["tg", "TGO", "Togo"],
  ["tk", "TKL", "Tokelau"],
  ["to", "TON", "Tonga"],
  ["tt", "TTO", "Trinidad and Tobago"],
  ["tn", "TUN", "Tunisia"],
  ["tr", "TUR", "Turkey"],
  ["tm", "TKM", "Turkmenistan"],
  ["tc", "TCA", "Turks and Caicos Islands"],
  ["tv", "TUV", "Tuvalu"],
  ["ug", "UGA", "Uganda"],
  ["ua", "UKR", "Ukraine"],
  ["ae", "ARE", "United Arab Emirates"],
  ["gb", "GBR", "United Kingdom"],
  ["us", "USA", "United States"],
  ["um", "UMI", "United States Minor Outlying Islands"],
  ["uy", "URY", "Uruguay"],
  ["uz", "UZB", "Uzbekistan"],
  ["vu", "VUT", "Vanuatu"],
  ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
  ["vn", "VNM", "Viet Nam"],
  ["vg", "VGB", "Virgin Islands, British"],
  ["vi", "VIR", "Virgin Islands, U.S."],
  ["wf", "WLF", "Wallis and Futuna"],
  ["eh", "ESH", "Western Sahara"],
  ["ye", "YEM", "Yemen"],
  ["zm", "ZMB", "Zambia"],
  ["zw", "ZWE", "Zimbabwe"] ];

// loeding json data for map
  d3.json("maptotal.json", function(error, data) {
    data.forEach(function(d) {
          d.country = d.country;
          d.total = +d.total;
    });
// making the data dictionary
var dataT = {}
// making variable for the fillkey
var fillkey;
// for the size of the list of countrycodes
for(var j = 0; j < 248; j++)
{
  // for the length of data
  for (var i = 0; i < data.length; i++)
  {
    // checking if the data is the same as the country in the array
    if(country_codes[j][2] == data[i].country)
    {
      // for number the fillkey of the data is one, two, ... rest.
      if (data[i].total < 10000000)
      {
        fillkey = 'one';
      }
      else if(data[i].total < 20000000)
      {
        fillkey = 'two';
      }
      else if(data[i].total < 30000000)
      {
        fillkey = 'three';
      }
      else if(data[i].total < 40000000)
      {
        fillkey = 'four';
      }
      else if(data[i].total < 50000000)
      {
        fillkey = 'five';
      }
      else if(data[i].total < 60000000)
      {
        fillkey = 'six';
      }
      else if(data[i].total < 70000000)
      {
        fillkey = 'seven';
      }
      else if(data[i].total < 80000000)
      {
        fillkey = 'eight';
      }
      else if(data[i].total < 90000000)
      {
        fillkey = 'nine';
      }
      else if(data[i].total < 100000000)
      {
        fillkey = 'ten';
      }
      else if(data[i].total < 200000000)
      {
        fillkey = 'eleven';
      }
      else if(data[i].total < 300000000)
      {
        fillkey = 'twelfe';
      }
      else
      {
        fillkey = 'rest';
      }
      // adding all data together
      dataT[country_codes[j][1]] = {
        'country': data[i].country,
        'total': data[i].total,
        'fillKey': fillkey
      }
    }
  }
}

// adding the map to the website.
var mmap = $("#container").datamap({
   scope: 'world',
   geography_config: {
     borderColor: 'rgba(255,255,255,0.3)',
     highlightBorderColor: 'rgba(0,0,0,0.5)',
     // the popups with countrynames and values
     popupTemplate: _.template([
       '<div class="hoverinfo">',
       '<strong><%= geography.properties.name %> ',
       '<% if (data.total) { %>',
       '<small>total population: <%= data.total %><% } %><small>',
       '</div>'
      ].join('') )
   },

  // the fillkeys with the color values
  fills: {
  	'one': '#b3ffb3', // your color here
    'two': '#80ff80',
    'three': '#4dff4d',
    'four': '#1aff1a',
    'five': '#00ff00',
    'six': '#00e600',
    'seven': '#00cc00',
    'eight': '#00b300',
    'nine': '#009900',
    'ten': '#008000',
    'eleven': '#004d00',
    'twelfe': '#003300',
    'rest': '#001a00',
  	defaultFill: 'gray' // Rest of world
},
// adding the data to the map
  data: dataT,

})
});

// werkend bij gegeven landcode
window.onload = function(){

// adding the width, height, radius, color.
  var w = 400;
  var h = 400;
  var r = h/2;
  var color = d3.scale.linear()
            .range(['aquamarine', 'pink'])

  // the size by hovering
  var arc = d3.svg.arc()
      .innerRadius(0)
      .outerRadius(100);

    var arcOver = d3.svg.arc()
      .innerRadius(0)
      .outerRadius(150 + 40);

    // determine wich file has to be loaded.
    var file2

      d3.selectAll(".m")
      .on("click", function() {
        var year = this.getAttribute("value");

        if(year == "2010")
        {
          file2 = "mapmf.json";
        }
        else
        {
          file2 = "mapmf2.json";
        }

  d3.json(file2, function(error, data) {
    // removing old pie chart if any.
    d3.select("#chart").select("svg").remove();

    data.forEach(function(d) {
        d.country = d.country;
        d.male = +d.male;
        d.female = +d.female;
  })
  // countrycode i would have used if my map click function worked.
  // a done function wasn't possible.
  var countrycode = "QAT";

  // changing the format to the needed format for pie charts.
  for (var k = 0; k < 248; k++)
  {
    for (var l = 0; l < data.length; l++)
    {
      if (country_codes[k][1] == countrycode)
      {
        if (data[l].country == country_codes[k][2])
        {
          var data = [{"label":"male", "value": data[l].male},
                      {"label":"female", "value": data[l].female}];
        }
      }
    }
  }
  // selecting the div and adding data.
  var vis = d3.select('#chart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("id", "piechart2").attr("transform", "translate(" + r + "," + r + ")");
  var pie = d3.layout.pie().value(function(d){return d.value;});

  // declare an arc generator function
  var arc = d3.svg.arc().outerRadius(r);

  // select paths, use arc generator to draw and the mouseover and on click funtions for the pie chart.
  var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice").attr("id", "piechart");
  arcs.append("svg:path")
      .attr("fill", function(d, i){
          return color(i);
      })
      .attr("d", function (d) {
          return arc(d);
      })
      .on("mouseover", function(d) {
        d3.select(this).transition()
          .duration(1000)
          .attr("d", arcOver);
      })
      .on("mouseout", function(d) {
        d3.select(this).transition()
          .duration(1000)
          .attr("d", arc);
      })
      .on("click", function(d) {
        d3.select("#barChart").select("svg").remove();

        // adding the margin, width and height.
        var margin = {top: 20, right: 20, bottom: 100, left: 80},
            width = 3000 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        // adding svg element.
        var svg = d3.select("#barChart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")")
        // if the slice you clicked on is the male slice. Make a barchart with all the totaldata.
        if (d.data.label == "male")
        {
          // adding the x scale.
          var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

          // adding the y scale.
          var y = d3.scale.linear().range([height, 0]);

          // the x and y axis.
          var xAxis = d3.svg.axis()
              .scale(x)
              .orient("bottom")

          var yAxis = d3.svg.axis()
              .scale(y)
              .orient("left")
              .ticks(10);

          // the tip for hover info.
          var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
            return "<strong>Total:</strong> <span style='color:black'>" + d.country + ", " + d.male + "</span>";
          })

          // call tip
          svg.call(tip);

          // loading json file.
          d3.json("mapmf.json", function(error, data) {
              data.forEach(function(d) {
                  d.country = d.country;
                  d.male = +d.male;
              });

          // adding the x and y domain.
          x.domain(data.map(function(d) { return d.country; }));
          y.domain([0, d3.max(data, function(d) { return d.male; })]);

          // adding the axes and bars.
          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis)
            .selectAll("text")
              .style("text-anchor", "end")
              .attr("dx", "-.8em")
              .attr("dy", "-.55em")
              .attr("transform", "rotate(-90)" );

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Value ($)");

          svg.selectAll("bar")
              .data(data)
            .enter().append("rect")
              .style("fill", "aquamarine")
              .attr("x", function(d) { return x(d.country); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.male); })
              .attr("height", function(d) { return height - y(d.male); })
              .on('mouseover', tip.show)
              .on('mouseout', tip.hide)
            });
          }
// if the slice you clicked on is the female slice.
          else
          {
            // do the same but for the d.female data.
            var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

            var y = d3.scale.linear().range([height, 0]);

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
              return "<strong>Total:</strong> <span>" + d.country + ", " + d.female + "</span>";
            })

            // call tip
            svg.call(tip);

            d3.json("mapmf.json", function(error, data) {
                data.forEach(function(d) {
                    d.country = d.country;
                    d.female = +d.female;
                });

              x.domain(data.map(function(d) { return d.country; }));
              y.domain([0, d3.max(data, function(d) { return d.female; })]);

              svg.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + height + ")")
                  .call(xAxis)
                .selectAll("text")
                  .style("text-anchor", "end")
                  .attr("dx", "-.8em")
                  .attr("dy", "-.55em")
                  .attr("transform", "rotate(-90)" );

              svg.append("g")
                  .attr("class", "y axis")
                  .call(yAxis)
                .append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 6)
                  .attr("dy", ".71em")
                  .style("text-anchor", "end")
                  .text("Value ($)");

              svg.selectAll("bar")
                  .data(data)
                .enter().append("rect")
                  .style("fill", "pink")
                  .attr("x", function(d) { return x(d.country); })
                  .attr("width", x.rangeBand())
                  .attr("y", function(d) { return y(d.female); })
                  .attr("height", function(d) { return height - y(d.female); })
                  .on('mouseover', tip.show)
                  .on('mouseout', tip.hide)
                });
              }
            });
            // add the text to the pie chart.
            arcs.append("svg:text").attr("transform", function(d){
            			d.innerRadius = 0;
            			d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
                return d.value;}
            		);
          });
    });
}
