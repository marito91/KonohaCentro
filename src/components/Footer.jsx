import React from 'react'
import '../static/css/Footer.css'
import { Link } from 'react-router-dom';

// Images
import facebook from '../static/img/bxl-facebook-circle.svg'
import twitter from '../static/img/bxl-twitter.svg'
import instagram from '../static/img/bxl-instagram.svg'

export default function Footer() {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="https://www.instagram.com/konohacentro/">
                        <img src={instagram} style={{ width: "32px", heigth: "32px" }} alt="" />
                        {/*<i className="icon ion-social-instagram"></i>*/}
                    </a>
                    <a href="https://twitter.com/konohacentro">
                        <img src={twitter} style={{ width: "32px", heigth: "32px" }} alt="" />
                        {/*<i className="icon ion-social-twitter"></i>*/}
                    </a>
                    <a href="https://www.facebook.com/konohacentro/">
                        <img src={facebook} style={{ width: "32px", heigth: "32px" }} alt="" />
                        {/*<i className="icon ion-social-facebook"></i>*/}
                    </a>
                </div>
                <ul class="list-inline">
                    <li className="list-inline-item" style={{ color: "#7EA17B"}}><Link to="/">Inicio</Link></li>
                    <li className="list-inline-item" style={{ color: "#7EA17B"}}><Link to="/servicios">Servicios</Link></li>
                    <li className="list-inline-item" style={{ color: "#7EA17B"}}><Link to="/nuestro_equipo">Nuestro equipo</Link></li>
                </ul>
                <p className="copyright" style={{ color: "#7EA17B"}}>Konoha Centro © 2021</p>
            </footer>
        </div>
    )
}
