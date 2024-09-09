import { AddReviewDto, UpdateReviewDto } from "../dto/review.dto"
import { reviewRepository } from "../repositories/review.repository"

export const getReviews = async () => {
    return await reviewRepository.find()
}

export const addReview = async (review: AddReviewDto) => {
    return await reviewRepository.save(review)
}

export const updateReviewById = async (id: string, updatedFields: UpdateReviewDto) => {
    const review = await reviewRepository.findOne({
        where: {id}
    })
    const newReview = {
        ...review,
        ...updatedFields
    }
    return await reviewRepository.save(newReview)
}

export const deleteReviewById = async (id: string) => {
    return await reviewRepository.delete(id)
}