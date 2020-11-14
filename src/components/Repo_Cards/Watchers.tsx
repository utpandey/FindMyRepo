import React,{useEffect,useState} from 'react';
import { List } from 'semantic-ui-react'
import { IPull } from '../../interfaces/RepoCards/index';

const Watchers: React.FC<IPull>  = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.node);
    // tslint:disable-next-line:no-console
    console.log('im in languages');
    const {node:{login,url,location}} = data;

    return (
    <div> 
        <List as='ol'>
            <List.Item as='li' className="pull_contents">Username : {login}</List.Item>
            <List.Item as='li' className="pull_contents">User Url : {url}</List.Item>
            <List.Item as='li' className="pull_contents">user Location : {location ? location : "Not Available"}</List.Item>
            {/* <List.Item as='li' className="pull_contents">Issue-Number : {issueNumber}</List.Item>
            <List.Item as='li' className="pull_contents">Issue-State : {state}</List.Item> */}
        </List>
    </div>
)
}

export default Watchers;
