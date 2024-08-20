<template>
<div class="page">
    <FilterInput :value="filterValue" @update:value="filterValue = $event"/>
    <div class="grid-container" >
        <div class="grid-item" v-for="book in filteredBooks" :key="book.id">
            <h2>{{ book.title }}</h2>
            <p>{{ book.description }}</p>
            <p>By: {{ book.authors.join(', ') }}</p>
            <p>Published: {{ book.publishedDate }}</p>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import FilterInput from '../components/inputs/FilterInput.vue'
    import { useBooksStore } from '@/stores/booksStore';

    const books = useBooksStore().getBooks()
    const filterValue = ref('')
    const filteredBooks = computed(() => {
        return books.filter(book => book.title.toLowerCase().includes(filterValue.value.toLowerCase()))
    })
</script>

<style>
    
</style>
