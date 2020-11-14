import React from 'react';
import {IPinItem } from '../../interfaces/UserCardTypes/types';

const PinItem: React.FC<IPinItem> = ({value}) => {
    // value = {node : {
    //     licenseInfo : {
    //         nickname: 'No license'
    //     }
    // }}
    const {node: {description,forkCount,nameWithOwner,openGraphImageUrl,stargazerCount,
        url,}} = value;
    // const {node:{licenseInfo:{nickname}}} = value ;
    console.log(value.node)
    // console.log(title)
    // console.log(state)
    return (
        // <List ordered>
        // <List.Item as='a'>
        <div className="Pin">
            <div className="Pin__primary">
                <img src={openGraphImageUrl} alt="Github" className="Pin__primary__icon" onClick={() => window.open(url)}/>
                <p className="Pin__primary__name">{nameWithOwner}</p>
                <span className="Pin__primary__star">&#x2B50;{' '}{stargazerCount}</span>
            </div>    
            {/* <h1 className="Pin__text">nameWithOwner : {nameWithOwner}</h1> 
            <h1 className="Pin__text">stargazerCount : {stargazerCount}</h1> */}
            <h1 className="Pin__text">Fork Count : {forkCount}</h1>
            <p className="Pin__desc">Description :{description ? description : "Not Available"}</p>
            {/* <p className="Pin__lic">License used : {nickname ? nickname : "Not Provided"}</p>  */}
        </div>
        
    )
}

export default PinItem;
