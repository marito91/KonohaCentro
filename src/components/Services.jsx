import React from 'react'
import '../static/css/Services.css'

// Bootstrap 


// Components
import Header from './Header'
import Footer from './Footer'


// Import images
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


export default function Services() {
    return (
        <>
            <Header />
            <section className="services-section" style={{ backgroundColor: "#E1F3EE" }}>
            <h1 style={{ color: "#A4952F", textAlign: "center", marginBottom: "80px" }}>Nuestros servicios</h1>
                <div class="container">
                    <ul>
                        <li>
                            <img src={flower} alt="Person"/>
                            <cite><h4>Espacios terapéuticos</h4></cite>
                            <blockquote>Espacios de acompañamiento psicoterapéutico individual o grupal desde el enfoque humanista existencial y desde la arteterapia. Dirigido a niños, jóvenes y adultos. Modalidad virtual y presencial.</blockquote>
                        </li>
                        <li>
                            <img src={pencils} alt="Person"/>
                            <cite><h4>Espacios educativos</h4></cite>
                            <blockquote>Espacios de educación alternativa no formal desde una mirada holista. Dichos espacios son: el espacio de Aprendizaje vivo y el Taller de Konoha. Dirigido a personas de 6 a 17 años de edad. Modalidad virtual y presencial.</blockquote>
                        </li>
                        <li>
                            <img src={writing} alt="Person"/>
                            <cite><h4>Ciclos de encuentros de desarrollo personal</h4></cite>
                            <blockquote>Espacios grupales donde trabajamos alrededor de la cultivación del ser, tocando temas como proyecto de vida, autoestima, valores, entre otros. Consisten en ciclos de 3 encuentros con una temática específica. Dirigido a jóvenes y adultos. Modalidad virtual.</blockquote>
                        </li>
                    </ul>
                </div>
                <div class="container" style={{ marginTop: "20px" }}>
                    <ul>
                        <li>
                            <img src={sea} alt="Person"/>
                            <cite><h4>Talleres desde la Pedagogía Ancestral</h4></cite>
                            <blockquote>Espacios de encuentro grupal que buscan generar experiencias genuinas que nos conecten con la esencia de nuestras raíces, con nuestros ancestros y con la naturaleza. Los talleres son: Soy Tierra, Soy Agua, Soy Fuego y Soy Aire. Dirigidos a jóvenes y adultos. Modalidad virtual.</blockquote>
                        </li>
                        <li>
                            <img src={soundColor} alt="Person"/>
                            <cite><h4>Taller de Konoha</h4></cite>
                            <blockquote>Espacio de creación y creatividad, que busca conectarnos con nuestro ser desde el hacer. Nos permite acceder a nuevas realidades de interpretación y consciencia, así como de desarrollo espiritual, físico, y emocional. Los oficios con los que trabajamos son: escultura, teatro, cocina, filosofía, música, danza, pintura, entre otros. Dirigido a niños, jóvenes y adultos. Modalidad virtual y presencial.</blockquote>
                        </li>
                        <li>
                            <img src={leaf} alt="Person"/>
                            <cite><h4>Acompañamiento de crianza consciente para padres</h4></cite>
                            <blockquote>Espacio de acompañamiento a familias, orientados a una crianza consciente, amorosa y respetuosa. Dirigido a familias y Centros educativos. Modalidad virtual.</blockquote> 
                        </li>
                    </ul>
                </div>
                <h3 style={{ color: "#A4952F", textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>¡Todos nuestros espacios son inspirados en la Metodología ASIRI!</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={friends} style={{ width: "400px" }} alt="Person"/>
                </div>

            </section>
            <Footer />
        </>
    )
}
