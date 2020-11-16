let data = [];
let data2 = [];
let stock_date = [];
let stock_level = [];

export let fetchGasoil = () => {
  fetch('http://localhost:3000/api/gasoil/', { method: 'GET' })
  .then((response) => {
    response.text().then((text) => {
      data = JSON.parse(text);
      console.log(data);
      if(stock_date.length == 0 && stock_level.length == 0){
        for (let i = 0; i < data.length; i++){
          stock_date.push(new Date(Date.parse(data[i]['stock_date'])));
          stock_level.push(data[i]['stock_level']);
        }
      }
      console.log(stock_date);
      console.log(stock_level);
    })
  })
};

export function getChart() { 
  let ctx = document.getElementById('myChart').getContext('2d');

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: stock_date,
      datasets: [{
        label: 'Quantity (liters)',
        backgroundColor: 'rgb(1, 111, 185)',
        borderColor: 'rgb(236, 78, 32)',
        data: stock_level
      }]
    },

    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}