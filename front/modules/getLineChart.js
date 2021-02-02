export let getLineChart = (labels, data) => {
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: labels.slice(-30),
      datasets: [{
        label: 'Quantity (liters)',
        borderColor: 'rgb(236, 78, 32)',
        pointBorderWidth: 1.5,
        lineTension: 0.2,
        data: data.slice(-30)
      }]
    },

    // Configuration options go here
    options: {
    }
  });
}
