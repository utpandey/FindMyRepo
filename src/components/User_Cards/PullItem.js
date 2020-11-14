import React from 'react';
const { useState, useEffect } = React;
import moment from 'moment';

const PullItem = ({value,i}) => {
    const {node: {title,state,closedAt,permalink,publishedAt}} = value;
    console.log(value);
    return (
        <div className="Pull">    
            <h1 className="Pull__text title" onClick={() => window.open(permalink)}>Title : {title}</h1> 
            <h1 className="Pull__text">State : {state}</h1>
            <h1 className="Pull__text">Closed at : {moment.utc(closedAt).local().format('YYYY-MM-DD HH:mm:ss')}</h1>
            <h1 className="Pull__text publish">Published at : {moment.utc(publishedAt).local().format('YYYY-MM-DD HH:mm:ss')}</h1> 
      </div>
        
    )
}

export default PullItem;
