export let getTemplate = (stockDates, stockLevels) => {
  return `
  <div class="container">
    <div class="chart-container">
      <canvas id="myChart" class="chart"></canvas>
    </div>
    <div class="btn-container">
      <button type="button" id="btn-add" class="btn btn-add">Ajouter un mouvement</button>
      <button type="button" id="btn-upd" class="btn btn-upd">Modifier un mouvement</button>
      <button type="button" id="btn-del" class="btn btn-del">Supprimer un mouvement</button>
    </div>
    <h1>Historique</h1>
    <table>
    <tr>
      <th>Date</th>
      <th>Quantité (en litres)</th>
    </tr>
      ${stockParkour(stockDates, stockLevels)}
    </table>
    <div id="modal" class="modal" style="display: none;">
    </div>
  </div>
  </div>
  `
};

export let getModal = (action) => {
  switch (action) {
    case 'add':
      return `
      <div class="modal-wrapper">
        <h1>Ajouter un mouvement</h1>
        <div class="modal-form">
          <label for="quantity" class="modal-label">Quantité </label>
          <input type="texte" class="modal-input" name="quantity"></input><br />
          <button type="button" class="btn btn-add modal-btn" id="btn-confirm">Confirmer</button>
          <button type="button" class="btn btn-del modal-btn" id="btn-cancel">Annuler</button>
        </div>
      </div>
      `
    case 'update':

      break;
    case 'delete':

      break;
    default:
      break;
  }
};

export let stockParkour = (stockDates, stockLevels) => {
  let table = [];
  for (let i = 0; i < stockDates.length && i < stockLevels.length; i++) {
    table = [...table, `<tr><td>${stockDates[i]}</td><td>${stockLevels[i]}</td></tr>`];
  }
  table = table.reverse(); // (╯°□°）╯︵ ┻━┻
  return table;
};