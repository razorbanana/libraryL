import { AppDataSource } from "../data-source";
import { Author, Book, BookAuthor } from "../models/Book";

export const bookRepository = AppDataSource.getRepository(Book);

export const authorRepository = AppDataSource.getRepository(Author);

export const bookAuthorRepository = AppDataSource.getRepository(BookAuthor)