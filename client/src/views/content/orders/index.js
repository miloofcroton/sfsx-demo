import React from 'react';
import Create from './create';
import Display from './display';
import Graph from './graph';
import styled from 'styled-components';

const ItemsSection = styled.section`
  /* add style */
`;

const Items = () => {
  return (
    <ItemsSection>
      <Create/>
      <Display/>
      <Graph/>
    </ItemsSection>
  );
};

export default Items;
