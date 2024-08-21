<template>  
  <SnackBar v-if="error" type="error" title="Error" :message="error.error.message" :show="show" :onClose="onClose" />
</template>

v-if="errors.value.length" :error="errors.value[errors.value.length-1]" :key="errors.value[errors.value.length-1].id"
<script setup lang="ts">
  import type { ErrorType } from '@/types/errorTypes';
  import SnackBar from '@/components/SnackBar.vue';
  import { ref, type ComputedRef, type Ref } from 'vue';
  import { useErrorStore } from '@/stores/errorStore';
  import { computed } from 'vue';
  const errorStore = useErrorStore();
  const errors: ComputedRef<ErrorType[]> = computed(() => errorStore.getErrors().value);
  const error: ComputedRef<ErrorType | null> = computed(() => errors.value.length ? errors.value[errors.value.length-1] : null);

  const show = ref(true)

  const onClose = () => {
    if (error.value) {
      errorStore.deleteError(error.value.id);
    }
  }

  setTimeout(() => {
    onClose()
  }, 2000)

</script>

<style>

</style>