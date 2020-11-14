const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./connect');
const { json } = require('express');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api/', (req, res) => res.send('coucou!'));
app.get('/api/gasoil/', (req, res) => {
  db.query('SELECT * FROM gasoil_stock;', (error, result) => {
    if (error) {
      return result.status(400).json({
        error: 'Impossible to get any stock!'
      });
    }
    res.json(result);
  });
});

app.post('/api/gasoil/', (req, res) => {
  const { stock_id, stock_level, stock_date } = req.body;
  db.query('INSERT INTO gasoil_stock (stock_id, stock_level, stock_date) VALUES (?, ?, ?)',
    [stock_id, stock_level, stock_date],
    (error, result) => {
      if (error) {
        res.status(400).json({ error: 'Impossible to add the update!' });
      }
      res.json(result);
    });
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