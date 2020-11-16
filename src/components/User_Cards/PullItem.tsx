import React from 'react';
import { IPullItem } from '../../interfaces/UserCardTypes/types';
import moment from 'moment';

const PullItem: React.FC<IPullItem> = ({value}) => {
    const {node: {title,state,closedAt,permalink,publishedAt}} = value;
    console.log(value);
    return (
        <div className="Pull">    
            <h1 className="Pull__text title" onClick={() => window.open(permalink)}><span className="spanTitle">Title</span> : {title}</h1> 
            <h1 className="Pull__text"><span>State </span> : {state}</h1>
            <h1 className="Pull__text"><span>Closed at</span>  : {moment.utc(closedAt).local().format('YYYY-MM-DD HH:mm:ss')}</h1>
            <h1 className="Pull__text publish"><span>Published at</span>  : {moment.utc(publishedAt).local().format('YYYY-MM-DD HH:mm:ss')}</h1> 
        </div>
        
    )
}

export default PullItem;
