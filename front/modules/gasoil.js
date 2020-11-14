export let fetchGasoil = () => {
  fetch('http://localhost:3000/api/gasoil/', { method: 'GET' })
  .then((response) => {
    console.log(response);
    response.text().then((text) => {
      console.log(text);
    });
  })
};

export function getChart() { 
  let ctx = document.getElementById('myChart').getContext('2d');

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
      }]
    },

    // Configuration options go here
    options: {}
  });
}