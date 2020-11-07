import React,{useEffect,useState} from 'react';
import { List } from 'semantic-ui-react'
// edges {
//   node {
//       author {login},
//       body,createdAt,path,
//       editor {login},
//   }
// }
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
    const {node:{createdAt,description,forkCount,
            nameWithOwner,homepageUrl,licenseInfo:{nickname},stargazerCount
    }} = data;

    return (
    <div> 
        <List as='ol'>
            <List.Item as='li' className="pull_contents">Name & Owner : {nameWithOwner}</List.Item>
            <List.Item as='li' className="pull_contents">Homepage Url : {homepageUrl}</List.Item>
            <List.Item as='li' className="pull_contents">License used : {nickname}</List.Item>
            <List.Item as='li' className="pull_contents">No. of Stars on this repo : {stargazerCount}</List.Item>
            <List.Item as='li' className="pull_contents">Created at : {createdAt}</List.Item>
            <List.Item as='li' className="pull_contents">description : {description}</List.Item>
            <List.Item as='li' className="pull_contents">Fork-Count : {forkCount}</List.Item>
        </List>
    </div>
)
}

export default Forks;