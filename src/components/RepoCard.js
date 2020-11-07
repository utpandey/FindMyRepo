import React, {useCallback}  from 'react'
import Repository from './Repository';
import {useHistory} from 'react-router-dom';
const RepoCard = ({repo}) => {

    const history = useHistory();
    const {node: {name, description,openGraphImageUrl, 
                owner: {login}, stargazers: {totalCount: totalStarCount}}} = {...repo };
    // const {node: {licenseInfo: {nickname = 'No License'} = {} } = {} } = repo || {}
     // tslint:disable-next-line:no-console
    // console.log(nickname)
    // tslint:disable-next-line:no-console
    const handleOnClick = event =>  {
        history.push({
            data: {repo},
            pathname: '/repo',
            
        })
    }
    // tslint:disable-next-line:no-console
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
            <div className="go-corner" href="#">
                <div className="go-arrow">
                    →
                </div>
            </div>
        </div>
    )
}

export default RepoCard;