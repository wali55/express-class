const express = require("express");

const app = express();
const port = 3000;

function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

app.get('/', (req, res) => {
    const n = req.query.n;
    const result = calculateSum(n);
    res.send(result.toString());
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})