import React, {useState, useEffect} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {Typography, makeStyles, CircularProgress} from "@material-ui/core";
import {useDebounce} from "use-debounce";
import {SEARCH_FOR_REPOS,SEARCH_FOR_USERS} from "./queries";
import Repository from "./Repository";
import RepoCard from './RepoCard';

const useStyles = makeStyles({
  note: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    textAlign: 'center',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1rem'
  }
});


const RepositoryList = ({searchTerm}) => {
  const classes = useStyles();
  const [expandedRepo, setExpandedRepo] = useState(null);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const {data, loading, error} = useQuery(SEARCH_FOR_REPOS,
    {variables: {search_term: debouncedSearchTerm}}
    );

  
  useEffect(() => {
    setExpandedRepo(null);
  }, [data]);

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant={'overline'}
        className={classes.note}
        component={'div'}
        color={'error'}
      >
        {error}
      </Typography>
    )
  }

  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant={'overline'}
        className={classes.note}
        component={'div'}
      >
        There are no such repositories!
      </Typography>
    )
  }
// tslint:disable-next-line:no-console
console.log(data.rateLimit)
// tslint:disable-next-line:no-console
console.log(data.search);
  return (
    
    <div className="repolist">
    {data.search.edges.map((repo,i) => (
      <RepoCard 
        repo={repo}
        key={i}
      />
    ))}
      {/* {data.search.edges.map((repo, i) => (
        <Repository
          repo={repo}
          expanded={expandedRepo === i}
          onToggled={() => setExpandedRepo(i)}
          key={i}
        />
      ))
      } */}
      
    </div>
  );
};


export default RepositoryList;