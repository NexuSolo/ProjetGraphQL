import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/graphql',
})

export const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})
app.use(router).use(apolloProvider).mount('#app')