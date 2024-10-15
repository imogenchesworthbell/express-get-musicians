// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test("get all musicians returns correctly", async () => {
        const res = await request(app).get("/musicians");
        expect(res.statusCode).toBe(200);
    })  
    test("get /musicians/:id returns correctly", async ()=> {
        const res = await request(app).get("/musicians/:id");
        expect(res.statusCode).toBe(200);
    })
    test("post /musicians returns correctly", async ()=> {
        const res = await request(app).post("/musicians");
        expect(res.statusCode).toBe(200);
    })
    test("put /musicians/:id returns correctly", async ()=> {
        const res = await request(app).put("/musicians/:id");
        expect(res.statusCode).toBe(200);
    })
    test("delete /musicians/:id returns correctly", async ()=> {
        const res = await request(app).delete("/musicians/:id");
        expect(res.statusCode).toBe(200);
    })
    
})

describe('./bands endpoint', () => {
    // Write your tests here
    test("get all bands returns correctly", async () => {
        const res = await request(app).get("/bands");
        expect(res.statusCode).toBe(200);
    }) 
    test("get /bands/:id returns correctly", async ()=> {
        const res = await request(app).get("/bands/:id");
        expect(res.statusCode).toBe(200);
    }) 
    test("post /bands returns correctly", async ()=> {
        const res = await request(app).post("/bands");
        expect(res.statusCode).toBe(200);
    }) 
    test("put /bands/:id returns correctly", async ()=> {
        const res = await request(app).put("/bands/:id");
        expect(res.statusCode).toBe(200);
    }) 
    test("delete /bands/:id returns correctly", async ()=> {
        const res = await request(app).delete("/bands/:id");
        expect(res.statusCode).toBe(200);
    }) 
})
