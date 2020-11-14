import React  from 'react'
import {IRepository} from '../interfaces/interfaces';
import { useHistory } from 'react-router-dom';

const RepoCard: React.FC<IRepository> = ({repo}) => {

    const history = useHistory();
    const { node: { name, description, openGraphImageUrl,
        owner: { login }, stargazers: { totalCount: totalStarCount } } } = repo 
     // tslint:disable-next-line:no-console
    const handleOnClick = (event: React.FormEvent<EventTarget>):void =>  {
        history.push({
            state: {repo},
            pathname: '/repo',
        })
    }
    console.log(repo); 
    return (
        <div className="repoList_cards" onClick={handleOnClick}>
            <div className="nameImage">
                <h3>{name}</h3>
                <img src={openGraphImageUrl} alt="react" />
            </div>
            <p>{description}{/* {nickname} */}</p>
            <p>&gt;{' '}{login}</p>
            <p>&#x2B50;{' '}{totalStarCount}</p>
            <div className="go-corner" >
                <div className="go-arrow">
                    →
                </div>
            </div>
        </div>
    )
}

export default RepoCard;