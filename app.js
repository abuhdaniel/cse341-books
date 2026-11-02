import express from 'express';
import booksRoutes from './routes/books.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Books Web Service is running!'
  });
});

app.use('/books', booksRoutes);

export default app;