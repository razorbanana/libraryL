import { deleteAuthor, getAllAuthors, patchAuthor, postAuthor } from '../controllers/author.controller';
import express from 'express';

const router = express.Router();

router.get('/', getAllAuthors)

router.post('/', postAuthor)

router.patch('/:id', patchAuthor)

router.delete('/:id', deleteAuthor)

export default router;