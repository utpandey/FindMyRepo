import React, { useState } from 'react';
import {IAbout,IProfile} from '../interfaces/interfaces';

export const About: React.FC<IAbout> = ({
    bio,
    company,
    createdAt,
    email,
    name,
    followers,
    following,
    issues,
    weburl,
    location
  }) => {
  console.log(issues);
  return (
    <div className="about"> 
      <div className="about__item">
        <h3>Bio &gt;</h3>
        <p>{bio}</p>
      </div>
      {/* <div className="about__item">
        <h3>Company &gt;</h3>
        <p>{company}</p>
        
      </div> */}
      <div className="about__item">
        <h3>Following &gt;</h3>
        <p>{following}</p>
        
      </div>
      <div className="about__item">
        <h3>Followers &gt;</h3>
        <p>{followers}</p>
        
      </div>
      <div className="about__item">
        <h3>Issues &gt;</h3>
        <p>{issues}</p>
        
      </div>
      <div className="about__item">
        <h3>Location &gt;</h3>
        <p>{location}</p>
        
      </div>
      <div className="about__item">
        <h3>Name &gt;</h3>
        <p>{name}</p>
        
      </div>
      <div className="about__item">
        <h3>Account Created At: &gt;</h3>
        <p>{createdAt}</p>
        
      </div>
      {/* <div className="about__item">
        <h3>Email &gt;</h3>
        <p>{email}</p>
        
      </div> */}
      <div className="about__item">
        <h3>Website Url &gt;</h3>
        <p>{weburl}</p>
      </div>
    </div>
  )
}

export const Profile:React.FC<IProfile> = ({
  commitComments,
  issueComments,
  pinnedItems,
  pullRequests,
  repositories,
  repositoriesContributedTo,
  starredRepositories,
  watching,
}) => {
  console.log("Profile")
  return (
    <div className="about"> 
    <div className="about__item">
      <h3>commitComments &gt;</h3>
      <p>{commitComments}</p>
      
    </div>
    <div className="about__item">
      <h3>pinnedItems &gt;</h3>
      <p>{pinnedItems}</p>
      
    </div>
    <div className="about__item">
      <h3>starredRepositories &gt;</h3>
      <p>{starredRepositories}</p>
      
    </div>
    <div className="about__item">
      <h3>issueComments &gt;</h3>
      <p>{issueComments}</p>
      
    </div>
    <div className="about__item">
      <h3>watching &gt;</h3>
      <p>{watching}</p>
      
    </div>
    <div className="about__item">
      <h3>pullRequests &gt;</h3>
      <p>{pullRequests}</p>
      
    </div>
    <div className="about__item">
      <h3>repositories: &gt;</h3>
      <p>{repositories}</p>
      
    </div>
    {/* <div className="about__item">
      <h3>Email &gt;</h3>
      <p>{email}</p>
      
    </div> */}
    <div className="about__item">
      <h3>repositoriesContributedTo &gt;</h3>
      <p>{repositoriesContributedTo}</p>
    </div>
  </div>
  )
}
