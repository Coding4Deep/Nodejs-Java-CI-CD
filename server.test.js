const request = require('supertest');
const express = require('express');
const app = require('./server'); // Ensure your server exports 'app'

describe('Calculator API Endpoints', () => {
    it('should add two numbers', async () => {
        const res = await request(app).get('/add?a=5&b=3');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(8);
    });

    it('should subtract two numbers', async () => {
        const res = await request(app).get('/subtract?a=10&b=4');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(6);
    });

    it('should multiply two numbers', async () => {
        const res = await request(app).get('/multiply?a=6&b=2');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(12);
    });

    it('should divide two numbers', async () => {
        const res = await request(app).get('/divide?a=8&b=2');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(4);
    });

    it('should return an error when dividing by zero', async () => {
        const res = await request(app).get('/divide?a=5&b=0');
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("Cannot divide by zero");
    });
});
