import { defineStore } from 'pinia'
import type { Book } from 'shared'

export const useBooksStore = defineStore('books', () => {
  const books: Book[] = [
        {
            id: 'ANSDWR',
            title: '1984',
            description: 'A dystopian novel by George Orwell.',
            authors: ['George Orwell'],
            publishedDate: '1949-06-08',
        },
        {
            id: 'ANSDW2',
            title: 'Animal Farm',
            description: 'Animal Farm is a satirical allegorical novella, in the form of a beast fable, by George Orwell, first published in England on 17 August 1945.',
            authors: ['George Orwell'],
            publishedDate: '1945-08-17',
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