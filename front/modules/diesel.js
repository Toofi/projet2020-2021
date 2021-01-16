import * as connexion from './connexion.js';
import * as format from './format.js';
import * as chart from './getLineChart.js';
import * as template from './template.js';
import * as modal from './modal.js';

export let fetchDiesel = async (stock) => {
  let data = await connexion.fetchStock(stock);
  let stockReceived = format.formatData(data);
  document.getElementById('content').innerHTML = template.getTemplate(stockReceived.id, data[0].stock_id, stockReceived.stockDates, stockReceived.stockLevels);
  chart.getLineChart(stockReceived.stockDates, stockReceived.stockLevels);
  document.getElementById('container').classList.add('animation');

  document.getElementById('btn-add').onclick = () => {
    modal.openModal('add', stock, data);
  };

  let updateButton = [].slice.call(document.getElementsByClassName('btn btn-upd')).forEach(element => {
    element.addEventListener('click', () => {
      modal.openModal('update', stock, data, element.value);
    })
  });

  let deleteButton = [].slice.call(document.getElementsByClassName('btn btn-del')).forEach(element => {
    element.addEventListener('click', () => {
      modal.openModal('delete', stock, '', element.value);
    })
  });
};
