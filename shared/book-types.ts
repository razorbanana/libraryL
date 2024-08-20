export type Book = {
    id: string,
    title: string,
    description: string,
    authors: string[],
    publishedDate: string,
}

export type Review = {
    id: string,
    bookId: string,
    rating: number,
    review: string,
}