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
    test("testing that get/musicians returns correctly", async () => {
        const res = await request(app).get("/musicians");
        expect(res.statusCode).toBe(200);
    })  
})

describe('./bands endpoint', () => {
    // Write your tests here
    test("testing that get/bands returns correctly", async () => {
        const res = await request(app).get("/bands");
        expect(res.statusCode).toBe(200);
    })  
})
