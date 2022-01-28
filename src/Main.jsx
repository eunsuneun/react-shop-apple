import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Card from './Card.jsx';
import axios from 'axios';

const Main = ({ data, addProduct }) => {
  const [more, setMore] = useState(true);
  const onClickMore = () => {
    axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
      // 요청 성공 시
      setMore(false);
      addProduct(result.data);
    }).catch(() => {
      // 요청 실패 시
    });
  };
  return (
    <>
      {/* visual */}
      <div className='visual'>
        <h3>SAT, 16TH, OCT, 2021</h3>
        <h1>CUSTOMELLOW<br/>SEONGSU OPEN</h1>
      </div>
      {/* prd list */}
      <Container className='card'>
        <div className="row">
          {data.map((v,i) => <Card data={data} v={v} i={i} key={i} /> )}
          {more
          ? <Button variant="outline-secondary" className='mt-4' onClick={onClickMore} >더보기</Button>
          : null
          }
        </div>
      </Container>
    </>
  );
}

export default Main;