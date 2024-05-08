import React, { FC } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, split, HttpLink, from } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { storage } from '../utils/storage';

const httpLink = new HttpLink({
  uri: 'https://cea3c11a3f62.vps.myjino.ru/graphql',
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://cea3c11a3f62.vps.myjino.ru/graphql',
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const authLink = setContext((_, { headers }) => {
  const token = storage.get('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export type ClientProps = {
  children: React.ReactNode;
};

export const client = new ApolloClient({
  link: from([authLink, splitLink]),
  cache: new InMemoryCache(),
});

export const Client: FC<ClientProps> = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>;
