const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hello World');
})
app.get('/Users', (req, res) =>{
  res.send('Users Test');
})
app.get('/API', (req, res) =>{
  res.json([
    {
      name: 'Julian',
      age:18
    },
    {
      name: 'Camilo',
      age:19
    }
  ]);
})

app.get('/API/:Id', (req, res) => {
  const { Id } = req.params;
  res.json({
    name: 'Julian',
    age:18
  });
})

app.listen(port, () =>{
  console.log('My Port' + port);
})
