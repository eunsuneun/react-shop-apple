import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Main from './Main.jsx';
import About from './About.jsx';
import Detail from './Detail.jsx';
import Cart from './Cart';
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState(Data);
  const [stock, setStock] = useState([10, 20, 30, 40, 50, 60]);
  const addProduct = (prd) => {
    const newData = [
      ...data,
      ...prd
    ];
    console.log(newData);
    setData(newData);
  };
  return (
    <div className="App">
      {/* navbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
          <Link to="/" as={Link}>
            <img src='https://www.customellow.com/images/logo-white.svg' className='logo' alt='customellow'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/about" as={Link}>about</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* router */}
      <Routes>
        <Route path='/' element={<Main data={data} addProduct={addProduct}/>}></Route>
      </Routes>
      <Routes>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path='/detail/:id' element={<Detail data={data} stock={stock} setStock={setStock} />}></Route>
      </Routes>
      <Routes>
        <Route path='/cart' element={<Cart data={data} stock={stock} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
