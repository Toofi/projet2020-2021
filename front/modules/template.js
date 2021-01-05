export let getTemplate = (id, stockDates, stockLevels) => {
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
      <th>Actions</th>
    </tr>
      ${stockParkour(id, stockDates, stockLevels)}
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
          <label for="quantity" class="modal-label">Quantité</label>
          <input type="text" class="modal-input" id="modal-input" name="quantity"></input><br>
          <button type="button" class="btn btn-add modal-btn" id="btn-confirm">Confirmer</button>
          <button type="button" class="btn btn-del modal-btn" id="btn-cancel">Annuler</button>
        </div>
      </div>
      `
    case 'update':
      return `
      <div class="modal-wrapper">
        <h1>Modifier un mouvement</h1>
        <div class="modal-form">
          <label for="quantity" class="modal-label">Quantité</label>
          <input type="text" class="modal-input" id="modal-input" name="quantity"></input><br>
          <button type="button" class="btn btn-add modal-btn" id="btn-confirm">Confirmer</button>
          <button type="button" class="btn btn-del modal-btn" id="btn-cancel">Annuler</button>
        </div>
      </div>
      `
    case 'delete':
      return `
      <div class="modal-wrapper">
        <h1>Supprimer un mouvement</h1>
        <div class="modal-form">
          Êtes-vous sûr de supprimer ?
          <button type="button" class="btn btn-add modal-btn" id="btn-confirm">Confirmer</button>
          <button type="button" class="btn btn-del modal-btn" id="btn-cancel">Annuler</button>
        </div>
      </div>
      `
    default:
      break;
  }
};

export let stockParkour = (id, stockDates, stockLevels) => {
  let table = [];
  for (let i = 0; i < stockDates.length && i < stockLevels.length; i++) {
    table = [...table, `
    <tr>
      <td>${id[i]}</td>
      <td>${stockDates[i]}</td>
      <td>${stockLevels[i]}</td>
      <td><button type="button" class="btn btn-upd" id="btn-update" value="${id[i]}" style="padding: 2px;">Modifier</button>
          <button type="button" class="btn btn-del" id="btn-delete" value="${id[i]}" style="padding: 2px;">Supprimer</button></td>
    </tr>`];
  }
  table = table.reverse(); // (╯°□°）╯︵ ┻━┻
  return table;
};