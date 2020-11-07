import React,{useEffect,useState} from 'react';
import { List } from 'semantic-ui-react'
// totalCount,
// edges{
//     node{
//     title,url,number,state
//     }
// }
const Commit = ({data,i}) => {
    const [index,setIndex] = useState(0);
    useEffect(() => {
        setIndex(index+1);
      // const {data: {repo:node}} = {location};
      // tslint:disable-next-line:no-console
      // console.log(node);
    },[data])

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