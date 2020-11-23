export let fetchStocks = (stock) => {
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
