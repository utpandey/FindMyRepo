import React from 'react';
import { List } from 'semantic-ui-react'
import { IPull } from '../../interfaces/RepoCards/index';

const Forks: React.FC<IPull> = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data);
    const {node:{name,createdAt,description,updatedAt,resourcePath}} = data;

    return (
    <div> 
        <List as='ol'>
            {/* <List.Item as='li' className="pull_contents">Author : {login}</List.Item> */}
            <List.Item as='li' className="pull_contents">Label Name : {name}</List.Item>
            <List.Item as='li' className="pull_contents">Created at : {createdAt ? createdAt : "Not Available"}</List.Item>
            <List.Item as='li' className="pull_contents">Updated at : {updatedAt}</List.Item>
            <List.Item as='li' className="pull_contents">Resource path : {resourcePath ? resourcePath : "Not Available"}</List.Item> 
            <List.Item as='li' className="pull_contents">Description : {description ? description : 'Not Available'}</List.Item>
        </List>
    </div>
)
}

export default Forks;