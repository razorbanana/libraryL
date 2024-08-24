import { addReview, deleteReviewById, getReviews, updateReview } from '../services/review.service';
import { Request, Response } from 'express';

export const getAllReviews = async (req: Request, res: Response) => {
    try {
        const response = await getReviews();
        res.status(200).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const postReview = async (req: Request, res: Response) => {
    try {
        const review = req.body;
        const response = await addReview(review);
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const patchReview = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedFields = req.body;
        const response = await updateReview(Number(id), updatedFields);
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const deleteReview = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await deleteReviewById(Number(id));
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}