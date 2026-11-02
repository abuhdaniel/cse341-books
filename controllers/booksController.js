import { ObjectId } from 'mongodb';
import { getDatabase } from '../database/connection.js';

const getAllBooks = async (req, res) => {
  try {
    const db = getDatabase();
    const books = await db.collection('books').find().toArray();

    return res.status(200).json(books);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: 'Error retrieving books.'
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Invalid book ID.'
      });
    }

    const db = getDatabase();
    const book = await db.collection('books').findOne({
      _id: new ObjectId(id)
    });

    if (!book) {
      return res.status(404).json({
        message: 'Book not found.'
      });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: 'Error retrieving book.'
    });
  }
};

export { getAllBooks, getBookById };