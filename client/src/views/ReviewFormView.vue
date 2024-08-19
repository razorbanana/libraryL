<template>
    <div class="page">
        <div class="review-form-container">
            <h1>Review Form</h1>
            <form class="review-form input-container" >
                <TitleSelectInput @update:value="title = $event"/>
                <StarRatingInput  @update:value="starRating = $event"/>
                <div class="input-container">
                    <label for="review">Review</label>
                    <textarea id="review" name="review" @input="updateReview"></textarea>
                </div>
                <span>{{review}}</span>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import TitleSelectInput from '../components/inputs/TitleSelectInput.vue'
import StarRatingInput from '@/components/inputs/StarRatingInput.vue';
    const title = ref('')
    const starRating = ref(0)
    const review = ref('')

    const updateReview = (e: Event) => {
        review.value = (e.target as HTMLInputElement).value
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