export let getTemplate = (id, stockId, stockDates, stockLevels) => {
  return `
  <div class="container" id="container">
    <div class="stock-title">${getTitle(stockId)}</div>
      <div class="chart-container">
        <canvas id="myChart" class="chart"></canvas>
      </div>
      <div class="btn-container">
        <button type="button" id="btn-add" class="btn btn-add">Ajouter un mouvement</button>
      </div>
      <h1>Historique</h1>
      <table>
        <tr>
          <th style="width: 75px;">Id</th>
          <th>Date</th>
          <th>Quantité (en litres)</th>
          <th style="text-align: center;">Actions</th>
        </tr>
      ${stockTableTemplate(id, stockDates, stockLevels)}
      </table>
        <div id="modal" class="modal" style="display: none;"></div>
    </div>
  </div>
  `
};

export let getModal = (action) => {
  switch (action) {
    case 'add':
      return `
      <div class="modal-wrapper" id="modal-wrapper">
        <h1>Ajouter un mouvement</h1>
        <form id="form" class="modal-form" novalidate>
          <label for="quantity" class="modal-label">Quantité</label>
          <input type="text" class="modal-input" id="modal-input" name="quantity" required pattern="^-?\\d{1,5}"></input><br>
          <div style="display: flex;">
            <button type="button" class="btn btn-add modal-btn" id="btn-confirm" disabled>Confirmer</button>
            <button type="button" class="btn btn-del modal-btn" id="btn-cancel">Annuler</button>
          </div>
        </form>
      </div>
      `
    case 'update':
      return `
      <div class="modal-wrapper" id="modal-wrapper">
        <h1>Modifier un mouvement</h1>
        <form id="form" class="modal-form" novalidate>
          <label for="quantity" class="modal-label">Quantité</label>
          <input type="text" class="modal-input" id="modal-input" name="quantity" required pattern="^\\d{1,5}"></input><br>
          <div style="display: flex;">
            <button type="button" class="btn btn-add modal-btn" id="btn-confirm" disabled>Confirmer</button>
            <button type="button" class="btn btn-del modal-btn" id="btn-cancel">Annuler</button>
          </div>
        </form>
      </div>
      `
    case 'delete':
      return `
      <div class="modal-wrapper" id="modal-wrapper"> 
        <h1>Supprimer un mouvement</h1>
        <form id="form" class="modal-form" novalidate>
          <div class="modal-text">Êtes-vous sûr de vouloir supprimer ?</div>
          <div style="display: flex;">
            <button type="button" class="btn btn-add modal-btn" id="btn-confirm">Confirmer</button>
            <button type="button" class="btn btn-del modal-btn" id="btn-cancel">Annuler</button>
          </div>
        </form>
      </div>
      `
    default:
      break;
  }
};

let getTitle = (stockId) => {
  switch (stockId) {
    case 1:
      return 'Diesel';
    case 2:
      return 'Essence';
    case 3:
      return 'Adblue';
    default:
      break;
  }
}

let stockTableTemplate = (id, stockDates, stockLevels) => {
  let table = [];
  for (let i = 0; i < stockDates.length && i < stockLevels.length; i++) {
    table = [...table, `
    <tr>
      <td>${id[i]}</td>
      <td>${stockDates[i]}</td>
      <td>${stockLevels[i]}</td>
      <td style="display: flex;"><button type="button" class="btn btn-upd" id="btn-update" value="${id[i]}">Modifier</button>
          <button type="button" class="btn btn-del" id="btn-delete" value="${id[i]}">Supprimer</button></td>
    </tr>`];
  }
  table = table.reverse(); // (╯°□°）╯︵ ┻━┻
  return table;
};
