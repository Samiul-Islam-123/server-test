// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample Data
// Sample Data
let sampleData = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 35 },
    { id: 4, name: 'Michael Brown', age: 28 },
    { id: 5, name: 'Emily Davis', age: 22 },
    { id: 6, name: 'David Wilson', age: 40 },
    { id: 7, name: 'Jessica Miller', age: 31 },
    { id: 8, name: 'Daniel Moore', age: 45 },
    { id: 9, name: 'Susan Taylor', age: 29 },
    { id: 10, name: 'Chris Anderson', age: 38 },
    { id: 11, name: 'Patricia Thomas', age: 50 },
    { id: 12, name: 'Kevin White', age: 23 },
    { id: 13, name: 'Laura Harris', age: 33 },
    { id: 14, name: 'Brian Martin', age: 27 },
    { id: 15, name: 'Sara Thompson', age: 36 },
    { id: 16, name: 'Nancy Garcia', age: 42 },
    { id: 17, name: 'George Martinez', age: 34 },
    { id: 18, name: 'Karen Robinson', age:20},
    ];  

// Get all items
app.get('/data', (req, res) => {
  res.json(sampleData);
});

// Get an item by id
app.get('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = sampleData.find((data) => data.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Add a new item
app.post('/data', (req, res) => {
  const newItem = {
    id: sampleData.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  sampleData.push(newItem);
  res.status(201).json(newItem);
});

// Update an item
app.put('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = sampleData.findIndex((data) => data.id === id);
  if (itemIndex >= 0) {
    sampleData[itemIndex] = { id, ...req.body };
    res.json(sampleData[itemIndex]);
  } else {
    res.status(404).send('Item not found');
  }
});

// Delete an item
app.delete('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = sampleData.findIndex((data) => data.id === id);
  if (itemIndex >= 0) {
    const deletedItem = sampleData.splice(itemIndex, 1);
    res.json(deletedItem);
  } else {
    res.status(404).send('Item not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
