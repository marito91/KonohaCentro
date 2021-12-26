import React from 'react'
import '../static/css/Testimonials.css'

// Bootstrap 


// Import images
import ss1 from '../static/img/ss1.png'
import ss2 from '../static/img/ss2.png'
import ss3 from '../static/img/ss3.png'
import ss4 from '../static/img/ss4.png'
import ss5 from '../static/img/ss5.png'
import ss6 from '../static/img/ss6.png'
import ss7 from '../static/img/ss7.png'



export default function Testimonials() {
    return (
        <>
            <section className="testimonials-section" style={{ backgroundColor: "#E1F3EE" }}>
                <div class="container">
                    <ul>
                        <li>
                            <img src={ss1} alt="Person"/>

                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</blockquote>
                            <cite>- Jane Doe</cite>
                        </li>
                        <li>
                            <img src={ss2} alt="Person"/>

                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</blockquote>
                            <cite>- Jane Doe</cite>
                        </li>
                        <li>
                            <img src={ss3} alt="Person"/>

                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</blockquote>
                            <cite>- Jane Doe</cite>
                        </li>
                    </ul>
                </div>
                <div class="container" style={{ marginTop: "20px" }}>
                    <ul>
                        <li>
                            <img src={ss1} alt="Person"/>

                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</blockquote>
                            <cite>- Jane Doe</cite>
                        </li>
                        <li>
                            <img src={ss2} alt="Person"/>

                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</blockquote>
                            <cite>- Jane Doe</cite>
                        </li>
                        <li>
                            <img src={ss3} alt="Person"/>

                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</blockquote>
                            <cite>- Jane Doe</cite>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
