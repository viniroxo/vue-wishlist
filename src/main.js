import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import './style.scss';

const app = createApp(App);
app.use(router);
app.mount('#app');
