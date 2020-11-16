import { ApolloProvider,InMemoryCache,NormalizedCacheObject } from '@apollo/react-hooks';
import client from '../components/client';
import React, { useState} from 'react';
import SearchBar from '../components/SearchBar';
import User from '../components/User';

const UsersPage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const padding = false;

  return (
    <ApolloProvider client={client}>
      <div className="user__container">
        <SearchBar padding={padding} value={searchTerm} onChange={setSearchTerm} id={1} locked={false} active={false} label="Username" />
        <User searchTerm={searchTerm} />
      </div>
    </ApolloProvider>
  )
}
export default UsersPage;