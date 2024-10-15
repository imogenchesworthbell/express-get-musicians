const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians
app.use(express.json());
app.use(express.urlencoded());

app.get("/musicians", async (req, res) => {
  const allMusicians = await Musician.findAll({});
  res.json(allMusicians);
});

app.get("/musicians/:id", async (req, res) => {
  const number = req.params.id;
  const musicianById = await Musician.findByPk(number);
  res.json(musicianById);
});

app.post("/musicians", async (req, res) => {
  const newMusician = await Musician.create(req.body);
  res.json(newMusician);
});

app.put("/musicians/:id", async (req, res) => {
  const updateMusician = await Musician.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updateMusician);
});

app.delete("/musicians/:id", async (req, res) => {
  const deletedMusician = await Musician.destroy({
    where: { id: req.params.id },
  });
  res.json(deletedMusician);
});

app.get("/bands", async (req, res) => {
  const allBands = await Band.findAll({});
  res.json(allBands);
});

app.get("/bands/:id", async (req, res) => {
  const number = req.params.id;
  const bandById = await Band.findByPk(number);
  res.json(bandById);
});

app.post("/bands", async (req, res) => {
  const newBand = await Band.create(req.body);
  res.json(newBand);
});

app.put("/bands/:id", async (req, res) => {
  const updatedBand = await Band.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updatedBand);
});

app.delete("/bands/:id", async (req, res) => {
  const deletedBand = await Band.destroy({ where: { id: req.params.id } });
  res.json(deletedBand);
});

module.exports = app;
