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

  let input = document.getElementById('modal-input').value;
  let lastElement = dataFetched.slice(-1)[0];
  let result = lastElement.stock_level + parseInt(input);
  console.log(result);
  switch (stock) {
    case 'gasoil':
      var stockId = 1;
      console.log(stockId);
      break;
  
    default:
      break;
  }

  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/api/' + stock + '/', { 
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: JSON.stringify({stock_id: stockId, stock_level: result, stock_date: Date.now()}) })
      .then(() => resolve());
  });

  //(stock_id, stock_level, stock_date)
};