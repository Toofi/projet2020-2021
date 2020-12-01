import * as connexion from './connexion.js';
import * as format from './format.js';
import * as chart from './getLineChart.js';
import * as template from './template.js';

export let fetchDiesel = async (stock) => {
  let data = await connexion.fetchStock('gasoil');
  var diesel = format.formatData(data);
  console.log(diesel.stockDates);
  document.getElementById('content').innerHTML = template.getTemplate(diesel.stockDates, diesel.stockLevels);
  chart.getLineChart(diesel.stockDates, diesel.stockLevels);

  document.getElementById('btn-add').onclick = () => {
    openModal('add');
  };

  document.getElementById('btn-upd').onclick = () => {
    openModal('update');
  };

  document.getElementById('btn-del').onclick = () => {
    openModal('delete');
  };

  const openModal = (action) => {
    var target = document.getElementById('modal');
    target.innerHTML = template.getModal(action);
    target.style.display = null;

    document.getElementById('btn-confirm').onclick = () => {
      connexion.addStock('gasoil', data);
    };

    document.getElementById('btn-cancel').onclick = () => {
      target.style.display = 'none';
    };
  }


};
