import React from "react";

import styled from "styled-components";

const StyleCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem;
`;

const Card = styled.div`
  height: 54px;
  border: 1px solid;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.5rem;
  max-width: 230px;
`;

const Title = styled.p`
  display: flex;
`;

const listItem = e => (
  <Card>
    <Title>
      <strong>{e.name}:</strong> {e.type}
    </Title>
    <Title>Salience: {e.salience}</Title>
  </Card>
);

export default ({ entities: { entities } }) => {
  console.log(entities);

  const entitiesRender = entities.map(e => listItem(e));
  return <StyleCont>{entitiesRender}</StyleCont>;
};
