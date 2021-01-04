const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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

app.get('/api/', (req, res) => res.send('coucou!'));
app.get('/api/gasoil/', async (req, res) => {
  try {
    const gasoil = await query('SELECT * FROM gasoil_stock');
    res.json(gasoil);
  } catch (error) {
    return res.status(400).json({ error: 'impossible to get any level' });
  }
});

app.post('/api/gasoil/', async (req, res) => {
  try {
    const { stock_id, stock_level, stock_date } = req.body;
    const result = await query('INSERT INTO gasoil_stock (stock_id, stock_level, stock_date) VALUES (?, ?, ?)', [stock_id, stock_level, stock_date])
    console.log('POST ok');
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Impossible to add the update!' });
  }
});

app.put('/api/gasoil', async (req, res) => {
  console.log(req.body);
  try {
    const { id, stock_level } = req.body;
    const result = await query('UPDATE gasoil_stock SET stock_level = ? WHERE id = ?', [stock_level, id])
    console.log('PUT OK');
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Impossible to update the levels !"});
  }
});

app.delete('/api/gasoil/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM gasoil_stock WHERE id = ?', [id], (error, result) => {
    if (error) {
      return res.status(400).json({error : 'Impossible to delete the stock'});
    }
    res.json({result : 'stock deleted'});
  });
});

app.listen(port, () => console.log(`SERVER STARTED IN PORT ${port}`));