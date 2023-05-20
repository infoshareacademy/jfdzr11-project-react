import express from 'express';
import jsonServer from 'json-server';
import bodyParser from 'body-parser';
import { randomUUID } from 'crypto';
import cors from 'cors';

const app = express();
const port = 3010;

const exampleSeed = {
  todos: [{ id: 0, name: 'Sprzątanie', description: 'Bardzo ważna regularna czynność', category: 'important' }]
};

app.use(cors());
app.use(bodyParser.json());
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'test@test.pl' && password === 'test1234') {
    res.status(200);
    res.send({ authToken: randomUUID(), name: 'Test' });
  } else if (username === 'adam@test.pl' && password === 'test1234') {
    res.status(200);
    res.send({ authToken: randomUUID(), name: 'Adam' });
  } else {
    res.status(401);
    res.send('Invalid credentials');
  }
});
app.use('/api', jsonServer.router(exampleSeed));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
