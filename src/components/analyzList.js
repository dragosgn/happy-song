import React from "react";

import styled from "styled-components";


const styleCont = styled.div`
  display: flex;
`

const card = styled.div`
  height: 54px;
  border: 1px solid;
  border-radius: 3px;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const listItem = (e) => (
  <card>
    <p><strong>{e.name}</strong> {e.type} </p>
    <p>Salience: {e.salience}</p>
  </card>
)

export default ({ entities: { entities } }) => {
  console.log(entities);

  const entitiesRender = entities.map(e => listItem(e));
  return <styleCont >{entitiesRender}</styleCont >;
};
