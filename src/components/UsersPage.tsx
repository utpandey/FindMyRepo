import { ApolloProvider,InMemoryCache,NormalizedCacheObject } from '@apollo/react-hooks';
import client from './client';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'
import User from './User';
import { motion } from 'framer-motion';
import { useLazyQuery } from "@apollo/client";
import { SEARCH_FOR_USERS } from './queries';
import { useDebounce } from "use-debounce";

const UsersPage = () => {

  const [searchTerm, setSearchTerm] = useState('');

  
  
  // if (loading) {
  //   return <p>Loading ...</p>;
  // }
  // if (error) {
  //   console.log(error);
  // }
  // if (data) {
  //   console.log(data);
  // }

  // console.log(data);

  // const buttonHandler = (e: React.ChangeEvent<any>) => {
  //   setInput(e.target.value);
  //   getUser();
  // }

  // useEffect(() => {
  //   getUser();
  // }, [input])
  

  return (
    <ApolloProvider client={client}>
      <div className="user__container">
        <SearchBar value={searchTerm} onChange={setSearchTerm} id={1} locked={false} active={false} label="Username " />
        <User searchTerm={searchTerm} />
      </div>
    </ApolloProvider>
  )
}
export default UsersPage;