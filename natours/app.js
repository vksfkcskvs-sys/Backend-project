const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server side', app: 'Natours project' });
});

app.post('/', (req, res) => {
  res.send('you can post to this URL');
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
