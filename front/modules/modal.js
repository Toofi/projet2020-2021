import * as template from './template.js';
import * as connexion from './connexion.js';

export const openModal = (action, stock, data) => {
  let target = document.getElementById('modal');
  target.innerHTML = template.getModal(action);
  target.style.display = null;

  document.getElementById('btn-confirm').onclick = () => {
    connexion.addStock(stock, data);
  };

  document.getElementById('btn-cancel').onclick = () => {
    target.style.display = 'none';
  };
}