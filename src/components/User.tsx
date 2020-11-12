import React, {useState, useEffect} from 'react';
import classnames from "classnames"
import {useQuery} from "@apollo/react-hooks";
import {useDebounce} from "use-debounce";
import {SEARCH_FOR_REPOS,SEARCH_FOR_USERS} from "./queries";
import { IUser } from '../interfaces/interfaces';
import { Pull, Pin ,Comment,Repo} from './User_Cards/index';

const tabItems = [
    {
    id: 1,
    title: 'Pinned Items',
    icon: "https://img.icons8.com/wired/100/000000/pin3.png",
    // icon: require('../icons/comment.svg'),
    content: Pin,
},
{
    id: 2,
    title: 'Pull Requests',
    icon: "https://img.icons8.com/wired/100/000000/pull-request.png",
    // icon: require('../icons/pin.svg'),
    content: Pull,
},
{
    id: 3,
    title: 'Commit Comments',
    icon: "https://img.icons8.com/material/100/000000/topic--v1.png",
    // icon: require('../icons/pull.svg'),
    content: Comment,
},
{
    id: 4,
    title: 'Repositories',
    icon: "https://img.icons8.com/ios/100/000000/code-fork.png",
    // icon: require('../icons/repository.svg'),
    content: Repo,
},
];

const TabItemComponent = ({
    icon = '',
    title = '',
    onItemClicked = () => console.error('You passed no action to the component'),
    isActive = false,
}) => {
    console.log(icon);
    return (
        
    <div className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'} onClick={onItemClicked}>
            <img src={icon} className="tabitem__icon" alt="icon" />
        <p className="tabitem__title">{title}</p>
    </div>
    )
};

const User: React.FC<IUser> = ({ searchTerm }) => {
    const [isOpen, setActive] = useState(false);
    const [active, setTabActive] = useState(0);
    const [expandedRepo, setExpandedRepo] = useState(null);
    // const [tabActive, setTabActive] = useState<string>("About");
    const [debouncedSearchTerm] = useDebounce(searchTerm, 3000);
    const {data, loading, error} = useQuery(SEARCH_FOR_USERS,
        {variables: {search_term: debouncedSearchTerm}}
    );

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

if (!data.user) {
    return (
    <div
    >
        There are no such Users!
    </div>
    )
}
    // console.log(data.user.issues);
  // console.log(typeof(data.user.issues));
    // console.log(Object.values(data.user.issues)[1]);
  // console.log(data.user.issues(totalCount));

// const buttonClasses = classnames({"cont_modal": true},{"cont_modal_active": isOpen})
    const cardClass = classnames({ "user_card": true }, { "active": isOpen });
    // console.log(data.user.repositories)
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
            <div className="content_tabs">
                {tabItems.map(({ id, icon, title }) =><TabItemComponent
                    key={title}
                    icon={icon}
                    title={title}
                    onItemClicked={() => setTabActive(id)}
                    isActive={active === id}
                    />
                )}
            </div> 
            <div className="content_body">
                {/* {tabItems.map(({ id, content }) => {
                    return active === id ? <${content} /> : ''
                })} */}
                    {active === 1 ? <Pin data={data.user} /> : ''}
                    {active === 2 ? <Pull data={data.user} /> : ''}
                    {active === 3 ? <Comment data={data.user} /> : ''}
                    {active === 4 ? <Repo data={data.user} /> : ''}
            </div>    
        </div>
        <div className="fabs">
            <div className="fab"/>
                <div className="avatar " onClick={() => setActive(!isOpen)}>
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
