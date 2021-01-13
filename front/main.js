import * as diesel from './modules/diesel.js';

document.getElementById("diesel").onclick = () => {
  console.log("click on diesel");
  diesel.fetchDiesel('gasoil');
};

document.getElementById("essence").addEventListener('click', (e) => {
  console.log("click on essence");
  diesel.fetchDiesel('essence');
});

document.getElementById("adblue").addEventListener('click', (e) => {
  console.log("click on adblue");
  diesel.fetchDiesel('adblue');
});
