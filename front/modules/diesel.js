import * as connexion from './connexion.js';
import * as format from './format.js';
import * as chart from './getLineChart.js';
import * as template from './template.js';
import * as modal from './modal.js';

export let fetchDiesel = async (stock) => {
  let data = await connexion.fetchStock('gasoil');
  let diesel = format.formatData(data);
  document.getElementById('content').innerHTML = template.getTemplate(diesel.id, diesel.stockDates, diesel.stockLevels);
  chart.getLineChart(diesel.stockDates, diesel.stockLevels);

  document.getElementById('btn-add').onclick = () => {
    modal.openModal('add', 'gasoil', data);
  };

  let updateButton = [].slice.call(document.getElementsByClassName('btn btn-upd')).forEach(element => {
    element.addEventListener('click', () => {
      modal.openModal('update', 'gasoil', data, element.value);
    })
  });

  let deleteButton = [].slice.call(document.getElementsByClassName('btn btn-del')).forEach(element => {
    element.addEventListener('click', () => {
      modal.openModal('delete', 'gasoil', '', element.value);
    })
  });
};