import * as fmd from './format.js';
import * as diesel from './diesel.js';

export let fetchStock = (stock) => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/api/' + stock + '/', { method: 'GET' })
      .then((response) => {
        response.text().then((text) => {
          try {
            let data = JSON.parse(text);
            resolve(data);
          } catch {
            reject('Impossible de convertir les données !');
          }
        })
      })
      .catch((response) => {
        reject('Impossible de se connecter à l\'API');
      });
  });
};

export let addStock = (stock, dataFetched) => {
  const input = document.getElementById('modal-input').value;
  const lastElement = dataFetched.slice(-1)[0];
  const result = lastElement.stock_level + parseInt(input, 10);
  console.log(result);
  switch (stock) {
    case 'gasoil':
      var stockId = 1;
      console.log(stockId);
      break;

    default:
      break;
  }

  fetch('http://localhost:3000/api/' + stock + '/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ stock_id: stockId, stock_level: result, stock_date: fmd.dateTimeFormat(new Date()) })
  })
    .then((result) => {
      console.log('REUSSITE',result);
      diesel.fetchDiesel('gasoil');
    })
    .catch((result) => {
      console.log('ECHEC',result);
    });
};

export let updateStock = (stock, id) => {
  const input = document.getElementById('modal-input').value;

  fetch('http://localhost:3000/api/' + stock + '/', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ stock_level: input, id: id})
  })
    .then((result) => {
      console.log('REUSSITE', result);
      diesel.fetchDiesel('gasoil');
    })

}

export let deleteStock = (stock, id ) => {
  
  fetch('http://localhost:3000/api/' + stock + '/' + id, {
    method: 'DELETE'
  })
    .then((result) => {
      console.log('REUSSITE', result);
      diesel.fetchDiesel('gasoil');
    })
}