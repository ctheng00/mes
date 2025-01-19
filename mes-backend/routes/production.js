const express = require('express');
const Production = require('../models/Production');
const router = express.Router();

router.get('/', async (req, res) => {
  const productions = await Production.findAll();
  res.json(productions);
});

router.post('/', async (req, res) => {
  const newProduction = await Production.create(req.body);
  res.json(newProduction);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updated = await Production.update(req.body, { where: { id } });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Production.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = router;