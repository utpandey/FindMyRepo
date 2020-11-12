import React from 'react'
import PullItem from './PullItem';

export const Pull = ({data}) => {
    // tslint:disable-next-line:no-console
    // console.log(data.pullRequests);
    // // tslint:disable-next-line:no-console
    // console.log(data.pullRequests.edges);
    //const {totalCount} = data.pullRequests;
    console.log("Pull")
    return (
        <div className="item_container">
        {/* <h3 style={{color: 'black'}}>{totalCount}</h3> */}
        {data.edges ?? data.edges.map((value,i) => (
            <PullItem key={i} value={value}/>
        ))}
        </div>
    )
}

export const Repo = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log("Repo")
    return (
        <div className="item_container">
        
            
        </div>
    )
}

export const Pin = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log("Pin")
    return (
        <div className="item_container">
        
            
        </div>
    )
}

export const Comment = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log("Comment")
    return (
        <div className="item_container">
        
            
        </div>
    )
}

