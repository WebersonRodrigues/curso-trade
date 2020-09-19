google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Tecnologia', 'Nota'],
    ['Delphi',     10],
    ['SQL',      8],
    ['HTML',  7],
    ['CSS', 9 ],
    ['JavaScrip',    6]
  ]);

  var options = {
    title: 'Notas sobre as tecnologias',
    is3D: true
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}