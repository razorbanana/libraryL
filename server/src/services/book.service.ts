import { AddBookDto, UpdateBookDto } from "@/dto/book.dto"
import { bookRepository } from "@/repositories/book.repository"

export const getBooks = async () => {
    return await bookRepository.find()
}

export const addBook = async (book: AddBookDto) => {
    return await bookRepository.save(book)
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