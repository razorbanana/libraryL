import { defineStore } from 'pinia'
import type { Book } from 'shared'

export const useBooksStore = defineStore('books', () => {
  const books: Book[] = [
        {
            id: '746be257fc',
            title: '1984',
            description: 'A dystopian novel by George Orwell.',
            authors: ['George Orwell'],
            publishedDate: '1949-06-08',
        },
        {
            id: '8a6d7284fb',
            title: 'Animal Farm',
            description: 'Animal Farm is a satirical allegorical novella, in the form of a beast fable, by George Orwell, first published in England on 17 August 1945.',
            authors: ['George Orwell'],
            publishedDate: '1945-08-17',
        },
        {
            id: '1234567890',
            title: 'Book Title',
            description: 'Book Description',
            authors: ['Author Name'],
            publishedDate: '2022-01-01',
        },
        {
            id: 'abcdef1234',
            title: 'Another Book',
            description: 'Another Book Description',
            authors: ['Another Author'],
            publishedDate: '2022-02-02',
        }
    ]

  function getBooks() {
    return books
  }

  function getBook(id: string) {
    return books.find(book => book.id === id)
  }
  
  return { getBooks, getBook }
})