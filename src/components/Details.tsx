import React, { useState } from 'react';
import {IAbout} from './interfaces';

export const About: React.SFC<IAbout> = ({
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
      <div className="about__item">
        <h3>Company &gt;</h3>
        <p>{company}</p>
        
      </div>
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
        <h3>BAccount Created At: &gt;</h3>
        <p>{createdAt}</p>
        
      </div>
      <div className="about__item">
        <h3>Email &gt;</h3>
        <p>{email}</p>
        
      </div>
      <div className="about__item">
        <h3>Website Url &gt;</h3>
        <p>{weburl}</p>
      </div>
    </div>
  )
}

export const Profile = () => {
  console.log("Profile")
  return (
    <div>
      <p>qwerty</p>
    </div>
  )
}