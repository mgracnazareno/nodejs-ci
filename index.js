const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  const name = req.query.name;
  res.send(`Ola ${name}`);
});

app.get("/calculator", (req, res) => {
  const op = req.query.op;
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const symbols = { add: "+", subtract: "-", multiply: "*", divide: "/" };

  let results;

  if (op === "add") results = num1 + num2;
  else if (op === "subtract") results = num1 - num2;
  else if (op === "multiply") results = num1 * num2;
  else if (op === "divide") {
    if (num2 === 0) return res.status(400).send("Cannot divide by zero");
    results = num1 / num2;
  } else return res.status(400).send("Invalid Operation");

  res.send(`${num1} ${symbols[op]} ${num2} = ${results}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
