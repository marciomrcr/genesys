import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return res.status(201).json({ data: user });
});

app.post('/roles', async (req, res) => {
  const { name, description } = req.body;

  const role = await prisma.role.create({
    data: {
      name,
      description
    },
  });

  return res.status(201).json({ data: role });
});


app.listen(3333, () => console.log('API is running'));
