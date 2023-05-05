<script setup lang="ts">
import { useCounterStore } from '@/store/counter';

const counterStore = useCounterStore();
</script>

<template>
    <div>
        <button class="" @click="counterStore.increment">+</button>
        <p>{{ counterStore.count }}</p>
    </div>
</template>