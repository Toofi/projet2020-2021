import * as diesel from './modules/diesel.js';

document.getElementById("diesel").onclick = () => {
  diesel.fetchDiesel('gasoil');
};

document.getElementById("essence").addEventListener('click', (e) => {
  diesel.fetchDiesel('essence');
});

document.getElementById("adblue").addEventListener('click', (e) => {
  diesel.fetchDiesel('adblue');
});
