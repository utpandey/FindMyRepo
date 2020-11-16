import React from 'react';
import { motion } from 'framer-motion';
import Pull from './Repo_Cards/Pull';
import Commit from './Repo_Cards/Commit';
import Fork from './Repo_Cards/Forks';
import Labels from './Repo_Cards/Labels';
import Issues from './Repo_Cards/Issues';
import Language from './Repo_Cards/Language';
import Watchers from './Repo_Cards/Watchers';
import { IStateType } from '../interfaces/interfaces';
import {useLocation } from 'react-router-dom';


function bytesToSize(bytes: string) {
  const num = parseInt(bytes, 10);
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (num === 0) {return 'n/a'}
  // tslint:disable-next-statement
  const i = (Math.floor(Math.log(num) / Math.log(1024)))
  if (i === 0) {return `${num} ${sizes[i]})`}
  return `${(num / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}

const repoDetailsContainerVariants = {
  exit: {
    transition: {
            ease: 'easeInOut'
        },    
    x: '-100vw',
        
    },  
  hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 2
        }
    },
}



const Repository: React.FC = () => {
  // const location = useLocation();
  const { state } = useLocation<IStateType>();
  // console.log(location.data.repo.node);
  const {node: {pullRequests,commitComments,forks,issues,labels,languages,watchers,
      }} = state.repo;
  // tslint:disable-next-line:no-console
  // console.log(location.state.repo.node.pullRequests);
  return (
    <motion.div className="repo"
      animate = 'visible'
      exit = 'exit' 
      initial = 'hidden'
      variants={repoDetailsContainerVariants}
    >
      {/*                         PULL-REQUESTS COMPONENT                                  */}
      <div className="pull card">
        <div className="card_title">Total Pull Requests : {pullRequests.totalCount}</div>
        {pullRequests ?
          pullRequests.edges.map((data:string,i:number) => (
            <Pull data={data} key={i}/>
          )) : "No Pull Requests"
        }
        <div className="go-corner" >
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      {/*                         COMMIT-COMMENTS COMPONENT                                  */}
      <div className="item commit card">
        <div className="card_title">Total Commit Comments : {commitComments.totalCount}</div>
        {commitComments ?
          commitComments.edges.map((data:string,i:number) => (
                <Commit data={data} key={i}/>
              )) : "No Commit Comments"
            }
        <div className="go-corner" >
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item forks card">
        <div className="card_title">Total Fork Count : {forks.totalCount} <br/>
          Total Fork Disk Usage : {bytesToSize(forks.totalDiskUsage)}
        </div>
        
        {forks ?
          forks.edges.map((data:string,i:number) => (
                <Fork data={data} key={i}/>
              )) : "No Forks"
            }
        <div className="go-corner" >
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item issues card">
        <div className="card_title">Total Issues Count : {issues.totalCount} </div>
        {issues ?
          issues.edges.map((data:string,i:number) => (
                <Issues data={data} key={i}/>
              )) : "No Issues"
            }
        <div className="go-corner" >
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item labels card">
        <div className="card_title">Total Labels Count : {labels.totalCount}</div>
        {labels &&
              labels.edges.map((data:string,i:number) => (
                <Labels data={data} key={i}/>
              ))
            }
        <div className="go-corner" >
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item languages card">
        <div className="card_title">Total Language Count : {languages.totalCount} <br/>
          Total Size of Languages used : {languages.totalSize}
        </div>
      
        {languages &&
          languages.edges.map((data:string,i:number) => (
                <Language data={data} key={i}/>
              ))
            }
        <div className="go-corner" >
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item watchers card">
        <div className="card_title">Total Watchers Count : {watchers.totalCount}</div>
        {watchers &&
          watchers.edges.map((data:string,i:number) => (
                <Watchers data={data} key={i}/>
              ))
            }
        <div className="go-corner" >
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      {/* <div className="item">8</div> */}
    </motion.div>
  )
};

export default Repository;

