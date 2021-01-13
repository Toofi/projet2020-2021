import * as template from './template.js';
import * as connexion from './connexion.js';

export const openModal = (action, stock, data, id) => {
  let target = document.getElementById('modal');
  target.innerHTML = template.getModal(action);
  target.style.display = null;
  document.getElementById('modal-wrapper').classList.add('modal-animation');


  document.getElementById('btn-confirm').onclick = () => {
    switch (action) {
      case 'add':
        connexion.addStock(stock, data);
        break;
      case 'update':
        connexion.updateStock(stock, id);
        break;
      case 'delete':
        connexion.deleteStock(stock, id);
        break;
      default:
        break;
    }
  };

  document.getElementById('btn-cancel').onclick = () => {
    target.style.display = 'none';
  };
}
