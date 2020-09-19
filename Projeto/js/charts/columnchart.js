google.charts.load("current", {packages:['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ["Vendeddor", "Valor", { role: "style" } ],
    ["Marlon", 5350.0, "#b87333"],
    ["Rafael", 4670.49, "silver"],
    ["Ingrid", 5000.0, "gold"],
    ["Thiago", 2150.0, "color: #e5e4e2"]
    ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Melhores vendedores",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }