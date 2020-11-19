import * as connexion from './connexion.js';
import * as format from './format.js';
import * as chart from './getLineChart.js';

var diesel;

export let fetchDiesel = async (stock) => {
  let data = await connexion.fetchStocks('Gasoil');
  diesel = format.formatData(data);
  console.log(diesel);
  chart.getLineChart(diesel.stockDates, diesel.stockLevels);
};