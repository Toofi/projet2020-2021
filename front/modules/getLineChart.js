export function getLineChart(labels, data) {
  let ctx = document.getElementById('myChart').getContext('2d');

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: labels,
      datasets: [{
        label: 'Quantity (liters)',
        backgroundColor: 'rgb(236, 78, 32)',
        borderColor: 'rgb(236, 78, 32)',
        pointBorderWidth: 2.5,
        data: data
      }]
    },

    // Configuration options go here
    options: {
    }
  });
}