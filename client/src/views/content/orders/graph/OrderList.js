import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`

  margin: 0 auto;

  thead {
    tr {
      th {
        border: 1px solid black;
        padding: 5px;
      }
    }
  }

  tbody {
    tr {
      td {
        border: 1px solid black;
        padding: 5px;
      }
    }
  }
`;

const OrderList = ({ orders }) => {

  const orderRows = orders.map((order, index) => (
    <tr key={index}>
      <td>{order.ticker}</td>
      <td>{order.side}</td>
      <td>{order.price}</td>
      <td>{order.shares}</td>
      <td>{order.open.toString()}</td>
    </tr>
  ));

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>ticker</th>
          <th>side</th>
          <th>price</th>
          <th>shares</th>
          <th>open</th>
        </tr>
      </thead>
      <tbody>
        {orderRows}
      </tbody>
    </StyledTable>

  );
};

export default OrderList;
