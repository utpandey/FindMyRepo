import React,{useEffect,useState} from 'react';
import { List } from 'semantic-ui-react'

const Watchers = ({data,i}) => {
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
            <List.Item as='li' className="pull_contents">user Location : {location ? location : "Not Provided"}</List.Item>
            {/* <List.Item as='li' className="pull_contents">Issue-Number : {issueNumber}</List.Item>
            <List.Item as='li' className="pull_contents">Issue-State : {state}</List.Item> */}
        </List>
    </div>
)
}

export default Watchers;
