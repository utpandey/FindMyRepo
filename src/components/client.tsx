import { ApolloClient, HttpLink, ApolloLink, InMemoryCache } from '@apollo/client';

// const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

// const authMiddleware = new ApolloLink((operation, forward) => {
//     operation.setContext({
//         headers: {
//             authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`,
//         }
//     });
//     return forward(operation);
// })

// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: concat(authMiddleware, httpLink),
// });

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`
    },
    cache: new InMemoryCache()
});

export default client;