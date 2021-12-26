import React from 'react'
import '../static/css/Home.css'

// Components
import Header from './Header'
import Footer from './Footer'

// Bootstrap 
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from "react-bootstrap";

// Import images
import ss1 from '../static/img/ss1.png'
import ss3 from '../static/img/ss3.png'
import ss4 from '../static/img/ss4.png'
import ss5 from '../static/img/ss5.png'
import ss6 from '../static/img/ss6.png'
import ss7 from '../static/img/ss7.png'
import logo from '../static/img/logoKonoha.png'

export default function Home() {

    
    return (
        <div>
            <Header/>
            <section className="hero" style={{ backgroundColor: "#E1F3EE" }}>
                <div className="container">
                    <div className="left-col">
                        <h1 style={{ color: "#A4952F", textAlign: "center" }} className="center"><i>Acompañamiento terapéutico y de aprendizaje vivo desde el ser para todos.</i></h1>
                        <table className="center" style={{ marginTop: "44px" }}>
                            <thead>
                                <tr>
                                    <td><h3><Badge bg="success">🌱 Psicoterapia</Badge></h3></td>
                                    <td><h3><Badge bg="success">🎨 Arteterapia</Badge></h3></td>
                                    <td><h3><Badge bg="success">🌀 Educación</Badge></h3></td>
                                </tr>
                            </thead>
                        </table>
                        <h3 style={{ color: "#A79C74", textAlign: "center", marginTop: "42px" }} className="center">El espacio terapéutico es un encuentro donde nuestro ser no se siente amenazado, nos permitimos ser tocados por el ser del otro, cultivando una relación terapéutica que otorgue la posibilidad de trascender juntos en el encuentro a nuestros propios ritmos.</h3>
                    </div>
                </div>
                <img src={logo} className="hero-img" alt="Illustration"/>
            </section>            
            <section style={{ backgroundColor: "#E1F3EE" }}>
            <hr class="solid"/>
                <Container>
                    <Row>
                        <Col xs={6} md={4} style={{ marginTop: "20px" }}>
                            <Image src={ss1} rounded fluid />
                        </Col>
                        <Col xs={6} md={4} style={{ marginTop: "20px" }}>
                            <Image src={ss6} rounded fluid />
                        </Col>
                        <Col xs={6} md={4} style={{ marginTop: "20px" }}>
                            <Image src={ss4} rounded fluid />
                        </Col>
                        <Col xs={6} md={4} style={{ marginTop: "20px" }}>
                            <Image src={ss7} rounded fluid />
                        </Col>
                        <Col xs={6} md={4} style={{ marginTop: "20px" }}>
                            <Image src={ss3} rounded fluid />
                        </Col>
                        <Col xs={6} md={4} style={{ marginTop: "20px" }}>
                            <Image src={ss5} rounded fluid />
                        </Col>
                    </Row>
                </Container>
                <div style={{ textAlign: "center" }}>             
                </div>
            </section>
            <Footer/>
        </div>
    )
}