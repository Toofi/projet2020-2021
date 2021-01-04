import * as connexion from './connexion.js';
import * as format from './format.js';
import * as chart from './getLineChart.js';
import * as template from './template.js';
import * as modal from './modal.js';

export let fetchDiesel = async (stock) => {
  let data = await connexion.fetchStock('gasoil');
  let diesel = format.formatData(data);
  console.log(diesel.stockDates);
  document.getElementById('content').innerHTML = template.getTemplate(diesel.stockDates, diesel.stockLevels);
  chart.getLineChart(diesel.stockDates, diesel.stockLevels);

  document.getElementById('btn-add').onclick = () => {
    modal.openModal('add', 'gasoil', data);
  };

  document.getElementById('btn-upd').onclick = () => {
    openModal('update', 'gasoil', data);
  };

  document.getElementById('btn-del').onclick = () => {
    openModal('delete', 'gasoil');
  };

};
