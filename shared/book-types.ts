export type Author = {
    id: string,
    name: string,
    description?: string
}

export type Book = {
    id: string,
    title: string,
    description?: string,
    authors: Author[],
    publishedDate: string,
}

export type Review = {
    id: string,
    bookId: string,
    rating: number,
    review: string,
}