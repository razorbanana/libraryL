<template>
    <div class="page">
        <div class="review-form-container">
            <h1>Review Form</h1>
            <form class="review-form input-container" >
                <TitleSelectInput :value="title" @update:value="title = $event"/>
                <label for="rating">Rating</label>
                <input type="number" id="rating" name="rating" required>
                <label for="review">Review</label>
                <textarea id="review" name="review"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import TitleSelectInput from '../components/inputs/TitleSelectInput.vue'
    const title = ref('')
</script>

<style>
    .review-form-container {
        margin: 0 auto;
    }

    .review-form>label {
        font-size: 1.5rem;
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