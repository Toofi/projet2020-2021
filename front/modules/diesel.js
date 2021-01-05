import * as connexion from './connexion.js';
import * as format from './format.js';
import * as chart from './getLineChart.js';
import * as template from './template.js';
import * as modal from './modal.js';

export let fetchDiesel = async (stock) => {
  let data = await connexion.fetchStock('gasoil');
  let diesel = format.formatData(data);
  console.log(diesel.id);
  document.getElementById('content').innerHTML = template.getTemplate(diesel.id, diesel.stockDates, diesel.stockLevels);
  chart.getLineChart(diesel.stockDates, diesel.stockLevels);

  document.getElementById('btn-add').onclick = () => {
    modal.openModal('add', 'gasoil', data);
  };

  document.getElementById('btn-update').onclick = () => {
    let id = document.getElementById('btn-update').value;
    console.log(id);
    modal.openModal('update', 'gasoil', data, id);
  };

  document.getElementById('btn-delete').onclick = () => {
    let id = document.getElementById('btn-delete').value;
    console.log(id);
    modal.openModal('delete', 'gasoil', '', id);
  };

};
