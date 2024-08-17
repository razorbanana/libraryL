<template>
  <div class="InputContainer">
    <input type="text" :value="value" @input="$emit('update:value', $event.target.value)" />
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
.InputContainer {
  display: flex;
  justify-content: center;
}
.InputContainer>input {
  margin: 1rem;
  width: 30%;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
</style>