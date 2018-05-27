import React from 'react';


export default ({entities:{entities}}) => {
     console.log(entities);


    const entitiesRender = entities.map((e) => (<p>{e.name}</p>))
    return <div>{entitiesRender}</div>

}

