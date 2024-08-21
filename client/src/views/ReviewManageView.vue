<template>
        <div class="page">
            <FilterInput :value="filterValue" @update:value="filterValue = $event"/>
            <div class="grid-container" >
                <div class="grid-item" v-for="review in reviewedBooks" :key="review.id">
                    <h2>{{ review.title }}</h2>
                    <p>By: {{ review.authors.join(', ') }}</p>
                    <p>{{review.rating}}/5</p>
                    <p>{{ review.review }}</p>
                </div>
            </div>
        </div>
</template>

<script setup lang='ts'>
    import {ref, computed} from 'vue';
    import FilterInput from '../components/inputs/FilterInput.vue';
    import { useReviewStore } from '@/stores/reviewStore';
    import { useBooksStore } from '@/stores/booksStore';
    import { useErrorStore } from '@/stores/errorStore';

    const filterValue = ref('');
    const reviewStore = useReviewStore();
    const errorStore = useErrorStore();
    const reviews = reviewStore.getReviews();

    const reviewedBooks = computed(() => {
        return reviews.value.map(review => {
            try {
                const book = useBooksStore().getBook(review.bookId);
                if (!book || !review.bookId){
                    reviewStore.deleteReview(review.id);
                    throw new Error('Book is not found');
                } 
                return {
                    id: review.id,
                    title: book.title,
                    authors: book.authors,
                    rating: review.rating,
                    review: review.review
                }
            }catch(e: any) {
                errorStore.addError(new Error(e.message));
                return null;
            }
            
        }).filter(review => review !== null);
    });
</script>

<style>

</style>