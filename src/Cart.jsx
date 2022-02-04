import React from 'react';
import { Table } from 'react-bootstrap';

const Cart = ({ store }) => {
  return(
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>1</td>
          <td>1</td>
          <td>2,000</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Cart;