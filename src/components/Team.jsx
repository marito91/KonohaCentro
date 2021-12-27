import React from 'react'
import '../static/css/Team.css'

// Components
import Header from './Header'
import Footer from './Footer'

// Import images
import profile1 from '../static/img/profile1.png'
import profile2 from '../static/img/profile2.png'
import profile3 from '../static/img/profile3.png'
import profile4 from '../static/img/profile4.png'
import profile5 from '../static/img/profile5.png'
import profile6 from '../static/img/profile6.png'
import profile7 from '../static/img/profile7.png'
import profile8 from '../static/img/profile8.png'
import profile9 from '../static/img/profile9.png'
import flower from '../static/img/flower.png'
import leaf from '../static/img/leaf.png'
import pencils from '../static/img/pencils.png'
import sea from '../static/img/sea.png'
import soundColor from '../static/img/soundColor.png'
import writing from '../static/img/writing.png'
import art from '../static/img/art.svg'
import dream from '../static/img/dream.svg'
import friends from '../static/img/friends.svg'
import hiking from '../static/img/hiking.svg'
import japan from '../static/img/japan.svg'
import meditation from '../static/img/meditation.svg'
import paint from '../static/img/paint.svg'
import stability from '../static/img/stability.svg'
import walk from '../static/img/walk.svg'
import workout from '../static/img/workout.svg'

export default function Team() {
    return (
        <>
        <Header />
            <section className="team-section" style={{ backgroundColor: "#E1F3EE" }}>
            <h2 style={{ color: "#A4952F", textAlign: "center", marginBottom: "40px" }}>¡Contamos con un equipo altamente preparado!</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={dream} style={{ width: "400px", marginBottom: "40px"  }} alt="Person"/>
                </div>
                <div className="teamcontainer">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <img src={profile1} alt="Person"/>
                        </li>
                        <li>
                            <img src={profile2} alt="Person"/>
                        </li>
                        <li>
                            <img src={profile3} alt="Person"/>
                        </li>
                    </ul>
                </div>
                <div className="teamcontainer" style={{ marginTop: "20px" }}>
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <img src={profile4} alt="Person"/>
                        </li>
                        <li>
                            <img src={profile5} alt="Person"/>
                        </li>
                        <li>
                            <img src={profile6} alt="Person"/>
                        </li>
                    </ul>
                </div>
                <div className="teamcontainer" style={{ marginTop: "20px" }}>
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <img src={profile7} alt="Person"/>
                        </li>
                        <li>
                            <img src={profile8} alt="Person"/>
                        </li>
                        <li>
                            <img src={profile9} alt="Person"/>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}
