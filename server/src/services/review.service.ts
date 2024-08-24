import { AddReviewDto, UpdateReviewDto } from "../dto/review.dto"
import { reviewRepository } from "../repositories/reviewRepository"

export const getReviews = async () => {
    return await reviewRepository.find()
}

export const addReview = async (review: AddReviewDto) => {
    return await reviewRepository.save(review)
}

export const updateReview = async (id: number, updatedFields: UpdateReviewDto) => {
    const review = await reviewRepository.findOne({
        where: {id}
    })
    const newReview = {
        ...review,
        ...updatedFields
    }
    return await reviewRepository.save(newReview)
}

export const deleteReviewById = async (id: number) => {
    return await reviewRepository.delete(id)
}