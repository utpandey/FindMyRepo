import React from 'react';
import github__repo from '../../icons/github__repo.svg';
import moment from 'moment';
import { IRepoItem } from '../../interfaces/UserCardTypes/types';
// const converter = (date:string) => {
//     const m = moment(date);
//     return m.format('LLL');
// }
const RepoItem: React.FC<IRepoItem>  = ({value}) => {
    const {node: {
        id,nameWithOwner,url,
                        updatedAt,openGraphImageUrl,stargazerCount
    }} = value;
    return (
      <React.Fragment>    
        <div className="Repo">
            <img src={openGraphImageUrl} alt="Github" className="Repo__icon" onClick={() => window.open(url)}/>
            <p className="Repo__name">{nameWithOwner}</p>
            <span className="Repo__star">&#x2B50;{' '}{stargazerCount}</span>
        </div>
        <p className="date">Last updated at : {moment.utc(updatedAt).local().format('YYYY-MM-DD HH:mm:ss')}</p>
      </React.Fragment>
    )
}

export default RepoItem;
