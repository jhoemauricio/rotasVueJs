//dentro da biblioteca de rotas , importa os recursos createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

//precisa importar as rotas
import  Home  from './views/Home.vue';
import  Sobre  from './views/Sobre.vue';
import NotFound from './views/NotFound.vue';

//cria um array de rotas ao qual está todas as rotas
const routes = [
    {
        //informa o caminho , nome e componente que deseja exibir quando acessar esta rota
        path: "/",
        name: "home",
        //componente responsável pela pagina
        component: Home

    },
    {
        path: "/sobre",
        name: "sobre",
        //componente responsável pela sobre 
        component: Sobre
    },
    {
        //quando a rota não existir
        path: '/:pathMatch(.*)*',
        component: NotFound
    }

];

//cria a rota com um objeto de dois parametros
const router = createRouter({

    //cria histórico no browser
    history: createWebHistory(),
    //segundo parametro é a routes que foi definida
    routes


});

//exporta para poder chamar as rotas no arquivo de configuração principal na Main.js
export default router;