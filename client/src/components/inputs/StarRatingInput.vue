<template>
    <div class="star-rating">
        <span
        v-for="star in stars"
        :key="star"
        :class="{'filled': star <= hoveredStar || star <= selectedRating}"
        @mouseover="hoverStar(star)"
        @mouseleave="hoverStar(0)"
        @click="selectRating(star)"
        class="star"
        >
        &#9733; 
        </span>
  </div>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';

    const stars = ref([1, 2, 3, 4, 5]); 
    const hoveredStar = ref(0); 
    const selectedRating = ref(0); 

    const hoverStar = (star: number) => {
        hoveredStar.value = star;
    };

    const selectRating = (star: number) => {
        selectedRating.value = star;
        emit('update:value', star);
    };

    const emit = defineEmits<{
        (e: 'update:value', value: number): void;
    }>();
</script>

<style>
    .star-rating {
        display: inline-flex;
        font-size: 2rem; 
        cursor: pointer;
    }

    .star {
        font-size: 4rem;
        color: #ccc; 
        transition: color 0.2s;
    }

    .star.filled {
        color: #ffcc00; 
    }

    .star:hover {
        color: #ffcc00;
    }
</style>