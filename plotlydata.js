var xValues = ['A', 'B', 'C', 'D', 'E'];

var yValues = ['W', 'X', 'Y', 'Z'];

var zValues = [
  [0.00, 0.00, 0.75, 0.75, 0.00],
  [0.00, 0.00, 0.75, 0.75, 0.00],
  [0.75, 0.75, 0.75, 0.75, 0.75],
  [0.00, 0.00, 0.00, 0.75, 0.00]
];

var colorscaleValue = [
  [0, '#3D9970'],
  [1, '#001f3f']
];

var data = [{
  x: xValues,
  y: yValues,
  z: zValues,
  type: 'heatmap',
  colorscale: colorscaleValue,
  showscale: false
}];

var layout = {
  title: 'Annotated Heatmap',
  annotations: [],
  xaxis: {
    ticks: '',
    side: 'top'
  },
  yaxis: {
    ticks: '',
    ticksuffix: ' ',
    width: 700,
    height: 700,
    autosize: false
  }
};

for ( var i = 0; i < yValues.length; i++ ) {
  for ( var j = 0; j < xValues.length; j++ ) {
    var currentValue = zValues[i][j];
    if (currentValue != 0.0) {
      var textColor = 'white';
    }else{
      var textColor = 'black';
    }
    var result = {
      xref: 'x1',
      yref: 'y1',
      x: xValues[j],
      y: yValues[i],
      text: zValues[i][j],
      font: {
        family: 'Arial',
        size: 12,
        color: 'rgb(50, 171, 96)'
      },
      showarrow: false,
      font: {
        color: textColor
      }
    };
    layout.annotations.push(result);
  }
}

Plotly.newPlot('heatmap', data, layout);








// BASIC HEATMAP

// var data = [
//   {
//     z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
//     type: 'heatmap'
//   }
// ];

// Plotly.newPlot('heatmap', data);

// /* Current Plotly.js version */
// console.log( Plotly.BUILD );