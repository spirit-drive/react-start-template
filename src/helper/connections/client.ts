import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { serverGraphql } from '../../app/constants/Api';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${serverGraphql}`,
});

const authLikn = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLikn.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
