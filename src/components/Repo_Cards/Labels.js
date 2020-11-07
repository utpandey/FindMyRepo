import React,{useEffect,useState} from 'react';
import { List } from 'semantic-ui-react'
// totalCount,
//                             edges{
//                                 node{
//                                     name
//                                 }   
//                             }
//                         },
const Forks = ({data,i}) => {
    const [index,setIndex] = useState(0);
    useEffect(() => {
        setIndex(index+1);
      // const {data: {repo:node}} = {location};
      // tslint:disable-next-line:no-console
      // console.log(node);
    },[data])

    // tslint:disable-next-line:no-console
    console.log(data);
    const {node:{name,createdAt,description,updatedAt,resourcePath}} = data;

    return (
    <div> 
        <List as='ol'>
            {/* <List.Item as='li' className="pull_contents">Author : {login}</List.Item> */}
            <List.Item as='li' className="pull_contents">Label Name : {name}</List.Item>
            <List.Item as='li' className="pull_contents">Created at : {createdAt}</List.Item>
            <List.Item as='li' className="pull_contents">Updated at : {updatedAt}</List.Item>
            <List.Item as='li' className="pull_contents">Resource path : {resourcePath}</List.Item> 
            <List.Item as='li' className="pull_contents">Description : {description ? `${description}` : 'Not Provided'}</List.Item>
        </List>
    </div>
)
}

export default Forks;