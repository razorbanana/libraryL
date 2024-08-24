import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200);
    res.send('wow get books');
})

router.post('/', (req, res) => {
    res.status(201);
    res.send('wow post books');
})

router.patch('/:id', (req, res) => {
    res.status(205);
    res.send('wow patch books');
})

router.delete('/:id', (req, res) => {
    res.status(205);
    res.send('wow delete books');
})

export default router;