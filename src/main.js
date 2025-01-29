import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useProductStore } from './stores/productStore';
import App from './App.vue';
import router from './routes';
import './style.scss';

const app = createApp(App);
app.use(createPinia());

const productStore = useProductStore();
productStore.loadWishlist();

app.use(router);
app.mount('#app');
