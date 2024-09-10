import type { AddBookPayload } from "@/types/bookTypes"
import http from "../api"
import type { APIResponse } from "@/types/responseTypes"
import type {Book, Review} from 'shared'

async function getBooks(){
    return await http.get<Book[]>('books')
}

async function createBook(input: AddBookPayload){
    return await http.post<APIResponse<Book>>('books')
}

export default {
    getBooks, createBook
}