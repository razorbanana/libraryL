import { AddBookDto, UpdateBookDto } from "../dto/book.dto"
import { BookAuthor } from "../models/Book"
import { bookRepository, bookAuthorRepository, authorRepository } from "../repositories/book.repository"

export const getBooks = async () => {
    return await bookRepository.find()
}

export const addBook = async (book: AddBookDto) => {
    const createdBook = await bookRepository.save(book)
    for (const authorId of book.authorIds) {
        console.log(authorId)
        const author = await authorRepository.findOne({where: {id: authorId}})
        if (author){
            const newBookAuthor = new BookAuthor()
            newBookAuthor.book = createdBook
            newBookAuthor.author = author
            
            await bookAuthorRepository.save(newBookAuthor)
        }else{
            console.error(`Author with id ${authorId} not found`)
        }
    }
    return 
}

export const updateBookById = async (id: string, updatedFields: UpdateBookDto) => {
    const book = await bookRepository.findOne({
        where: {id}
    })
    const newBook = {
        ...book,
        ...updatedFields
    }
    return await bookRepository.save(newBook)
}

export const deleteBookById = async (id: string) => {
    return await bookRepository.delete(id)
}