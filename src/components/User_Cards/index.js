import React from 'react'
import PullItem from './PullItem';
import PinItem from './PinItem';
import CommitItem from './CommitItem';
import RepoItem from './RepoItem.js';
import { List } from 'semantic-ui-react'

export const Pull = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.pullRequests.totalCount);
    // // tslint:disable-next-line:no-console
    // console.log(data.pullRequests.edges);
    //const {totalCount} = data.pullRequests;
    return (
        <div className="pull_container">
            {/* <h3 style={{color: 'black'}}>{totalCount}</h3> */}
            <h3 className="pull_header" >Total Pull Requests by the User: {data.pullRequests.totalCount}</h3>
            <List bulleted>
                {data.pullRequests.edges && data.pullRequests.edges.map((value,i) => (
                        <PullItem key={i} value={value}/>
                ))}
            </List>
        </div>
    )
}

export const Repo = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.repositories);
    // tslint:disable-next-line:no-console
    // console.log(data.pullRequests.edges);
    return (
        <div className="repo_container">
            {/* <h3 style={{color: 'black'}}>{totalCount}</h3> */}
            <h3 className="repo_header" >Total Repositories by the User: {data.repositories.totalCount}</h3>
            <List bulleted>
                {data.repositories.edges && data.repositories.edges.map((value,i) => (               
                    <RepoItem key={i} value={value}/>
                ))}
            </List>
        </div>
    )
}

export const Pin = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.pinnedItems);
    // tslint:disable-next-line:no-console
    // console.log(data.pullRequests.edges);
    //const {totalCount} = data.pullRequests;
    return (
        <div className="pin__container">
            {/* <h3 style={{color: 'black'}}>{totalCount}</h3> */}
            <h3 className="pin__header" >Total Items Pinned by the User: {data.pinnedItems.totalCount}</h3>
            <List bulleted>
                {data.pinnedItems.edges && data.pinnedItems.edges.map((value,i) => (
                
                        <PinItem key={i} value={value}/>
                    
                ))}
            </List>
        </div>
    )
}

export const Comment = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.commitComments);
    // tslint:disable-next-line:no-console
    // console.log(data.pullRequests.edges);
    return (
        <div className="comment_container">
            {/* <h3 style={{color: 'black'}}>{totalCount}</h3> */}
            <h3 className="comment_header" >Total Commit Comments by the User: {data.commitComments.totalCount}</h3>
            <List bulleted>
                {data.commitComments.edges && data.commitComments.edges.map((value,i) => (               
                    <CommitItem key={i} value={value}/>
                ))}
            </List>
        </div>
    )
}

