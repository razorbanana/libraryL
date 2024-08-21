import type { AddReviewPayload } from "@/types/reviewTypes";
import { generateReviewId } from "@/utils/id";
import { defineStore } from "pinia";
import type { Review } from "shared";
import { ref, type Ref } from "vue";

export const useReviewStore = defineStore("review", () => {
    let reviews: Ref<Review[]> = ref([])
    function getReviews() {
        return reviews
    }

    function getReview(id: string) {
        return reviews.value.find(review => review.id === id)
    }

    function addReview(review: AddReviewPayload) {
        const reviewId = generateReviewId()
        const newReview = {
            ...review,
            id: reviewId,
        }
        reviews.value.push(newReview)
    }

    function deleteReview(id: string) {
        console.log(id)
        reviews.value = reviews.value.filter(review => review.id !== id)
    }

    return { getReviews, getReview, addReview, deleteReview }
})