import type { ErrorType } from "@/types/errorTypes";
import { generateErrorId } from "@/utils/id";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useErrorStore = defineStore("error", () => {
    let errors: Ref<ErrorType[]> = ref([])

    function getErrors() {
        return errors
    }

    function addError(error: Error) {
        const newError = {
            id: generateErrorId(),
            error,
        }
        errors.value.push(newError)
    }

    function deleteError(id: string) {
        errors.value = errors.value.filter(error => error.id !== id)
    }

    return { getErrors, addError, deleteError }
})