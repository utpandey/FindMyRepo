import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/react-hooks";
//import { useQuery } from "@apollo/client";
import { Typography, makeStyles, CircularProgress } from "@material-ui/core";
import { useDebounce } from "use-debounce";
import { SEARCH_FOR_REPOS, SEARCH_FOR_USERS } from "./queries";
import Repository from "./Repository";
//import { useQuery } from 'graphql-hooks'
const Users = ({ searchTerm }) => {


// const SEARCH_FOR_USERS = `query users($search_term: String!)
// {
//     repository(owner:$search_term,name:$search_term) {
//         owner{
//             id
//         },
//         issues(last:20, states:CLOSED) {
//         edges {
//             node {
//             title
//             url
//             labels(first:5) {
//                 edges {
//                 node {
//                     name
//                 }
//                 }
//             }
//             }
//             }
//         }
//     }

// }`;

    const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
    const {  loading, error, data } = useQuery(SEARCH_FOR_USERS, {variables: {search_term: debouncedSearchTerm}})
    const [expandedRepo, setExpandedRepo] = useState(null);

    useEffect(() => {
        setExpandedRepo(null);
    }, [data]);
    if (loading) {
        return <div>Loading...</div>;
    }
        if (error) {
            console.error(error.message);
            return <div>Error!{error.message}</div>;
    }
    console.log(data.user.repositories.edges[2].node.name);
    console.log(data.user);
    
    return (
            <div>
            a
                {/* {data.user.repositories.edges.node.map((id,name) => ( <div key={id}><h3>{name}</h3></div> ))}  */}
            </div>
            )
}

export default Users;


// {data.createdAt}
            {/* {data.user.repositories.} */}