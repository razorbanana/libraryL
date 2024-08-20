<template>
    <div class="search-container input-container">
        <input type="text" placeholder="Title" name="title" required :value="query" @input="updateQuery" @focus="isFocused = true" @blur="isFocused = false">
        <ul class="books-list" v-if="isFocused && filteredBooks.length">
            <li v-for="book in filteredBooks" :key="book.id" :value="book.id" class="books-list__item" @mousedown.prevent="selectBook(book)">{{ book.title }}</li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
    import { defineEmits, ref, computed, defineExpose } from 'vue';
    import { useBooksStore } from '@/stores/booksStore';
    import type { Book } from 'shared';

    const query = ref('');
    const isFocused = ref(false);
    const books = ref(useBooksStore().getBooks());
    const filteredBooks = computed(() => {
        return books.value.filter(book => book.title.toLowerCase().includes(query.value.toLowerCase()));
    });

    const updateQuery = (e: Event) => {
        query.value = (e.target as HTMLInputElement).value;
        if (filteredBooks.value.length === 1 && query.value === filteredBooks.value[0].title) {
            isFocused.value = false;
            emit('update:value', filteredBooks.value[0].id);
        }
    }

    const selectBook = (book: Book) => {
        query.value = book.title;
        isFocused.value = false;
        emit('update:value', book.id);
    }

    const resetQuery = () => {
        query.value = '';
    };

    defineExpose({
        resetQuery
    });

    const emit = defineEmits<{
        (e: 'update:value', value: string): void;
    }>();

</script>

<style>
    .search-container{
        position: relative;
    }

    .books-list {
        position: absolute;
        top: 100%;
        width: 30%;
        left: 35%;
        background-color: var(--color-background-soft);
        color: var(--color-text);
        z-index: 1000;
        max-height: 15rem; 
        overflow-y: auto; 
        border: 2px solid var(--color-border);
    }

    .books-list__item{
        text-align: left;
        height: 3rem;
        font-size: 1.5rem;
        padding: 0.5rem;
        list-style-type: none;
        cursor: pointer;
        border-bottom: 1px dashed var(--color-border);
    }

    .books-list__item:last-of-type{
        border-bottom: 0px;
    }
</style>