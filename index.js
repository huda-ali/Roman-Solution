const express = require('express');
const app = express();
const port = 3000;

const convertRouter = require('./routes/convert');

app.use(express.json());
app.use('/convert', convertRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
