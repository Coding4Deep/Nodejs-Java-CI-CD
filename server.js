const express = require('express');
const path = require('path');
const Calculator = require('./calculator');

const app = express();
const calculator = new Calculator();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    res.json({ result: calculator.add(Number(a), Number(b)) });
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    res.json({ result: calculator.subtract(Number(a), Number(b)) });
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    res.json({ result: calculator.multiply(Number(a), Number(b)) });
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    try {
        res.json({ result: calculator.divide(Number(a), Number(b)) });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start the server only if not in a test environment
if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running at http://0.0.0.0:${PORT}`);
    });
}

module.exports = app;
