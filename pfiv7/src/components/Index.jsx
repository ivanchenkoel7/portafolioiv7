// eslint-disable-next-line no-unused-vars
import React from "react";

const Index = () => {
  return (
      <><div className="area area1">
      <div className="areaone">
        <h1 className="title__grid">home - Presentación</h1>
      </div>
    </div><div className="area area2">
        <div className="img__grid">
        <img src="/src/assets/iv72.webp" alt="Perfil de Ivan Garay" className="img__photo" />
        </div>
      </div><div className="area area10">
        <div className="inicio__container">
          <h2 className="subtitle__inicio">Hola Mundo!</h2>
          <div className="duo__inicio">
            <h3 className="nombre__inicio">
              Soy <span className="subtitle__img">Ivan Garay</span>
            </h3>
          </div>
          <h4 className="profesion__inicio">Desarrollador Web</h4>
          <p className="text__inicio">
          Gracias por visitar mi sitio web. Aquí encontrarás información sobre
          mi perfil profesional y los proyectos en los que he trabajado. Si
          deseas contactarme, puedes hacerlo a través de los enlaces a mis
          redes sociales. ¡Espero que te guste!
          </p>
          <div className="redes__inicio">
            <div className="footer-section">
              <ul className="icon__list">
                <li className="icon__icons">
                  <a
                    href="https://www.linkedin.com/in/ivan-garay-183197250/"
                    className="icons__link"
                    style={{ '--clr0': '#4267b2', '--clr1': '#283e6b', '--clr2': '#5a7cc2' }}
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="icon__icons">
                  <a
                    href="#"
                    className="icons__link"
                    style={{ '--clr0': '#25d3c7', '--clr1': '#1b5e5a', '--clr2': '#5ac2bf' }}
                  >
                    <i className="fa-regular fa-file"></i>
                  </a>
                </li>
                <li className="icon__icons">
                  <a
                    href="/contacto"
                    className="icons__link"
                    style={{ '--clr0': '#ffe600', '--clr1': '#b3a200', '--clr2': '#fff34d' }}
                  >
                    <i className="fa-solid fa-envelope menu__icon"></i>
                  </a>
                </li>
                <li className="icon__icons">
                  <a
                    href="https://github.com/ivanchenkoel7"
                    className="icons__link"
                    style={{ '--clr0': '#c13584', '--clr1': '#743c5c', '--clr2': '#c25ab2' }}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default Index;