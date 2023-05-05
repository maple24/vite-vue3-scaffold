<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useCounterStore } from '@/store/counter';

const counterStore = useCounterStore();
const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
    <div class="dark:bg-black dark:text-white">
        <!-- <p>Value: {{ value ? 'ON' : 'OFF' }}</p> -->
        <button @click="toggleDark()">
            Is Dark: {{ isDark }}
        </button>
        <button class="" @click="counterStore.increment">+</button>
        <p>{{ counterStore.count }}</p>
    </div>
</template>