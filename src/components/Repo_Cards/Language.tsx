import React from 'react';
import { List } from 'semantic-ui-react'
import { IPull } from '../../interfaces/RepoCards/index';

const Language: React.FC<IPull> = ({data}) => {
    // tslint:disable-next-line:no-console
    console.log(data.node);
    // tslint:disable-next-line:no-console
    console.log('im in languages');
    const {node:{name,color}} = data;

    return (
    <div> 
        <List as='li'>
            {/* <List.Item as='li' className="pull_contents">Author : {login}</List.Item> */}
            <List.Item as='li' className="pull_contents" style={{color: `${color}`}}>{name}</List.Item>
            {/* <List.Item as='li' className="pull_contents">Color : {color}</List.Item> */}
            {/* <List.Item as='li' className="pull_contents">Issue-Number : {issueNumber}</List.Item>
            <List.Item as='li' className="pull_contents">Issue-State : {state}</List.Item> */}
        </List>
    </div>
)
}

export default Language;