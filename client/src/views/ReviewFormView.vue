<template>
        <div class="page">
            <div class="review-form-container">
                <h1>Review Form</h1>
                <form class="review-form input-container" >
                    <TitleSelectInput ref="titleInput" @update:value="bookId = $event"/>
                    <StarRatingInput  ref="starInput" @update:value="starRating = $event"/>
                    <div class="input-container">
                        <textarea :value="review" placeholder="Type your review (optional)" name="review" @input="updateReview"></textarea>
                    </div>
                    <button type="submit" @click.prevent="submitReview">Submit</button>
                </form>
            </div>
        </div>
</template>

<script setup lang="ts">
    import { ref, type Ref } from 'vue'
    import TitleSelectInput from '@/components/inputs/TitleSelectInput.vue'
    import StarRatingInput from '@/components/inputs/StarRatingInput.vue';
    import type { AddReviewPayload } from '@/types/reviewTypes';
    import { useReviewStore } from '@/stores/reviewStore';
    import type { StarRatingInputInstance, TitleSelectInputInstance } from '@/types/inputTypes';
    import { useErrorStore } from '@/stores/errorStore';

    const errorStore = useErrorStore()
    const starInput: Ref<StarRatingInputInstance | null> = ref(null)
    const titleInput: Ref<TitleSelectInputInstance | null> = ref(null)
    const bookId = ref('')
    const starRating = ref(0)
    const review = ref('')

    const updateReview = (e: Event) => {
        review.value = (e.target as HTMLInputElement).value
    }

    const submitReview = () => {
        const newReview: AddReviewPayload = {
            bookId: bookId.value,
            rating: starRating.value,
            review: review.value
        }
        try{
            useReviewStore().addReview(newReview)
        }catch(e: any) {
            errorStore.addError(new Error("Failed to add review"))
        }
        bookId.value = ''
        starRating.value = 0
        titleInput.value?.resetQuery()
        starInput.value?.resetRating()
        review.value = ''
    }
</script>

<style>
    .review-form-container {
        margin: 0 auto;
    }

    .review-form label {
        font-size: 1.5rem;
        display: block;
    }

    .review-form>button {
        margin: 0.5rem auto;
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        background-color: var(--color-background-soft);
        color: var(--color-text);
        border-color: var(--color-border);
        border-radius: 0.5rem;
    }

    .review-form>button:hover {
        margin: 0.5rem auto;
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        background-color: var(--color-background-mute);
        color: var(--color-text);
        border-color: var(--color-border-hover);
        border-radius: 0.5rem;
    }

</style>