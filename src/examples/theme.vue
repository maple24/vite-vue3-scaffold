<template>
    <div>
        <button class="btn" @click="toggleTheme('cyberpunk')">Button</button>
        <button class="btn btn-primary" @click="toggleTheme('valentine')">Button</button>

    </div>
</template>

<script setup lang="ts">

const toggleTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme)
}

</script>

<style scoped></style>