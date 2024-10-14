const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musicians', async (req, res)=>{
    const allMusicians = await Musician.findAll({})
    res.json(allMusicians)
})

app.get('/musicians/1', async (req, res)=>{
    const firstMusician = await Musician.findByPk(1)
    res.json(firstMusician)
})

app.get('/musicians/2', async (req, res)=>{
    const secondMusician = await Musician.findByPk(2)
    res.json(secondMusician)
})

app.get('/musicians/3', async (req, res)=>{
    const thirdMusician = await Musician.findByPk(3)
    res.json(thirdMusician)
})

app.get('/bands', async (req, res)=>{
    const allBands = await Band.findAll({})
    res.json(allBands)
})

app.get('/bands/1', async (req, res)=>{
    const firstBand = await Band.findByPk(1)
    res.json(firstBand)
})

app.get('/bands/2', async (req, res)=>{
    const secondBand = await Band.findByPk(2)
    res.json(secondBand)
})

app.get('/bands/3', async (req, res)=>{
    const thirdBand = await Band.findByPk(3)
    res.json(thirdBand)
})

module.exports = app;