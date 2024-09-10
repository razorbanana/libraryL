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
    import { ref, computed, onMounted, type Ref } from 'vue'
    import FilterInput from '../components/inputs/FilterInput.vue'
    import { useBooksStore } from '@/stores/booksStore';
import type { Book } from 'shared';
    
    const bookStore = useBooksStore() 
    const books:Ref<Book[]> = ref([])
    console.log(books)
    const filterValue = ref('')
    const filteredBooks = computed(() => {
        return books.value.filter(book => book.title.toLowerCase().includes(filterValue.value.toLowerCase()))
    })

    onMounted(async () => {
        const { success, status } = await useBooksStore().dispatchGetBooks();

        if (!success) {
            alert("Ups, something happened 🙂");
            console.log("Api status ->", status);
        }else{
            books.value = bookStore.getBooks();
        }
    });

</script>

<style>
    
</style>
