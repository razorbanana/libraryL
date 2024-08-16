<template>
<div class="grid-container" >
    <div class="grid-item" v-for="book in books">
        <h2>{{ book.title }}</h2>
        <p>{{ book.description }}</p>
        <p>By: {{ book.authors.join(', ') }}</p>
        <p>Published: {{ book.publishedDate }}</p>
    </div>
</div>
</template>

<script setup lang="ts">
import type { Book } from 'shared'
    const books: Book[] = [
        {
            title: '1984',
            description: 'A dystopian novel by George Orwell.',
            authors: ['George Orwell'],
            publishedDate: '1949-06-08',
        },
        {
            title: 'Animal Farm',
            description: 'Animal Farm is a satirical allegorical novella, in the form of a beast fable, by George Orwell, first published in England on 17 August 1945.',
            authors: ['George Orwell'],
            publishedDate: '1945-08-17',
        }
    ]
</script>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    }

    .grid-item {
        border: 1px solid #333;
        padding: 10px;
        text-align: center;
    }
</style>
