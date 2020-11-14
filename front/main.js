import * as gasoil from './modules/gasoil.js';

document.getElementById("gasoil").onclick = () => {
  console.log("click on gasoil")
  fetch('./views/gasoil.html', { method: 'GET' })
    .then((response) => {
      response.text().then((text) => { 
        document.getElementById('content').innerHTML = text;
        gasoil.fetchGasoil();
        gasoil.getChart();
      });
    });
};

document.getElementById("essence").addEventListener('click', (e) =>{
  console.log("click on essence");
});

document.getElementById("adblue").addEventListener('click', (e) =>{
  console.log("click on adblue");
});