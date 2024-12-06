// eslint-disable-next-line no-unused-vars
import React from 'react';
import FotoChica from './FotoChica';
import '../styles/Reseñas.css'
const Reseñas = () => {
  return (
    <>
      <div className="area area1a">
        <div className="areaone">
          <h1 className="title__grid">Reseñas</h1>
        </div>
      </div>
      <FotoChica />
      <div className="area area3a">
        <div className="container__info">
          <h2 className="info__title">Confianza en mí</h2>
          <h3 className="info__destacado">
            Estas son algunas de las personas con las que trabajé.
            Ellos han impulsado e incentivado mi desarrollo como profesional.
            Para mí ha sido muy satisfactorio y enriquecedor trabajar con ellos,
            porque siempre pudimos encontrar el camino y al escuchar sus opiniones y sugerencias
            pude mejorar y crecer como profesional.
            Espero que en este camino que comienzo a recorrer, pueda seguir encontrando personas
            que me ayuden a crecer y a mejorar.
          </h3>
        </div>
      </div>
      
      {/* Reseñas */}
      <div className="area area1r">
        <div className="card">
          <div className="user-info">
            <img src="/src/assets/eliana.jpeg" alt="Imagen de Usuario" className="user-image" />
            <div>
              <h2 className="user-name">Eliana Scotti</h2>
              <p className="user-title">Ingeniera, CEO Aixa Energía</p>
              <p className="user-location">Piriápolis, Uruguay</p>
            </div>
          </div>
          <div className="review">
            <div className="stars">
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star">★</span>
            </div>
            <p className="review-text">"Trabajar con Iván ha sido una experiencia increíble. Su habilidad para resolver problemas y su dedicación al proyecto fueron clave para nuestro éxito."</p>
          </div>
          <div className="foot__card">
            <a href="https://www.linkedin.com/in/eliana-scotti-6b548616/">
              <button className="connect-button">Conectar en LinkedIn</button>
            </a>
            <p className="review-date">1 de Diciembre de 2024</p>
          </div>
        </div>
      </div>
      
      
      <div className="area area2r">
        <div className="card">
          <div className="user-info">
            <img src="/src/assets/daniel.jpeg" alt="Imagen de Usuario" className="user-image" />
            <div>
              <h2 className="user-name">Daniel Ochoa</h2>
              <p className="user-title">Data Analyst | Data Scientist | Python Programmer | BI Developer | Machine Learning</p>
              <p className="user-location">Tegucigalpa, Honduras</p>
            </div>
          </div>
          <div className="review">
            <div className="stars">
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
            </div>
            <p className="review-text">"Fue un buen alumno durante el curso... Me gustó mucho su trabajo final. Espero que siga aprendiendo mucho en este vasto mundo del Desarrollo Web."</p>
          </div>
          <div className="foot__card">
            <a href="https://www.linkedin.com/in/daol96/">
              <button className="connect-button">Conectar en LinkedIn</button>
            </a>
            <p className="review-date">1 de Diciembre de 2024</p>
          </div>
        </div>
      </div>

      <div className="area area3r">
                <div className="card">
                    <div className="user-info">
                        <img src="/src/assets/ukito.jpeg" alt="Imagen de Usuario" className="user-image" />
                        <div>
                            <h2 className="user-name">Gabriel Meruvia</h2>
                            <p className="user-title">Especialista de Soporte posventa en Thomson Reuters Argentina</p>
                            <p className="user-location">Buenos Aires, Argentina</p>
                        </div>
                    </div>
                    <div className="review">
                        <div className="stars">
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                            <span className="star">★</span>
                        </div>

                        <p className="review-text">"Ivan es un excelente profesional, muy comprometido con su trabajo y siempre dispuesto a ayudar.
                            Es un placer trabajar con él."</p>
                    </div>

                    <div className="foot__card">
                        <a href="https://www.linkedin.com/in/gabriel-meruvia-42b87343/"><button className="connect-button">Conectar en LinkedIn</button></a>
                        <p className="review-date">1 de Diciembre de 2024</p>
                    </div>
                </div>
            </div>

            <div className="area area4r">
                <div className="card">
                    <div className="user-info">
                        <img src="/src/assets/dario.jpeg" alt="Imagen de Usuario" className="user-image" />
                        <div>
                            <h2 className="user-name">Dario Ivan Castelli</h2>
                            <p className="user-title">Data Visualization/ Designer</p>
                            <p className="user-location">Buenos Aires, Argentina</p>
                        </div>
                    </div>
                    <div className="review">
                        <div className="stars">
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                        </div>
                        <p className="review-text">"Fue un buen alumno durante el curso...Me gusto Mucho su trabajo final.
                            Espero que siga aprendiendo mucho en este vasto mundo del Desarrollo Web"</p>
                    </div>
                    <div className="foot__card">
                        <a href="https://www.linkedin.com/in/3daroo/"><button className="connect-button">Conectar en LinkedIn</button></a>
                        <p className="review-date">1 de Diciembre de 2024</p>
                    </div>
                </div>
            </div>
      
      <div className="area area5r">
        <h3 className="frase__inspiradora">
          "El único modo de hacer un gran trabajo es amar lo que haces." - <strong className="autor__name">Steve Jobs</strong>
        </h3>
      </div>
      <div className="area area6r">
        <h3 className="frase__inspiradora">
          "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito." - <strong className="autor__name">Albert Schweitzer</strong>
        </h3>
      </div>
      <div className="area area7r">
        <h3 className="frase__inspiradora">
          "No se trata de ideas. Se trata de hacer que las ideas se hagan realidad." - <strong className="autor__name">Scott Belsky</strong>
        </h3>
      </div>
    </>
  );
};

export default Reseñas;