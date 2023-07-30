import express, { Request, Response } from 'express';

const app = express();
const port = 8080;

app.use(express.json());

app.post('/person', (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name parameter is missing.' });
  }

  const message = `Hello ${name}`;
  res.json({ message });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:8080`);
});
