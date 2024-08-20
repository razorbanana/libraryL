<template>
    <div class="star-rating">
        <div 
        class="reset-stars"
        @mouseover="hoverStar(0)"
        @mouseleave="hoverStar(0)"
        @click="selectRating(0)"
        ></div>
        <div
        v-for="star in stars"
        :key="star"
        class="star"
        :class="{'filled': star <= hoveredStar || star <= selectedRating}"
        @mouseover="hoverStar(star)"
        @mouseleave="hoverStar(0)"
        @click="selectRating(star)"
        >
        </div>
        <div 
        class="reset-stars"
        @mouseover="hoverStar(5)"
        @mouseleave="hoverStar(0)"
        @click="selectRating(5)"
        ></div>
    </div>
</template>

<script setup lang='ts'>
    import { ref, defineExpose } from 'vue';

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

    const resetRating = () => {
        selectedRating.value = 0;
    };

    defineExpose({
        resetRating
    });

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

    .star::before {
        content: "\2606";
        font-size: 4rem;
        transition: color 0.2s;
    }

    .filled::before {
        content: "\2605";
        font-size: 4rem;
        transition: color 0.2s;
    }

    .reset-stars {
        width: 1rem;
        cursor: pointer;
    }


</style>