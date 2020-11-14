import { ApolloProvider,InMemoryCache,NormalizedCacheObject } from '@apollo/react-hooks';
import client from '../components/client';
import React, { useState, useEffect } from 'react';
// import SearchBar from '../components/SearchBar'
import SearchBar from '../components/SearchBar';
import User from '../components/User';
import { motion } from 'framer-motion';
import { useLazyQuery } from "@apollo/client";
import { SEARCH_FOR_USERS } from '../components/queries';
import { useDebounce } from "use-debounce";
// import SearchBar from './../components/SearchBar';

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