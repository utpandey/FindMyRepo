import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { useDebounce } from "use-debounce";
import { SEARCH_FOR_REPOS} from "./queries";
import { motion } from 'framer-motion';
import RepoCard from "./RepoCard"
import { IUser} from '../interfaces/interfaces';

const repoContainerVariants = {
    exit: {
        transition: {
                ease: 'easeInOut'
            },    
        x: '-100vw',
            
    },  
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 2
        }
    },
}

// const useStyles = makeStyles({
//     note: {
//         fontSize: '1.5rem',
//         marginTop: '1rem',
//         padding: '1rem',
//         textAlign: 'center',
//     },
//     spinnerContainer: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         marginTop: '1rem'
//     }
// });


const RepositoryList: React.FC<IUser> = ({ searchTerm }) => {
    // const classes = useStyles();
    // const [expandedRepo, setExpandedRepo] = useState(null);
    const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
    const { data, loading } = useQuery(SEARCH_FOR_REPOS, { variables: { search_term: debouncedSearchTerm } });
    console.log(data);
    if (loading) {
        return ( <div  className="loader">
            <div className=""/>
            <div className=""/>
            <div className=""/>
            <div className=""/>
            </div>
        );
    }
    // if (error) {
    //   console.log(error)
    //     return ( <div >
    //         {error} 
    //         </div>
    //     )
    // }

    if (!data.search.repositoryCount) {
        return ( <div className="repoError">
            There are no such Repositories!
            </div>
        )
    }
    // tslint:disable-next-line:no-console
    console.log(data.rateLimit)
        // tslint:disable-next-line:no-console
    console.log(data.search);
    return (

        <motion.div className = "repolist"
            animate = 'visible'
            exit = 'exit' 
            initial = 'hidden'
            variants = { repoContainerVariants }
        > {
                data.search.edges.map((repo: string, i: number) => (
                    <RepoCard repo={repo}
                    key = { i }
                />
            ))
        } 
        </motion.div>
    );
};


export default RepositoryList;