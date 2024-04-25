import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '../components/PageAccueil.vue'
import PageConnection from '../components/PageConnection.vue'
import PageInscription from '../components/PageInscription.vue'
import CreationArticle from '../components/CreationArticle.vue'
import VisionnerArticle from '../components/VisionnerArticle.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: PageAccueil
        },
        {
            path: '/connexion',
            name: 'connection',
            component: PageConnection
        },
        {
            path: '/inscription',
            name: 'inscription',
            component: PageInscription
        },
        {
            path: '/creation-article',
            name: 'creation-article',
            component: CreationArticle
        },
        {
            path: '/visionner-article/:id',
            name: 'visionner-article',
            component: VisionnerArticle
        }
    ]
})

export default router
