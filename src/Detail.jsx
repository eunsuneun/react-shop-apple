import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let AlertBox = styled.div`
  background: #eee;
  padding : 20px;
  margin: 100px 0 0 0;
  border-radius: 20px;
  color : ${ props => props.color };
`;

const Detail = ({ data }) => {
  const [alert, setAlert] = useState(false);
  const { id } = useParams();
  const product = data.find((prd) => prd.id == id );
  useEffect(() => {
    let timer = setTimeout(() => { setAlert(true); console.log('hi') }, 1000);
    return () => {
      clearTimeout(timer);
    }
  },[]);
  return(
    <Container>
      <div className="row detail">
        <div className="col-md-6">
          <img src={product.imgSrc} alt={product.title} />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p className="pt-2">{product.desc}</p>
          <p className="pt-2">{product.price}원</p>
          <button className="btn btn-danger mt-2">주문하기</button>
          {alert 
            ? <AlertBox color={'red'}>재고가 얼마 남지 않았습니다.</AlertBox>
            : null
          }
        </div>
      </div>
    </Container>  
  )
}

export default Detail;