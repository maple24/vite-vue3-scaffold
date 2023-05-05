import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
const i18n = createI18n({
    locale: 'en-us',
    fallbackLocale: 'zh-cn',
    allowComposition: true,
    messages
})

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')