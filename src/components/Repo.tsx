import React, {useState, useEffect} from 'react';
import classnames from "classnames"
import {useQuery} from "@apollo/react-hooks";
import {useDebounce} from "use-debounce";
import {SEARCH_FOR_REPOS,SEARCH_FOR_USERS} from "./queries";
import { IUser } from '../interfaces/interfaces';
import { About,Profile} from './Details';
 
const Repo: React.FC<IUser> = ({searchTerm}) => {

    const [isActive, setActive] = useState(false);
    const [expandedRepo, setExpandedRepo] = useState(null);
    const [tabActive, setTabActive] = useState<string>("About");
    const [debouncedSearchTerm] = useDebounce(searchTerm, 3000);
    const {data, loading, error} = useQuery(SEARCH_FOR_REPOS,
        {variables: {search_term: debouncedSearchTerm}}
    );


  // useEffect(() => {
  //   setExpandedRepo(null);
  // }, [data]);

    if (loading) {
        return (
            <div >
            Loading...
            </div>
    );
}

  if (error) {
    return (
      <div
      >
        error
      </div>
    )
  }

  // if (!data.search.repositoryCount) {
  //   return (
  //     <div
  //     >
  //       There are no such repositories!
  //     </div>
  //   )
  // }
  console.log(data);
  // console.log(typeof(data.user.issues));
  // console.log(Object.values(data.user.issues)[1]);
  // // console.log(data.user.issues(totalCount));
  // console.log("done here");
  
    return ( 
        <div>
            asd
        </div>
    );
}
 
export default Repo;