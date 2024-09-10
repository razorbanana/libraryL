import { addAuthor, deleteAuthorById, getAuthors, updateAuthorById } from '../services/author.service';
import { Request, Response } from 'express';

export const getAllAuthors = async (req: Request, res: Response) => {
    try {
        const response = await getAuthors();
        res.status(200).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const postAuthor = async (req: Request, res: Response) => {
    try {
        const author = req.body;
        const response = await addAuthor(author);
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const patchAuthor = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedFields = req.body;
        const response = await updateAuthorById(id, updatedFields);
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const deleteAuthor = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await deleteAuthorById(id);
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}