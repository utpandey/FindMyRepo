import React from 'react';
const { useState, useEffect } = React;
import { List } from 'semantic-ui-react'
import github__repo from '../../icons/github__repo.svg';
import moment from 'moment';

const converter = (date) => {
    const m = moment(date);
    return m.format('LLL');
}

const CommitItem = ({value,i}) => {
    const {node: {
         id,nameWithOwner,url,
                        updatedAt,openGraphImageUrl,stargazerCount
    }} = value;
    // console.log(value.node)
    // console.log(moment.utc(updatedAt).toDate());
    // console.log(moment.utc(updatedAt).local().format('YYYY-MM-DD HH:mm:ss'));
    // console.log(title)
    // console.log(state)
    return (
      <React.Fragment>    
        <div className="Repo">
            <img src={github__repo} alt="Github" className="Repo__icon" onClick={() => window.open(url)}/>
            <p className="Repo__name">{nameWithOwner}</p>
            <span className="Repo__star">&#x2B50;{' '}{stargazerCount}</span>
        </div>
        <p className="date">Last updated at : {moment.utc(updatedAt).local().format('YYYY-MM-DD HH:mm:ss')}</p>
      </React.Fragment>
    )
}

export default CommitItem;
