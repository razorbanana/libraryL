export type AddBookDto = {
    title: string;
    description?: string;
    publishedDate: string;
    authorIds: string[];
}

export type UpdateBookDto = {
    title?: string;
    description?: string;
    publishedDate?: string;
    authorIds?: string[];
}