import { addBook, deleteBookById, getBooks, updateBookById, deleteAllBooks } from '../services/book.service';
import { Request, Response } from 'express';

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const response = await getBooks();
        res.status(200).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const postBook = async (req: Request, res: Response) => {
    try {
        const book = req.body;
        const response = await addBook(book);
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const patchBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedFields = req.body;
        const response = await updateBookById(id, updatedFields);
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await deleteBookById(id);
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}

export const deleteBooks = async (req: Request, res: Response) => {
    try {
        const response = await deleteAllBooks();
        res.status(201).json(response);
    }catch(err: any) {
        res.status(500).json({message: err.message});
    }
}