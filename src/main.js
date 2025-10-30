import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';
import router from '@/router.js';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
    theme:{
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system', //системная тема
            cssLayer: false
        }
    }
});

app.component('DataTable', DataTable); //"Запомни компонент таблицы"
app.component('Column', Column); // "Запомни компонент колонки"

app.mount('#app')