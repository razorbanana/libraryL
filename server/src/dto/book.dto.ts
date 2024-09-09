export type AddBookDto = {
    title: string;
    description?: string;
    publishedDate: string;
}

export type UpdateBookDto = {
    title?: string;
    description?: string;
    publishedDate?: string;
}