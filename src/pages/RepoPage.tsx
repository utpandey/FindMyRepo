import { ApolloProvider,InMemoryCache,NormalizedCacheObject } from '@apollo/react-hooks';
import client from '../components/client';
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar'
import Repo from '../components/Repo';
import { motion } from 'framer-motion';
// import git2 from './github_2.svg';
// import git3 from './github_3.svg';


const RepoPage = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ApolloProvider client={client}>
      <div className="user__container">
        <SearchBar value={searchTerm} onChange={setSearchTerm} id={1} locked={false} active={false} label="Username " />
        <Repo searchTerm={searchTerm} />
      </div>
    </ApolloProvider>
  )
}

export default RepoPage;