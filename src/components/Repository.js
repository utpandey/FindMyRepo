import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Repository = (props) => {
  const location = useLocation();
   // tslint:disable-next-line:no-console
  console.log(location.data.repo.node);
  const {node: {description,forkCount,name,url}} = location.data.repo;
   // const {data: {repo:{node}}} = {location};
   
   // tslint:disable-next-line:no-console
   console.log(description);
   // console.log(node);
  // tslint:disable-next-line:no-console
  console.log("REPO")
  useEffect(() => {
   
    // const {data: {repo:node}} = {location};
    // tslint:disable-next-line:no-console
    // console.log(node);
  },[location])
  return (
    <div className="repo">asdsa</div>
  )
};

export default Repository;