import { API } from '@/api'
import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import type { Book } from 'shared'
import { ref, type Ref } from 'vue'

export const useBooksStore = defineStore('books', () => {
  const books: Ref<Book[]> = ref([])

  function initBooks(data: Book[]){
    books.value = data
  }

  function getBooks() {
    return books.value
  }

  function getBook(id: string) {
    return books.value.find(book => book.id === id)
  }

  async function dispatchGetBooks() {
    try{
      const {status, data} = await API.books.getBooks()
      if (status === 200){
        initBooks(data)
        return {
          success: true,
          content: null
        }
      }
    } catch (error) {
      const _error = error as AxiosError<string>
      return {
        success: false,
        content: null,
        status: _error.response?.status
      }
    }
    return {
      success: false,
      status: 400,
      content: null
    }
  }
  
  return { getBooks, getBook, initBooks, dispatchGetBooks }
})