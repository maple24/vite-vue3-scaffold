<template>
    <div>
        <p>{{ t('hello') + ' 👋 ' + t('welcome') }}</p>
        <button @click="toggleLocales">{{ t('toggle_language') }}</button>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, availableLocales, locale } = useI18n();
const toggleLocales = () => {
    locale.value =
        availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length];
    console.log(locale.value);
};

</script>

<style scoped></style>