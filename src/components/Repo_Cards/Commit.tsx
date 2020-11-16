import React from 'react';
import { List } from 'semantic-ui-react'
import { IPull } from '../../interfaces/RepoCards/index';

const Commit: React.FC<IPull> = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data);
    const {node:{author:{login},createdAt,path,body,}} = data;

    return (
    <div> 
        <List as='ol'>
            {/* <List.Item as='li' className="pull_contents">Author : {login}</List.Item> */}
            <List.Item as='li' className="pull_contents">Editor : {login}</List.Item>
            <List.Item as='li' className="pull_contents">Created at : {createdAt}</List.Item>
            <List.Item as='li' className="pull_contents">path : {path}</List.Item>
            <List.Item as='li' className="pull_contents">Body : {body}</List.Item>
        </List>
    </div>
)
}

export default Commit;