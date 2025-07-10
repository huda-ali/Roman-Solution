const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const convertRouter = require('./routes/convert');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/convert', convertRouter);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
