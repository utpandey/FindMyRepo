import React from 'react';
import { List } from 'semantic-ui-react'
import { IPull } from '../../interfaces/RepoCards/index';

const Pull: React.FC<IPull> = ({data}) => {
    // tslint:disable-next-line:no-console
    // console.log("total" + RepototalCount);
    const {node:{additions,permalink,publishedAt,bodyText,state,title}} = data;

    return (
    <div> 
        <List as='ol'>
            <List.Item as='li' className="pull_contents">Title : {title}</List.Item>
            <List.Item as='li' className="pull_contents">Addition : {additions}</List.Item>
            <List.Item as='li' className="pull_contents">Body : {bodyText}</List.Item>
            <List.Item as='li' className="pull_contents">PermaLink : {permalink}</List.Item>
            <List.Item as='li' className="pull_contents">Published at : {publishedAt}</List.Item>
            <List.Item as='li' className="pull_contents">State : {state}</List.Item>
        </List>
    </div>
)
}

export default Pull;