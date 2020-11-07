import React,{useState, useEffect } from 'react';
import { List } from 'semantic-ui-react'
import { useLocation } from "react-router-dom";
import Pull from './Repo_Cards/Pull';
import Commit from './Repo_Cards/Commit';
import Fork from './Repo_Cards/Forks';
import Labels from './Repo_Cards/Labels';
import Issues from './Repo_Cards/Issues';
import Language from './Repo_Cards/Language';
import Watchers from './Repo_Cards/Watchers';

function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) {return 'n/a'}
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  if (i === 0) {return `${bytes} ${sizes[i]})`}
  return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}

const Repository = (props) => {
  const location = useLocation();
  // console.log(location.data.repo.node);
  const {node: {description,forkCount,name,url,
        pullRequests,commitComments,forks,issues,labels,languages,watchers,
      }} = location.data.repo;
  // tslint:disable-next-line:no-console
  console.log(location.data.repo.node.pullRequests);
  return (
    <div className="repo">
    {/*                         PULL-REQUESTS COMPONENT                                  */}
      <div className="pull card">
        Total Pull Requests : {pullRequests.totalCount}
        {pullRequests &&
          pullRequests.edges.map((data,i) => (
            <Pull data={data} key={i}/>
          ))
        }
        <div className="go-corner" href="#">
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      {/*                         COMMIT-COMMENTS COMPONENT                                  */}
      <div className="item commit card">
        Total Commit Comments : {commitComments.totalCount}
        {commitComments &&
          commitComments.edges.map((data,i) => (
                <Commit data={data} key={i}/>
              ))
            }
        <div className="go-corner" href="#">
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item forks card">
        Total Fork Count : {forks.totalCount} <br></br>
        Total Fork Disk Usage : {bytesToSize(forks.totalDiskUsage)}
        {forks &&
          forks.edges.map((data,i) => (
                <Fork data={data} key={i}/>
              ))
            }
        <div className="go-corner" href="#">
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item issues card">
        Total Issues Count : {issues.totalCount} 
        {issues &&
          issues.edges.map((data,i) => (
                <Issues data={data} key={i}/>
              ))
            }
        <div className="go-corner" href="#">
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item labels card">
        Total Labels Count : {labels.totalCount}
        {labels &&
              labels.edges.map((data,i) => (
                <Labels data={data} key={i}/>
              ))
            }
        <div className="go-corner" href="#">
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item languages card">
        Total Language Count : {languages.totalCount} <br></br>
        Total Size of Languages used : {languages.totalSize}
        {languages &&
          languages.edges.map((data,i) => (
                <Language data={data} key={i}/>
              ))
            }
        <div className="go-corner" href="#">
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      <div className="item watchers card">
        Total Watchers Count : {watchers.totalCount}
        {watchers &&
          watchers.edges.map((data,i) => (
                <Watchers data={data} key={i}/>
              ))
            }
        <div className="go-corner" href="#">
          <div className="go-arrow">
            →
          </div>
        </div>
      </div>
      {/* <div className="item">8</div> */}
    </div>
  )
};

export default Repository;

