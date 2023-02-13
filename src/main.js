import { createApp } from 'vue'
import App from './App.vue'

//chama a rota criada no arquivo rota
import router from './router';

createApp(App)
//usa a rota criada
.use(router)
.mount('#app');

