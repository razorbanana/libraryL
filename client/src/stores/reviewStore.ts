import type { AddReviewPayload } from "@/types/reviewTypes";
import { generateReviewId } from "@/utils/id";
import { defineStore } from "pinia";
import type { Review } from "shared";

export const useReviewStore = defineStore("review", () => {
    const reviews: Review[] = []

    function getReviews() {
        return reviews
    }

    function getReview(id: string) {
        return reviews.find(review => review.id === id)
    }

    function addReview(review: AddReviewPayload) {
        const reviewId = generateReviewId()
        const newReview = {
            ...review,
            id: reviewId,
        }
        reviews.push(newReview)
    }

    return { getReviews, getReview, addReview }
})