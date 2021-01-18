const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment');

const db = require('./connect');
const { json } = require('express');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

let query = (request, data) => {
  return new Promise((resolve, reject) => {
    db.query(request, (data || []), (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

let urlControl = (stockName) =>  ['gasoil', 'essence', 'adblue'].includes(stockName);

let dateControl = (dateToControl) => {
  let date = moment(dateToControl);
  return date.isValid();
}

app.get('/api/', (req, res) => res.send('coucou!'));
app.get('/api/:stock/', async (req, res) => {
  try {
    const stock = req.params.stock;
    if (urlControl(stock)) {
      const stockRequest = await query('SELECT * FROM ' + stock + '_stock');
      res.json(stockRequest);
    } else {
      res.status(400).json({ error: 'incorrect request' });
    }
  } catch (error) {
    return res.status(400).json({ error: 'impossible to get any level' });
  }
});

app.post('/api/:stock/', async (req, res) => {
  try {
    const stock = req.params.stock;
    const { stock_id, stock_level, stock_date } = req.body;
    if (urlControl(stock) && !isNaN(stock_id) && !isNaN(stock_level) && dateControl(stock_date)) {
      const stockRequest = await query('INSERT INTO ' + stock + '_stock (stock_id, stock_level, stock_date) VALUES (?, ?, ?)', [stock_id, stock_level, stock_date]);
      console.log('POST ok');
      res.json(stockRequest);
    } else {
      res.status(400).json({ error: 'incorrect request' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Impossible to add the update!' });
  }
});

app.put('/api/:stock', async (req, res) => {
  console.log(req.body);
  try {
    const stock = req.params.stock;
    const { id, stock_level } = req.body;
    if (urlControl(stock) && !isNaN(id) && !isNaN(stock_level)) {
      const stockRequest = await query('UPDATE ' + stock + '_stock SET stock_level = ? WHERE id = ?', [stock_level, id]);
      console.log('PUT OK');
      res.json(stockRequest);
    } else {
      res.status(400).json({ error: 'incorrect request' });
    }
  } catch (error) {
    res.status(400).json({ error: "Impossible to update the levels !" });
  }
});

app.delete('/api/:stock/:id', (req, res) => {
  try {
    const stock = req.params.stock;
    const id = req.params.id;
    if(urlControl(stock) && !isNaN(id)){
      db.query('DELETE FROM ' + stock + '_stock WHERE id = ?', [id], (error, result) => {
        res.json({ result: 'stock deleted' });
      });
    } else {
      res.status(400).json({ error: 'incorrect request' });
    }
  } catch (error) {
    res.statuts(400).json({ error: "Impossible to delete the stock." });
  }
});

app.listen(port, () => console.log(`SERVER STARTED IN PORT ${port}`));
