import React from 'react';
import { ICommitItem } from '../../interfaces/UserCardTypes/types';

const CommitItem: React.FC<ICommitItem> = ({value}) => {
    const {node: {body,position,publishedAt,repository:{name},url}} = value;
    console.log(value.node)
    // console.log(title)
    // console.log(state)
    return (
        // <List ordered>
        // <List.Item as='a'>
        <div className="Comment">    
            <h1 className="Comment__text">body : {body}</h1>
            <h1 className="Comment__text">position : {position ? position : "Not Available"} </h1>
            <h1 className="Comment__text">publishedAt : {publishedAt}</h1>
            <h1 className="Comment__text Comment__repo" onClick={() => window.open(url)}>repository : {name}</h1> 
        </div>
        
    )
}

export default CommitItem;
