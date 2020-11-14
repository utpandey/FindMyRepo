import React from 'react';
import { List } from 'semantic-ui-react'
import { IPull } from '../../interfaces/RepoCards/index';

const Commit: React.FC<IPull> = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.node);
    const {node:{title,url,issueNumber,state}} = data;

    return (
    <div> 
        <List as='ol'>
            {/* <List.Item as='li' className="pull_contents">Author : {login}</List.Item> */}
            <List.Item as='li' className="pull_contents">Title : {title}</List.Item>
            <List.Item as='li' className="pull_contents">Url : {url}</List.Item>
            <List.Item as='li' className="pull_contents">Issue-Number : {issueNumber}</List.Item>
            <List.Item as='li' className="pull_contents">Issue-State : {state}</List.Item>
        </List>
    </div>
)
}

export default Commit;