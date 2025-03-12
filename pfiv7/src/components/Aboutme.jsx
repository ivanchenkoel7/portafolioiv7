// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/aboutme.css";
import FotoChica from './FotoChica';
import '../styles/aboutme_responsive.css';

const Aboutme = () => {
  return (
    <>
    <div className="area area1a">
      <div className="areaone">
        <h1 className="title__grid">Sobre mi...</h1>
      </div>
    </div>
    
    <FotoChica />
      
      <div className="area area3a-aboutme">
        <div className="design__subtitule">¿Que es lo que hago?</div>
        <div className="abouttodo__list">
          <li className="list__do">
            <img className='img__list'
              width="85"
              height="85"
              src="https://img.icons8.com/nolan/96/web-design.png"
              alt="web-design" />
            <div className="list__list">
              <h3 className="list__subtitle">Diseño Web</h3>
              <p className="list__text">
                Me encanta diseñar y desarrollar sitios web modernos y atractivos.
                Utilizo tecnologías como HTML, CSS y JavaScript para crear sitios web.
                Me gusta mucho el CSS y el diseño responsivo.
              </p>
            </div>
          </li>
          <li className="list__do">
            <img className='img__list'
            width="85" height="85" src="https://img.icons8.com/nolan/90/programming.png" alt="programming" />
            <div className="list__list">
              <h3 className="list__subtitle">Desarrollo Backend</h3>
              <p className="list__text">
                Tengo experiencia en el desarrollo de aplicaciones web con Django.
                Me gusta trabajar con bases de datos y crear APIs RESTful.

              </p>
            </div>
          </li>

          <li className="list__do">
            <img className='img__list'
              width="85" height="85" src="https://img.icons8.com/nolan/90/windows10-personalization.png" alt="windows10-personalization" />
            <div className="list__list">
              <h3 className="list__subtitle">Diseño Gráfico</h3>
              <p className="list__text">
                Me encanta el diseño gráfico y la creación de contenido visual.
                Utilizo herramientas como CorelDraw y Canva.
                Tambien tengo conocimientos en After Effects y Blender.

              </p>
            </div>
          </li>
        </div>
        
      </div><div className="area area4a">
        <header className="about__header">
          <article className="personal-info__bio">
            <h2 className="personal-info__titleone">
              Me llamo <strong className="ivangaray">Ivan Garay</strong> , soy
              Desarrollador Web
            </h2>
            <p className="personal-info__description">
            Me defino como un apasionado Desarrollador Web con 3 años de experiencia.
            Mi enfoque principal es el desarrollo frontend, utilizando tecnologías como HTML, CSS, JavaScript y React. 
            También tengo experiencia en el desarrollo backend con Django y la creación de APIs RESTful.  
            Me defino como un verdadero polifuncional. ME muevo y adapto a cualquier entorno ademas de ser una
            persona con habilidades para reparar y solucionar problemas.
            Tengo capacidad para arreglar pçs, reparar electrodomesticos y solucionar problemas de software.
            </p>
          </article>
        </header>
      </div><div className="area area5a">
        <div className="design__container">
          <div className="about__design">
            <div className="design__presentation">
            <img src="/assets/logoiv7_pequeño.webp" alt="" className="logo__about" />
              <h2 className="design__subtitule">Mi Marca Personal</h2>
            </div>
              <p className="design__text">
              Al momento de comenzar a transitar mi camino en el desarrollo web, también tomé la 
              decisión de crear mi propia marca personal. Después de varios intentos,
              logré encontrar la combinación perfecta para mi logo.
              Fresco, moderno y con un toque de elegancia.
              </p>
          </div>
        </div>
      </div><div className="area area6a">
        <div className="personal-info__data">
          <ul className="personal-info__list">
            <li className="personal-info__option">
              <span className="personal-info__title"
              ><i className="fa-solid fa-user-clock"></i> Edad</span>
              <span className="personal-info__value">34</span>
            </li>

            <li className="personal-info__option">
              <span className="personal-info__title"
              ><i className="fa-solid fa-earth-americas"></i> País:</span>
              <span className="personal-info__value">Uruguay</span>
            </li>

            <li className="personal-info__option">
              <span className="personal-info__title"
              ><i className="fa-solid fa-location-crosshairs"></i>
                Ubicación:</span>
              <span className="personal-info__value">Playa Hermosa</span>
            </li>

            <li className="personal-info__option">
              <span className="personal-info__title"
              ><i className="fa-brands fa-creative-commons-nd"></i> Experiencia:</span>
              <span className="personal-info__value">Ventas, Logistica</span>
            </li>

            <li className="personal-info__option">
              <span className="personal-info__title"
              ><i className="fa-solid fa-users-gear"></i>
                Skills:</span>
              <span className="personal-info__value"
              >Dialogo, Compromiso</span>
            </li>
          </ul>
        </div>
      </div><div className="area area7a">
        <div className="objetivos2">
          <h2 className="subtitle__mision2">Experiencia</h2>
          <hr className="servicio__hr2" />

          <div className="objetivos__mision2">
            <p className="text__mision22">1+</p>
            <p className="text__mision2">
              Años de Experiencia<i className="fa-solid fa-book"></i>
            </p>
          </div>
        </div>
      </div><div className="area area8a">
        <div className="objetivos2">
          <h2 className="subtitle__mision22">Proyectos</h2>
          <hr className="servicio__hr2" />

          <div className="objetivos__mision2">
            <p className="text__mision22">5</p>
            <p className="text__mision2">
              En desarrollo actualmente<i className="fa-solid fa-code"></i>
            </p>
          </div>
        </div>
      </div>{/*<div className="area area9a">
        <div className="objetivos2">
          <h2 className="subtitle__mision222">Clientes</h2>
          <hr className="servicio__hr2" />

          <div className="objetivos__mision2">
            <p className="text__mision22">2</p>
            <p className="text__mision2">
              Respaldan nuestro trabajo<i className="fa-solid fa-users"></i>
            </p>
          </div>
        </div>
      </div>*/}
      
      <div className='area area10a'>
        <div className="design__container">
          <div className="about__design2">
              <h2 className="design__subtitule2">Habilidades y Trayectoria</h2>
              <p className="design__text2">
              Desde que recuerdo, fui un enamorado de la tecnología. 
              Desde mi adolescencia, era la persona que se destacaba en informática o que sabía arreglar un problema, o que podía ayudar a encontrar la solución a ese problema. Esto me llevó a una constante búsqueda de conocimientos en el área de la informática y la tecnología: 
              reparación de PC, diseño gráfico, diseño 3D y, hoy dia, diseño web. 
              Recientemente apliqué un poco de todas mis habilidades y reformé una PC que estaba siendo desechada, convirtiéndola en mi propio servidor casero con Ubuntu Server. 
              Fueron muchos días y horas de lectura, de aprender nuevas cosas y adquirir nuevos conocimientos, para al final llegar a tener el servidor funcionando y desplegando desde allí mi aplicación, que en otro momento había guardado en otro lugar privado. En el camino, aprendí sobre servidores, sobre muchos comandos, IP, DNS, puertos, seguridad, proxy, etc. 
              Fue una experiencia muy enriquecedora y tuve una gran ayuda de lo que es la IA. Una herramienta que te ayuda a encontrar soluciones mas rapido.
              </p>
          </div>
        </div>
      </div>
      </>
  )
}

export default Aboutme

