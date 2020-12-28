import * as diesel from './modules/diesel.js';
import * as fmd from './modules/format.js';

document.getElementById("diesel").onclick = () => {
  console.log("click on diesel");
  diesel.fetchDiesel('gasoil');
};

document.getElementById("essence").addEventListener('click', (e) => {
  console.log("click on essence");
});

document.getElementById("adblue").addEventListener('click', (e) => {
  console.log("click on adblue");
});
