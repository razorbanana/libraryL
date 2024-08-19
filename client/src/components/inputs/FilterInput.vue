<template>
  <div class="input-container">
    <input type="text" :value="value" @input="$emit('update:value', ($event.target as HTMLInputElement).value)" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  value: string;
}>();

const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();
</script>

<style>

</style>