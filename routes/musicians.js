const express = require("express");
const app = express();
const musicianRouter = express.Router();
const Musician = require("../models/Musician");
const {check, validationResult } = require("express-validator")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

musicianRouter.get("/", async (request, response) => {
    const musicians = await Musician.findAll({});
    response.json(musicians);
})

musicianRouter.get("/:id", async (request, response) => {
    const number = request.params.id;
    const musicians = await Musician.findByPk(number);
    response.json(musicians)
})

musicianRouter.post("/", 
    [check("name").not().isEmpty().trim().withMessage("Name is required."),
    check("genre").not().isEmpty().trim().withMessage("Genre is required.")]
    , async (request, response) => {
        const errors = validationResult(request)
        if(!errors.isEmpty()){
            response.json({error: errors.array()})
        }else{
        const newMusician = await Musician.create(request.body);
        const musicianAdded = await Musician.findAll({})
        response.json(musicianAdded)
        }
})

  

musicianRouter.put("/:id", async (request, response) => {
    const updatedMusicians = await Musician.update(request.body, {where: {id: request.params.id}});
    let musicians = await Musician.findAll()
    response.json(musicians);
})

musicianRouter.delete("/:id", async (request, response) => {
    const deletedMusicians = await Musician.destroy({where: {id: request.params.id}});
    let musicians = await Musician.findAll()
    response.json(musicians)
})


module.exports = musicianRouter