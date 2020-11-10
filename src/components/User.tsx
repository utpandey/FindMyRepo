import React, {useState, useEffect} from 'react';
import classnames from "classnames"
import {useQuery} from "@apollo/react-hooks";
import {useDebounce} from "use-debounce";
import {SEARCH_FOR_REPOS,SEARCH_FOR_USERS} from "./queries";
import { IUser } from '../interfaces/interfaces';
import { About,Profile} from './Details';


const User: React.FC<IUser> = ({searchTerm}) => {
    const [isActive, setActive] = useState(false);
    const [expandedRepo, setExpandedRepo] = useState(null);
    const [tabActive, setTabActive] = useState<string>("About");
    const [debouncedSearchTerm] = useDebounce(searchTerm, 3000);
    const {data, loading, error} = useQuery(SEARCH_FOR_USERS,
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
    console.log(data.user.issues);
  // console.log(typeof(data.user.issues));
    console.log(Object.values(data.user.issues)[1]);
  // console.log(data.user.issues(totalCount));

// const buttonClasses = classnames({"cont_modal": true},{"cont_modal_active": isActive})
    const cardClass = classnames({ "user_card": true }, { "active": isActive });
    console.log(data.user.repositories)
    console.log(data.user);
    return (
        // <div className={cardClass}>
        //     <div className="content">
        //         Contents
        //     </div>
        //     <div className="fabs">
        //         <div className="fab"/>
        //         <i className="avatar zmdi zmdi-account" onClick={avatarHandler}/>
        //     </div>
    <div className={cardClass}>
        <div className="content">
            <div className="post main">
                <div className="preview"/>
                <div className="counter"/>
                <div className="detail"/>
                <div className="detail"/>
                <div className="details"/>
                <div className="details"/>
            </div>
            <div className="post sec">
                <div className="preview"/>
                <div className="counter"/>
                <div className="detail"/>
            </div>
            <div className="post sec">
                <div className="preview"/>
                <div className="counter"/>
                <div className="detail"/>
            </div>
            <div className="post ter">
                <div className="preview"/>
                <div className="counter"/>
                <div className="detail"/>
            </div>
            <div className="post ter">
                <div className="preview"/>
                <div className="counter"/>
                <div className="detail"/>
            </div>
            <div className="post ter">
                <div className="preview"/>
                <div className="counter"/>
                <div className="detail"/>
            </div>
            <div className="post ter">
                <div className="preview"/>
                <div className="counter"/>
                <div className="detail"/>
            </div>
            <div className="post ter">
                <div className="preview"/>
                <div className="counter"/>
                <div className="detail"/>
            </div>
            <div className="post ter">
                <div className="preview"/>
                <div className="counter"/>
                <div className="detail"/>
            </div>
        </div>
        <div className="fabs">
            <div className="fab"/>
                <div className="avatar " onClick={() => setActive(!isActive)}>
                    <img src={data.user.avatarUrl} alt="" />
            </div>
        </div>
        <div className="user">
                <div className="heading">
                    {/* <div>({data.user.name} ? {data.user.name} : {data.user.login})</div> */}
                    {(data.user.name) ?
                        <div className="heading_title">{data.user.name}</div> :
                        <div className="heading_title">{data.user.login}</div>}
                    <div className="heading_icons"><i className="zmdi zmdi-github" onClick={() => window.open(data.user.url)}/></div>
                {/* <div className="social"><i className="zmdi zmdi-twitter"/></div>
                <div className="social"><i className="zmdi zmdi-github"/></div>
                <div className="social"><i className="zmdi zmdi-google-plus"/></div>
                <div className="social"><i className="zmdi zmdi-codepen"/></div> */}
            </div>
            <div className="profiles">
                    <div className="profile"><span>{data.user.followers.totalCount}</span>Followers</div>
                <div className="profile"><span>{data.user.followers.totalCount}</span>Following</div>
                <div className="profile"><span>{data.user.repositories.totalCount}</span>Repositories</div>
                <div className="profile"><span>{data.user.starredRepositories.totalCount}</span>Stars</div>
                <div className="profile"><span>{data.user.watching.totalCount}</span>Watching</div>
                <div className="profile"><span>{data.user.pullRequests.totalCount}</span>Pull Requests</div>
            </div>
        </div>
    </div>

        );
};


export default User;
