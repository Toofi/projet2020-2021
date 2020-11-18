let data;
const stockDate = [];
const stockLevel = [];
//a factoriser dans un module de connexion !
export let fetchGasoil = () => {
  fetch('http://localhost:3000/api/gasoil/', { method: 'GET' })
  .then((response) => {
    response.text().then((text) => {
      data = JSON.parse(text);
      console.log(data);
      if(stockDate.length == 0 && stockLevel.length == 0){
        for (let i = 0; i < data.length; i++){
          stockDate.push(new Date(Date.parse(data[i]['stock_date'])));
          stockLevel.push(data[i]['stock_level']);
        }
      }
      //a factoriser dans un module de formattage !
        for(let i = 0; i < stockDate.length; i++){
          stockDate[i] = stockDate[i].getDate()+"/"+stockDate[i].getMonth()+"/"+stockDate[i].getFullYear()+" "+stockDate[i].getHours()+":"+stockDate[i].getMinutes()+":"+stockDate[i].getSeconds();
        }
      console.log(stockDate);
      console.log(stockDate[0]);
      console.log(stockLevel);
      getChart();
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
      labels: stockDate,
      datasets: [{
        label: 'Quantity (liters)',
        backgroundColor: 'rgb(236, 78, 32)',
        borderColor: 'rgb(236, 78, 32)',
        pointBorderWidth: 2.5,
        data: stockLevel
      }]
    },

    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}