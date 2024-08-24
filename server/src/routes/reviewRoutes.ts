import express from 'express';
import { deleteReview, getAllReviews, patchReview, postReview } from '../controllers/review.controller';

const router = express.Router();

router.get('/', getAllReviews)

router.post('/', postReview)

router.patch('/:id', patchReview)

router.delete('/:id', deleteReview)

export default router;