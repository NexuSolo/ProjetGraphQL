import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { createApp, h, provide } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/',
})

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
})

createApp({
    setup() {
       provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
}).use(router).mount('#app')