<template>
    <div class="snack-bar__container">
        <div class="snack-bar" v-if="props.show">
            <h3>{{ props.title }}</h3>
            <h2>{{ props.message }}</h2>
            <button @click="onClose">Close</button>
        </div>
    </div>
</template>

<script setup lang='ts'>
    const props = defineProps<{
        type: string,
        title: string,
        message: string,
        show: boolean,
        onClose: () => void,
    }>()
</script>

<style>
    .snack-bar{
        background-color: #821131;
        display: block;
        position: absolute;
        top: 0;
        margin: 0 auto;
        height: 15%;
        width: 60%;
        border-bottom-left-radius: 25%; 
        border-bottom-right-radius: 25%; 
        border-width: 3px;
        border-color: var(--color-border);
    }

    .snack-bar>* {
        text-align: center;
        display: block;
        margin: 0.5rem auto;
    }

    .snack-bar>button {
        border-color: var(--color-border);
        background-color: var(--color-background-soft);
        color: var(--color-text);
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
    }

    .snack-bar__container{
        display: flex;
        justify-content: center;
    }
</style>