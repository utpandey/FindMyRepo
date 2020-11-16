import React from 'react'
import PullItem from './PullItem';
import PinItem from './PinItem';
import CommitItem from './CommitItem';
import RepoItem from './RepoItem';
import { IIndex } from '../../interfaces/UserCardTypes/types';

export const Pull: React.FC<IIndex> = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.pullRequests.totalCount);
    return (
        <div className="pull_container">
            {/* <h3 style={{color: 'black'}}>{totalCount}</h3> */}
            <h3 className="pull_header" >Total Pull Requests by the User: {data.pullRequests.totalCount}</h3>
            
                {data.pullRequests.edges && data.pullRequests.edges.map((value:any,i:number) => (
                        <PullItem key={i} value={value}/>
                ))}
            
        </div>
    )
}

export const Repo: React.FC<IIndex> = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.repositories);
    return (
        <div className="repo_container">
            {/* <h3 style={{color: 'black'}}>{totalCount}</h3> */}
            <h3 className="repo_header" >Total Repositories by the User: {data.repositories.totalCount}</h3>
            
                {data.repositories.edges && data.repositories.edges.map((value:any,i:number) => (               
                    <RepoItem key={i} value={value}/>
                ))}
            
        </div>
    )
}

export const Pin: React.FC<IIndex> = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.pinnedItems);
    return (
        <div className="pin__container">
            {/* <h3 style={{color: 'black'}}>{totalCount}</h3> */}
            <h3 className="pin__header" >Total Items Pinned by the User: {data.pinnedItems.totalCount}</h3>
            
                {data.pinnedItems.edges && data.pinnedItems.edges.map((value:any,i:number) => (
                
                        <PinItem key={i} value={value}/>
                    
                ))}
            
        </div>
    )
}

export const Comment: React.FC<IIndex> = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.commitComments);
    return (
        <div className="comment_container">
            {/* <h3 style={{color: 'black'}}>{totalCount}</h3> */}
            <h3 className="comment_header" >Total Commit Comments by the User: {data.commitComments.totalCount}</h3>
            
                {data.commitComments.edges && data.commitComments.edges.map((value:any,i:number) => (               
                    <CommitItem key={i} value={value}/>
                ))}
            
        </div>
    )
}

