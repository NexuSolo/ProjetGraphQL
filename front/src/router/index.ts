import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '../components/PageAccueil.vue'
import PageConnection from '../components/PageConnection.vue'
import PageInscription from '../components/PageInscription.vue'
import CreationArticle from '../components/CreationArticle.vue'
import VisionnerArticle from '../components/VisionnerArticle.vue'
import EditArticle from '../components/EditArticle.vue'


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
            path: '/post/:id',
            name: 'post',
            component: VisionnerArticle
        },
        {
            path: '/edit-article/:id',
            name: 'EditArticle',
            component: EditArticle,
            props: true
        }
    ]
})

export default router
