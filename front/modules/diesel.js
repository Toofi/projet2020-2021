import * as connexion from './connexion.js';
import * as format from './format.js';
import * as chart from './getLineChart.js';
import * as template from './template.js';

export let fetchDiesel = async (stock) => {
  let data = await connexion.fetchStocks('Gasoil');
  var diesel = format.formatData(data);
  console.log(diesel.stockDates);
  document.getElementById('content').innerHTML = template.getTemplate(diesel);
  chart.getLineChart(diesel.stockDates, diesel.stockLevels);

};
