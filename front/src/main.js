import { createApp } from 'vue'; // Importez createApp au lieu de Vue
import App from './App.vue';
import router from './router';

// Utilisez createApp pour créer votre application Vue
const app = createApp(App);
app.use(router);
app.mount('#app');

