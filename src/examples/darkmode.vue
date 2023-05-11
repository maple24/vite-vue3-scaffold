<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
    <div class="dark:bg-gray-1000 dark:text-white">
        <!-- <p>Value: {{ value ? 'ON' : 'OFF' }}</p> -->
        <button @click="toggleDark()">
            Is Dark: {{ isDark }}
        </button>
    </div>
</template>