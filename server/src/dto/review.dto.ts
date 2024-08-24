export enum Rating {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5
}

export type AddReviewDto = {
    bookId: number;
    rating: Rating;
    review: string;
}

export type UpdateReviewDto = {
    rating?: Rating;
    review?: string;
}