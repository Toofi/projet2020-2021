export let getTemplate = (stockDates, stockLevels) => {
  return `
  <div class="container">
  <div class="chart-container">
    <canvas id="myChart" class="chart"></canvas>
    <h1>Historique</h1>
      <table>
        
        ${stockDates.map((element) => '<tr><td>'+element+'</td>')}
        ${stockLevels.map((element) => '<td>'+element+'</td></tr>')}
        
      </table>
  </div>
</div>
`
};
