import { ApolloProvider } from '@apollo/react-hooks';
import client from '../components/client';
import React, { useState} from 'react';
import SearchBar from '../components/SearchBar'
import RepositoryList from '../components/RepositoryList';

const RepoPage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const padding = true;
  return (
    <ApolloProvider client={client}>
      <div className="repo__container">
        <SearchBar padding={padding} value={searchTerm} onChange={setSearchTerm} id={1} locked={false} active={false} label="Repository" />
        {/* <Repo searchTerm={searchTerm} /> */}
        <RepositoryList searchTerm={searchTerm}/>
      </div>
    </ApolloProvider>
  )
}

export default RepoPage;