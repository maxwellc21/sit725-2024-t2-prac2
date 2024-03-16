/**
 * REST API Express adding two numbers
 * Maxie Cletus Tepaiyan 
 * Deakin Univesity | SIT 725 
 * Adapted: 16 march 2024
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/addTwoNumbers', (req, res) => {
  const { num1, num2 } = req.query;
  const sum = parseFloat(num1) + parseFloat(num2);
  if (isNaN(num1) || isNaN(num2)){
    return res.status(400).send("Provide a number");
  }
  res.json({ data: sum, message: 'Success', statusCode: 200 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});