import express from 'express';
import reviewRoutes from './reviewRoutes';
import bookRoutes from './bookRoutes';
import authorRoutes from './authorRoutes'

const router = express.Router();
router.use('/reviews', reviewRoutes);
router.use('/books', bookRoutes);
router.use('/authors', authorRoutes)


export default router;