import { customAlphabet } from 'nanoid'


export const generateReviewId = () => {
    const nanoid = customAlphabet('1234567890abcdef', 10)
    return nanoid()
}

export const generateBookId = () => {
    const nanoid = customAlphabet('1234567890abcdef', 10)
    return nanoid()
}