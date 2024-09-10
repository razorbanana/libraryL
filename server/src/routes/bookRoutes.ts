import { deleteBook, getAllBooks, patchBook, postBook, deleteBooks } from '../controllers/book.controller';
import express from 'express';

const router = express.Router();

router.get('/', getAllBooks)

router.post('/', postBook)

router.patch('/:id', patchBook)

router.delete('/:id', deleteBook)

router.delete('/', deleteBooks)

export default router;