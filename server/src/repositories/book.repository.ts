import { AppDataSource } from "../data-source";
import { Author, Book } from "../models/Book";

export const bookRepository = AppDataSource.getRepository(Book);

export const authorRepository = AppDataSource.getRepository(Author);