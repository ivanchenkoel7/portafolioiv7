// eslint-disable-next-line no-unused-vars
import React from 'react'
import FotoChica from './FotoChica'
import '../styles/Portafolio.css'
import '../styles/portafolio_responsive.css'
import { Link } from 'react-router-dom';

const Portafolio = () => {
  return (
    <>
    <div className="area area1a">
      <div className="areaone">
        <h1 className="title__grid">Portafolio</h1>
      </div>
    </div>
    <FotoChica />
    <div className="area area3a-portfolio">
        <div className="container__info">
          <h2 className="info__title">Proyectos Realizados</h2>
          <h3 className="info__destacado">
          Estos son algunos de los proyectos que he realizado.
          En el transcurso de estos años he adquirido habilidades en el desarrollo de páginas web.
          En cada uno de ellos he aprendido nuevas tecnologías y he mejorado mis habilidades.
          Siempre en la búsqueda de la máxima excelencia.
          Espero que los proyectos a futuro sean cada vez más desafiantes para seguir creciendo
          y adquiriendo más conocimientos que hagan de mí un mejor profesional.
          Actualmente son solamente cuatro, pero en el futuro espero que sea un número mucho mayor.
          Con el paso del tiempo iré aprendiendo nuevas tecnologías que me permitan realizar proyectos más complejos,
          y a su vez me den herramientas que me permitan tomar decisiones más acertadas en el desarrollo de los mismos.
          Espero que disfrutes de mi portafolio.
          </h3>
        </div>
      </div>
      <div className="area area1p">
        <div className="container__cards">
          <div className="container__tarjeta">
            <Link className="tarjeta__link" 
                to="/video/1"
                target="_blank" 
                rel="noopener noreferrer" >
              <figure className="tarjeta__figure">
                <div className="figure__background"></div>
                <figcaption className="figure__atras">
                <details className="starblog">
                <summary className="starblog__summary">Aixa Energia</summary>
                  <div className="card__cartel">
                      <h4 className="cartel__description">
                      Se creo una Landinpage para la empresa Aixa Energía. Tenemos la informacion sobre a que se dedica la empresa...Los servicios que ofrece y tambien datos importantes sobre energia solar.
                      </h4>
                      <strong className="cartel__aclaracion">Página en espera de aprobación</strong>
                  </div>
              </details>
                  <div className="proyect__tech">
                    <div className="skills__list">
                      <img width="48" height="48"
                        src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png"
                        alt="Django" />
                      <strong className="habilidades__dato">Django</strong>
                    </div>
                    <div className="skills__list">
                      <img width="48" height="48"
                        src="https://img.icons8.com/color/48/html-5--v1.png" alt="HTML5" />
                      <strong className="habilidades__dato">HTML</strong>
                    </div>
                    <div className="skills__list">
                      <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png"
                        alt="CSS3" />
                      <strong className="habilidades__dato">CSS</strong>
                    </div>
                  </div>

                  <div className="card__date">
                    <p>Landing Page</p>
                    <h5>2024</h5>
                  </div>

                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </div>
      <div className="area area2p">
        <div className="container__tarjeta">
          <Link className="tarjeta__link" 
          to="/video/2"
          target="_blank" 
          rel="noopener noreferrer">
            <figure className="tarjeta__figure">
              <div className="figure__background2"></div>
              <figcaption className="figure__atras">
              <details className="starblog">
                <summary className="starblog__summary">Aixa Energia</summary>
                  <div className="card__cartel">
                      <h4 className="cartel__description">
                      Se realizó una página de eCommerce para la empresa Aixa Energía. En ella se pueden ver los productos que se venden, con su respectiva descripción y precio. Se pueden realizar compras y ver el historial de compras realizadas. Se pueden añadir productos al carrito y realizar el pago mediante PayPal. También se pueden ver las órdenes realizadas. Además, se puede acceder al perfil de usuario y modificar la contraseña.
                      </h4>
                      <strong className="cartel__aclaracion">Página en espera de aprobación</strong>
                  </div>
              </details>
                <div className="proyect__tech">
                  <div className="skills__list">
                    <img width="48" height="48"
                      src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png"
                      alt="" />
                    <strong className="habilidades__dato">Django</strong>
                  </div>

                  <div className="skills__list">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png"
                      alt="html-5--v1" />
                    <strong className="habilidades__dato">Html</strong>
                  </div>

                  <div className="skills__list">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png"
                      alt="css3" />
                    <strong className="habilidades__dato">Css</strong>
                  </div>
                </div>
                <div className="card__date">
                  <p>Ecommerce</p>
                  <h5>2024</h5>
                </div>
              </figcaption>
            </figure>
          </Link>
        </div>
      </div><div className="area area3p">
        <div className="container__tarjeta">
          <Link className="tarjeta__link" 
                to="/video/3"
                target="_blank" 
                rel="noopener noreferrer">
            <figure className="tarjeta__figure">
              <div className="figure__background3"></div>
              <figcaption className="figure__atras">
              <details className="starblog">
                <summary className="starblog__summary">Aixa Energia</summary>
                  <div className="card__cartel">
                      <h4 className="cartel__description">
                      Para un mejor control dentro de la empresa, se creó un sistema de gestión que maneja productos, contabilidad, proveedores, ventas, compras, etc. También gestiona las órdenes que provienen del eCommerce mediante notificaciones, y con esto se controlan las ventas y se despachan los productos. Un apartado es la creación de etiquetas personalizadas para la rotulación del envío de mercancía.
                      </h4>
                      <strong className="cartel__aclaracion">Página en espera de aprobación</strong>
                  </div>
              </details>
                <div className="proyect__tech">
                  <div className="skills__list">
                    <img width="48" height="48"
                      src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png"
                      alt="" />
                    <strong className="habilidades__dato">Django</strong>
                  </div>

                  <div className="skills__list">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png"
                      alt="html-5--v1" />
                    <strong className="habilidades__dato">Html</strong>
                  </div>

                  <div className="skills__list">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png"
                      alt="css3" />
                    <strong className="habilidades__dato">Css</strong>
                  </div>
                </div>
                <div className="card__date">
                  <p>Sistema gestion</p>
                  <h5>2024</h5>
                </div>
              </figcaption>
            </figure>
          </Link>
        </div>

      </div><div className="area area4p">
        <div className="container__tarjeta">
          <a className="tarjeta__link" 
              href="https://starbloginfo.netlify.app/"
              target="_blank" 
              rel="noopener noreferrer">
            <figure className="tarjeta__figure">
              <div className="figure__background4"></div>
              <figcaption className="figure__atras">
              <details className="starblog">
                <summary className="starblog__summary">Starblog</summary>
                  <div className="card__cartel">
                      <h4 className="cartel__description">
                      Esta página fue realizada en un curso de React. En él se creó una página tipo blog de películas para interactuar con el CRUD de las mismas.
                      El almacenamiento se llevaba a cabo por medio de LocalStorage.
                      Para ir más allá en el proyecto, decidí crear una API en Django para almacenar los datos.
                      Se cumplieron todos los requisitos del curso y se añadieron funcionalidades extra. También está adaptado en su totalidad a dispositivos móviles.
                      </h4>
                      <strong className="cartel__aclaracion">Página en línea actualmente</strong>
                  </div>
              </details>
                <div className="proyect__tech">
                  <div className="skills__list2">
                    <img width="48" height="48"
                      src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png"
                      alt="" />
                    <strong className="habilidades__dato">DRF</strong>
                  </div>

                  <div className="skills__list2">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png"
                      alt="css3" />
                    <strong className="habilidades__dato">Css</strong>
                  </div>

                  <div className="skills__list2">
                    <img width="24" height="24"
                      src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
                      alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo" />
                    <strong className="habilidades__dato">React</strong>
                  </div>
                </div>
                <div className="card__date">
                  <p>Blog</p>
                  <h5>2024</h5>
                </div>
              </figcaption>
            </figure>
          </a>
        </div>        
      </div>
      
      <div className="area area5p">
      <div className="container__tarjeta">
          <a className="tarjeta__link" 
              href="#"
            >
            <figure className="tarjeta__figure">
              <div className="figure__background5"></div>
              <figcaption className="figure__atras">
              <details className="starblog">
                <summary className="starblog__summary">Logo Aixa</summary>
                  <div className="card__carteltwo">
                      <h4 className="cartel__description">
                      Se realizó un refresh del logo, así como de la marca personal de la empresa. Mantuve la esencia de la marca, pero le di un toque más moderno y actual. Se respetó la paleta de colores original y se le dio un toque más fresco y actual.
                      </h4>
                      <strong className="cartel__aclaracion">Pendiente de aprobación</strong>
                  </div>
              </details>
                <div className="proyect__tech">
                  <div className="skills__list2">
                  <img width="48" height="48" src="https://img.icons8.com/fluency/48/canva.png" alt="canva"/>
                    <strong className="habilidades__dato">Canva</strong>
                  </div>  
                </div>
                <div className="card__date">
                  <p>Refresh</p>
                  <h5>2024</h5>
                </div>
              </figcaption>
            </figure>
          </a>
        </div>         
      </div>

      <div className="area area6p">
      <div className="container__tarjeta">
          <a className="tarjeta__link" 
              href="#"
          >
            <figure className="tarjeta__figure">
              <div className="figure__background6"></div>
              <figcaption className="figure__atras">
              <details className="starblog">
                <summary className="starblog__summary">Logo IV7</summary>
                  <div className="card__carteltwo">
                      <h4 className="cartel__description">
                        Creacion del logo para mi marca personal... el cual utilizare en mis proyectos futuros y ayudara a identificarme.
                      </h4>
                      <strong className="cartel__aclaracion">Marca Establecida</strong>
                  </div>
              </details>
                <div className="proyect__tech">
                  <div className="skills__list2">
                  <img width="48" height="48" src="https://img.icons8.com/fluency/48/canva.png" alt="canva"/>
                    <strong className="habilidades__dato">Canva</strong>
                  </div>  
                </div>
                <div className="card__date">
                  <p>Marca Personal</p>
                  <h5>2024</h5>
                </div>
              </figcaption>
            </figure>
          </a>
        </div>         
      </div>
      
      </>
  )
}

export default Portafolio
