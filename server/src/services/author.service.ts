import { AddAuthorDto, UpdateAuthorDto } from "../dto/author.dto"
import { authorRepository } from "../repositories/book.repository"

export const getAuthors = async () => {
    return await authorRepository.find()
}

export const addAuthor = async (book: AddAuthorDto) => {
    return await authorRepository.save(book)
}

export const updateAuthorById = async (id: string, updatedFields: UpdateAuthorDto) => {
    const author = await authorRepository.findOne({
        where: {id}
    })
    const newAuthor = {
        ...author,
        ...updatedFields
    }
    return await authorRepository.save(newAuthor)
}

export const deleteAuthorById = async (id: string) => {
    return await authorRepository.delete(id)
}