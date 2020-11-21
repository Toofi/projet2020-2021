export let getTemplate = (stock) => {
  return `
  <div class="container">
  <div class="chart-container">
    <canvas id="myChart" class="chart"></canvas>
    <h1>Historique</h1>
    ${stock.stockDates[2]}
  </div>
</div>
`
};