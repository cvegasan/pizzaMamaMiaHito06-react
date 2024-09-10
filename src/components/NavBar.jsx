import iconPizza from '/icon-pizza.png'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
// recordar condición ? true : false
import FormatoMiles from './FormatoMiles';

import {Link} from 'react-router-dom';

import { useContext} from "react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
    // const total = 25000;
    const token = false;

    const {
        amount
      } = useContext(CartContext)

  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand>Pizzeria Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Item className="cls-item-spacing">
                            <Link to="/pizzaMamaMiaHito06-react">
                                <Button variant="outline-light" size="sm"><img src={iconPizza} alt="iconoPizza"></img> Home </Button>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="cls-item-spacing">
                            <Link to="/pizzaMamaMiaHito06-react/login">
                                <Button variant="outline-light" size="sm">{token ? '🔓Profile' : '🔐Login'}</Button>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/pizzaMamaMiaHito06-react/register">
                                <Button variant="outline-light" size="sm">{token ? '🔒Logout' : '🔐Register'}</Button>
                            </Link>
                        </Nav.Item>
                        {token &&
                                (<Nav.Item>
                                    <Link to="/pizzaMamaMiaHito06-react/profile">
                                        <Button variant="outline-light" size="sm">😎Profile</Button>
                                    </Link>
                                </Nav.Item>)
                        }
                    </Nav>
                    <div className="d-flex">
                        <Link to="/pizzaMamaMiaHito06-react/cart">
                            <Button variant="outline-info" size="sm">🛒Total: $<FormatoMiles numero={amount} /></Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;
