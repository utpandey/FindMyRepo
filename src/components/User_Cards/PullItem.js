import React from 'react'

const PullItem = ({value}) => {
    const {node: {body,title,state}} = value
    return (
        <div>
            <h3 style={{color: 'black'}}>{title}</h3> 
            <h3 style={{color: 'black'}}>{state}</h3>
            <h3 style={{color: 'black'}}>{body}</h3>
            
        </div>
    )
}

export default PullItem;
