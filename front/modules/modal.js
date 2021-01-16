import * as template from './template.js';
import * as connexion from './connexion.js';

export const openModal = (action, stock, data, id) => {
  const modal = document.getElementById('modal');
  modal.innerHTML = template.getModal(action);
  setTimeout(() => {
    modal.classList.add('modal-animation');
  }, 1);
  modal.style.display = null;


  document.getElementById('btn-confirm').onclick = async () => {
    switch (action) {
      case 'add':
        await exitModal(modal);
        connexion.addStock(stock, data);
        break;
      case 'update':
        await exitModal(modal);
        connexion.updateStock(stock, id);
        break;
      case 'delete':
        await exitModal(modal);
        connexion.deleteStock(stock, id);
        break;
      default:
        break;
    }
  };

  document.getElementById('btn-cancel').onclick = () => {
    exitModal(modal);
  }
};

export const exitModal = (element) => {
  return new Promise((resolve) => {
    element.classList.remove('modal-animation');
    setTimeout(() => {
      element.style.display = 'none';
      resolve();
    }, 500);
  })
};
