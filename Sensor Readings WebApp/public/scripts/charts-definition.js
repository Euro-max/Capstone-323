// Create the charts when the web page loads
window.addEventListener('load', onload);

function onload(event){
  chartAT = createTemperatureChart();
  chartST = createSoilTemperatureChart();
  chartM = createMoistureChart();
}

// Create Temperature Chart
function createTemperatureChart() {
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-temperature',
      type: 'spline' 
    },
    series: [{
        name: 'Current Air Temp.',
        data: []
      }, ],
    
    title: { 
      text: undefined
    },
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Air Temperature Celsius Degrees' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}

// Create Soil Temperature Celsius Chart
function createSoilTemperatureChart(){
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-SoilTemperature',
      type: 'spline'  
    },
    series: [{
      name: 'Soil Temperature in Celsius Degrees'
    }],
    title: { 
      text: undefined
    },    
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      },
      series: { 
        color: '#154734' 
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Soil Temperature in C' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}

// Create Soil Moisture Chart
function createMoistureChart() {
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-moisture',
      type: 'spline'  
    },
    series: [{
      name: 'Moisture level'
    }],
    title: { 
      text: undefined
    },    
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      },
      series: { 
        color: '#A62639' 
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Moisture level' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}
