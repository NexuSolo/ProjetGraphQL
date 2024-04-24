import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './components/PageAccueil.vue';
import Connection from './components/PageConnection.vue';
import Inscription from './components/PageInscription.vue'; 
import CreationArticle from './components/CreationArticle.vue'; 
import VisionnerArticle from './components/VisionnerArticle.vue'; 

const routes = [
  { path: '/', component: Accueil },
  { path: '/connexion', component: Connection },
  { path: '/inscription', component: Inscription },
  { path: '/creation-article', component: CreationArticle },
  { path: '/visionner-article/:id', component: VisionnerArticle },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
