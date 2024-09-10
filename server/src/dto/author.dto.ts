export type AddAuthorDto = {
    name: string;
    description?: string;
}

export type UpdateAuthorDto = {
    name?: string;
    description?: string;
}