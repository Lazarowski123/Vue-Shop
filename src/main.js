
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './plugins/VeeValidatePlugin.js'
import "./assets/main.scss";
import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')
