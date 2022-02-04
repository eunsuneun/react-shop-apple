import React, { useState, useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Info from './Info';
import TabContent from './TabContent';
import { CSSTransition } from 'react-transition-group';

let AlertBox = styled.div`
  background: #eee;
  padding : 20px;
  margin: 100px 0 0 0;
  border-radius: 20px;
  color : ${ props => props.color };
`;

const Detail = ({ data, stock, setStock }) => {
  const [alert, setAlert] = useState(false);
  const [tabId, setTabId] = useState(0);
  const [tabTransition, setTabTransition] = useState(false);
  const { id } = useParams();
  const onClickOrder = (i) => {
    if(stock[i] <= 0) { return; }
    const newStock = [...stock];
    newStock[i]--; 
    setStock(newStock);
  };
  const product = data.find((prd) => prd.id == id );
  useEffect(() => {
    let timer = setTimeout(() => { setAlert(true); }, 1000);
    return () => {
      clearTimeout(timer);
    }
  },[]);
  const onClickTab = (i) => {
    setTabId(i);
    setTabTransition(false);
  };
  return(
    <Container>
      <div className="row detail">
        <div className="col-md-6">
          <img src={product.imgSrc} alt={product.title} style={{width: '300px'}} />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p className="pt-2">{product.desc}</p>
          <p className="pt-2">{product.price}원</p>
          <Info stock={stock[id]}/>
          <button className="btn btn-danger mt-2" onClick={() => onClickOrder(id)}>주문하기</button>
          {alert 
            ? <AlertBox color={'red'}>재고가 얼마 남지 않았습니다.</AlertBox>
            : null
          }
        </div>
        {/* tab */}
        <Nav variant="tabs" defaultActiveKey="link-0" className='mt-5'>
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={() => onClickTab(0)}>기본 정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => onClickTab(1)}>배송 정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => onClickTab(2)}>리뷰</Nav.Link>
          </Nav.Item>
        </Nav>
        {/* tab content */}
        <CSSTransition in={tabTransition} classNames="wow" timeout={500}>
          <TabContent tabId={tabId} setTabTransition={setTabTransition}/>
        </CSSTransition>
      </div>
    </Container>  
  )
}

export default Detail;