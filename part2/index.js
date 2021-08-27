import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/notes', (req, res) => {
  res.send('Notes');
});

app.get('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Note with id ${id}`);
});

app.delete('/api/notes/:id', (req, res)=> {
  const { id } = req.params;
  res.send(`Note with id ${id} deleted`);
});

app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  res.send(`Note with title ${title} and content ${content} created`);
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
