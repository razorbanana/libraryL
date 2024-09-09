export type AddBookDto = {
    title: string;
    description?: string;
    authors: number[];
    publishedDate: string;
}

export type UpdateBookDto = {
    title?: string;
    description?: string;
    authors?: number[];
    publishedDate?: string;
}