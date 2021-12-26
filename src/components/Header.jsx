import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../static/css/Header.css'
import logo from '../static/img/logoKonoha.png'

export default function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} className="logo" alt="" /></Navbar.Brand>
                    <Navbar.Brand href="#home"><b style={{ color: "#A4952F"}}>Konoha</b><b style={{ color: "#7EA17B"}}>Centro</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <Nav.Link href="#home">Servicios</Nav.Link>
                        <Nav.Link href="#link">¿Quiénes somos?</Nav.Link>
                        <Nav.Link href="https://api.whatsapp.com/send?phone=573043634667">Agenda tu encuentro</Nav.Link>
                        <Nav.Link href="https://drive.google.com/drive/folders/1KdAIiH_JDVmkjNrT0iQ7lb7Fmzhhengk">Tesoros y herramientas</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
