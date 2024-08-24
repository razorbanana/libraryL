import express from 'express';
import reviewRoutes from './reviewRoutes';
import bookRoutes from './bookRoutes';

const router = express.Router();
router.use('/reviews', reviewRoutes);
router.use('/books', bookRoutes);


export default router;