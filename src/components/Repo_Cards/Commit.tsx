import React,{useEffect,useState} from 'react';
import { List } from 'semantic-ui-react'
import { IPull } from '../../interfaces/RepoCards/index';

const Commit: React.FC<IPull> = ({data}) => {
    const [index,setIndex] = useState(0);
    useEffect(() => {
        setIndex(index+1);
      // const {data: {repo:node}} = {location};
      // tslint:disable-next-line:no-console
      // console.log(node);
    },[data])

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