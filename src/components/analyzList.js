import React from "react";

import styled from "styled-components";

export default ({ entities: { entities } }) => {
  console.log(entities);

  const entitiesRender = entities.map(e => <p>{e.name}</p>);
  return <div>{entitiesRender}</div>;
};
