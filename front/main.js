import * as diesel from './modules/diesel.js';

document.getElementById("diesel").onclick = () => {
  console.log("click on diesel")
  fetch('./views/diesel.html', { method: 'GET' })
    .then((response) => {
      response.text().then((text) => { 
        document.getElementById('content').innerHTML = text;
        diesel.fetchDiesel('gasoil');
      });
    });
};

document.getElementById("essence").addEventListener('click', (e) =>{
  console.log("click on essence");
});

document.getElementById("adblue").addEventListener('click', (e) =>{
  console.log("click on adblue");
});