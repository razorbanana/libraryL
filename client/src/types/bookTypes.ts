import type {Author} from 'shared'

export type AddBookPayload = {
    title: string,
    description?: string,
    authors: Author[],
    publishedDate: string,
}