const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  // Here you can process the form data (e.g., save to a database, send an email, etc.)
  console.log(`Received form submission: Name - ${name}, Email - ${email}, Message - ${message}`);
  res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
