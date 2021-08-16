import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import pinDirective from './shared/pin-directive';

const app = createApp(App);

app.use(router).use(store).directive('pin', pinDirective).mount('#app');
