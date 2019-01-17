import React from 'react';
import Create from './create';
import List from './display';
import styled from 'styled-components';

const ItemsSection = styled.section`
  /* add style */
`;

const Items = () => {
  return (
    <ItemsSection>
      <Create/>
      <List/>
    </ItemsSection>
  );
};

export default Items;
