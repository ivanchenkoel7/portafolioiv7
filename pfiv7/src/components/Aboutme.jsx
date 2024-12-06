// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/aboutme.css";
import FotoChica from './FotoChica';

const Aboutme = () => {
  return (
    <><div className="area area1a">
      <div className="areaone">
        <h1 className="title__grid">Sobre mi...</h1>
      </div>
    </div>
    
    <FotoChica />
      
      <div className="area area3a">
        <div className="design__subtitule">¿Que es lo que hago?</div>
        <div className="abouttodo__list">
          <li className="list__do">
            <img
              width="90"
              height="90"
              src="https://img.icons8.com/nolan/96/web-design.png"
              alt="web-design" />
            <div className="list__list">
              <h3 className="list__subtitle">Diseño Web</h3>
              <p className="list__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur natus assumenda autem inventore molestiae, quae
                illum aut sunt corporis?.
              </p>
            </div>
          </li>
          <li className="list__do">
            <img width="90" height="90" src="https://img.icons8.com/nolan/90/programming.png" alt="programming" />
            <div className="list__list">
              <h3 className="list__subtitle">Desarrollo Backend</h3>
              <p className="list__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur natus assumenda autem inventore molestiae, quae illum aut sunt corporis?

              </p>
            </div>
          </li>

          <li className="list__do">
            <img width="90" height="90" src="https://img.icons8.com/nolan/90/windows10-personalization.png" alt="windows10-personalization" />
            <div className="list__list">
              <h3 className="list__subtitle">Diseño Gráfico</h3>
              <p className="list__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur natus assumenda autem inventore molestiae, quae illum aut sunt corporis?

              </p>
            </div>
          </li>
        </div>
      </div><div className="area area4a">
        <header className="about__header">
          <article className="personal-info__bio">
            <h2 className="personal-info__titleone">
              Me llamo <strong className="ivangaray">Ivan Garay</strong>, soy
              Desarrollador Web
            </h2>
            <p className="personal-info__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellendus similique at voluptatum dicta explicabo quibusdam
              aspernatur adipisci! Assumenda fugiat eligendi ullam esse porro
              numquam exercitationem. Error sapiente quisquam amet.
            </p>
          </article>
        </header>
      </div><div className="area area5a">
        <div className="design__container">
          <img src="assets/iv7ico.png" alt="" className="logo__about" />
          <div className="about__design">
            <h2 className="design__subtitule">Mi Marca Personal</h2>
            <p className="design__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellendus similique at voluptatum dicta explicabo quibusdam
              aspernatur adipisci! Assumenda fugiat eligendi ullam esse porro
              numquam exercitationem. Error sapiente quisquam amet.
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
              ><i className="fa-solid fa-mobile-screen-button"></i> Movil:</span>
              <span className="personal-info__value">+59895604814</span>
            </li>

            <li className="personal-info__option">
              <span className="personal-info__title"
              ><i className="fa-solid fa-envelope-circle-check"></i>
                Email:</span>
              <span className="personal-info__value"
              >ivanchenkoel7@gmail.com</span>
            </li>
          </ul>
        </div>
      </div><div className="area area7a">
        <div className="objetivos2">
          <h2 className="subtitle__mision2">Experiencia</h2>
          <hr className="servicio__hr2" />

          <div className="objetivos__mision2">
            <p className="text__mision22">3+</p>
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
      </div><div className="area area9a">
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
      </div></>
  )
}

export default Aboutme

