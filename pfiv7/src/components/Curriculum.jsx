// eslint-disable-next-line no-unused-vars
import React from 'react';
import FotoChica from './FotoChica';
import "../styles/curriculum.css";

const Curriculum = () => {
  return (
    <>
      <div className="area area1a">
        <div className="areaone">
          <h1 className="title__grid">Curriculum</h1>
        </div>
      </div>
      <FotoChica />
      <div className="area area3a">
        <div className="container__info">
          <h2 className="info__title">Datos Destacados</h2>
          <h3 className="info__destacado">
            En el proceso laboral de mi vida, siempre he trabajado con público. Esto me ha ayudado a desarrollar habilidades de comunicación y adaptabilidad. La comunicación con el cliente es fundamental para poder entender sus necesidades, y esto es algo en lo que tengo facilidad y años de experiencia. En cuanto a la adaptabilidad, siempre me ha interesado aprender cosas nuevas y enfrentar desafíos. La resolución de problemas es algo que siempre me ha gustado, y en el mundo de la programación es algo que se da a diario. En uno de mis trabajos, se me alentaba a seguir adelante, ya que tenía el don de tomar decisiones y resolver problemas, además de un don de liderazgo que siempre me ha caracterizado desde la época escolar. El trabajo en equipo es algo que siempre me ha complacido, ya que siempre se aprende algo nuevo de los demás. Saber escuchar a tus compañeros y siempre aportar ideas nuevas es lo que lleva al éxito de un proyecto.
          </h3>
        </div>
      </div>
      <div className="area area1c">
        <header className="resume__subheader">
          <h2 className="resume__subtitle">
            Habilidades de <span className="title__color">Diseño</span>
          </h2>
        </header>
        <div className="resume__skills">
          <article className="skills__title">
            <h4 className="skills__text">Diseño web</h4>
            <span className="skills__number">70%</span>
          </article>
          <div className="skills_progressbar">
            <div className="skills__percentage skills__percentage--p1"></div>
          </div>
          <article className="skills__title">
            <h4 className="skills__text">Diseño Logos</h4>
            <span className="skills__number">50%</span>
          </article>
          <div className="skills_progressbar">
            <div className="skills__percentage skills__percentage--p2"></div>
          </div>
          <article className="skills__title">
            <h4 className="skills__text">Diseño Banners</h4>
            <span className="skills__number">60%</span>
          </article>
          <div className="skills_progressbar">
            <div className="skills__percentage skills__percentage--p3"></div>
          </div>
        </div>
      </div>
      <div className="area area2c">
        <header className="resume__subheader">
          <h2 className="resume__subtitle">
            Habilidades de <span className="title__color">Código</span>
          </h2>
        </header>
        <div className="resume__skills">
          <article className="skills__title">
            <h4 className="skills__text">Python</h4>
            <span className="skills__number">80%</span>
          </article>
          <div className="skills_progressbar">
            <div className="skills__percentage skills__percentage--p4"></div>
          </div>
          <article className="skills__title">
            <h4 className="skills__text">HTML/CSS</h4>
            <span className="skills__number">85%</span>
          </article>
          <div className="skills_progressbar">
            <div className="skills__percentage skills__percentage--p5"></div>
          </div>
          <article className="skills__title">
            <h4 className="skills__text">React</h4>
            <span className="skills__number">60%</span>
          </article>
          <div className="skills_progressbar">
            <div className="skills__percentage skills__percentage--p6"></div>
          </div>
        </div>
      </div>
      <div className="area area3c">
        <div className="resume__knowledges">
          <h2 className="resume__subtitle3">Áreas de Conocimiento</h2>
          <ul className="knowledges__list">
            <li className="knowledges__option">Programación</li>
            <li className="knowledges__option">Desarrollo Web</li>
            <li className="knowledges__option">Diseño Web</li>
            <li className="knowledges__option">Backend</li>
          </ul>
        </div>
      </div>
      <div className="area area4c">
        <section className="linea__tiempo">
          <div className="resume__container">
            <h2 className="resume__subtitle2">Formación</h2>
            <div className="resume__timelines">
              {/* Timeline Item 1 */}
              <article className="timelines__item">
                <header className="timeline__header">
                  <h4 className="timeline__year">9/2022</h4>
                  <span className="timeline__location">Coderhouse</span>
                </header>
                <div className="timeline__divider"></div>
                <div className="timeline__description">
                  <h3 className="timeline__title">Programación en Python <i className="fa-regular fa-file certificate__icon"></i></h3>
                  <p className="timeline__text">
                    Se completó con éxito el curso en Coderhouse. La duración fue de 52 horas a lo largo de 13 semanas. Se cumplió satisfactoriamente con todos los requisitos académicos exigidos.
                  </p>
                  <div className="timeline_certificate">
                    <img src="/src/assets/coderhouse.jpg" alt="Certificado Coderhouse" className="certificate__img" />
                  </div>
                </div>
              </article>
              {/* Timeline Item 2 */}
              <article className="timelines__item">
                <header className="timeline__header">
                  <h4 className="timeline__year">11/2022</h4>
                  <span className="timeline__location">Udemy</span>
                </header>
                <div className="timeline__divider"></div>
                <div className="timeline__description">
                  <h3 className="timeline__title">Master en Python <i className="fa-regular fa-file certificate__icon"></i></h3>
                  <p className="timeline__text">
                    Se realizó y completó con éxito el curso en Udemy. La duración fue de 30.5 horas. El estudio recorrió algunas de las tecnologías más usadas como Django, Flask y Tkinter. Se cumplió satisfactoriamente con todos los requisitos académicos exigidos.
                  </p>
                  <div className="timeline_certificate">
                    <img src="/src/assets/udemypython.jpg" alt="Certificado Udemy Python" className="certificate__img" />
                  </div>
                </div>
              </article>
              {/* Timeline Item 3 */}
              <article className="timelines__item">
                <header className="timeline__header">
                  <h4 className="timeline__year">3/2023</h4>
                  <span className="timeline__location">Udemy</span>
                </header>
                <div className="timeline__divider"></div>
                <div className="timeline__description">
                  <h3 className="timeline__title">HTML y CSS desde cero <i className="fa-regular fa-file certificate__icon"></i></h3>
                  <p className="timeline__text">
                    Se completó con éxito el curso en Udemy. La duración fue de 4 horas de video. Se cumplió satisfactoriamente con todos los requisitos académicos exigidos.
                  </p>
                  <div className="timeline_certificate">
                    <img src="/src/assets/html.jpg" alt="Certificado HTML y CSS" className="certificate__img" />
                  </div>
                </div>
              </article>
              {/* Timeline Item 4 */}
              <article className="timelines__item">
                <header className="timeline__header">
                  <h4 className="timeline__year">5/2024</h4>
                  <span className="timeline__location">Udemy</span>
                </header>
                <div className="timeline__divider"></div>
                <div className="timeline__description">
                  <h3 className="timeline__title">Ecommerce with Django <i className="fa-regular fa-file certificate__icon"></i></h3>
                  <p className="timeline__text">
                    Se realizó y completó con éxito el curso en Udemy. La duración fue de 19.5 horas de video. Se cumplió satisfactoriamente con todos los requisitos académicos exigidos.
                  </p>
                  <div className="timeline_certificate">
                    <img src="/src/assets/python_ecommerce.jpg" alt="Certificado Ecommerce" className="certificate__img" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <div className="area area5c">
        <section className="linea__tiempo">
          <div className="resume__container">
            <h2 className="resume__subtitle2">Experiencia</h2>
            <div className="resume__timelines">
              <article className="timelines__item">
                <header className="timeline__header">
                  <h4 className="timeline__year">2022</h4>
                  <span className="timeline__location">Coderhouse</span>
                </header>
                <div className="timeline__divider"></div>
                <div className="timeline__description">
                  <h3 className="timeline__title">Blog entrega final</h3>
                  <p className="timeline__text">
                    Se realizó y completó con éxito el curso en Coderhouse. El proyecto final fue un blog con creación de post, comentarios y likes. Se utilizó Django como framework de desarrollo.
                  </p>
                </div>
              </article>
              <article className="timelines__item">
                <header className="timeline__header">
                  <h4 className="timeline__year">2024</h4>
                  <span className="timeline__location">Aixa Energia</span>
                </header>
                <div className="timeline__divider"></div>
                <div className="timeline__description">
                  <h3 className="timeline__title">Ecommerce, Landing page</h3>
                  <p className="timeline__text">
                    Creación de un ecommerce para la empresa Aixa Energia. Se utilizó Django como framework de desarrollo. Además, se realizó una landing page para la empresa y se implementó un sistema de gestión para la empresa. También se cambió el diseño de logo e identidad de la empresa.
                  </p>
                </div>
              </article>
              <article className="timelines__item">
                <header className="timeline__header">
                  <h4 className="timeline__year">2024</h4>
                  <span className="timeline__location">Star Blog</span>
                </header>
                <div className="timeline__divider"></div>
                <div className="timeline__description">
                  <h3 className="timeline__title">Sitio Web de Franquicia</h3>
                  <p className="timeline__text">
                    Creación de un sitio web interactivo. Se utilizó Django Rest Framework para la API. Se utilizó React para el Frontend. Se implementó un sistema para agregar, editar y eliminar películas. También se pueden registrar frases célebres y personajes.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <div className="area area6c">
        <h3 className="skill__soft-title">Herramientas y Lenguajes</h3>
      </div>
      <div className="area area7c">
        <div className="skill__cont">
          <h3 className="soft__name">CSS</h3>
          <img width="72" height="72" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
        </div>
        <div className="skill__cont2">
          <h3 className="soft__name2">HTML</h3>
          <img width="72" height="72" src="https://img.icons8.com/color/72/html-5--v1.png" alt="html-5--v1" />
        </div>
        <div className="skill__cont3">
          <h3 className="soft__name3">Python</h3>
          <img width="72" height="72" src="https://img.icons8.com/color/72/python.png" alt="python" />
        </div>
        <div className="skill__cont4">
          <h3 className="soft__name4">Django</h3>
          <img width="72" height="72" src="https://img.icons8.com/color/72/django.png" alt="django" />
        </div>
        <div className="skill__cont5">
          <h3 className="soft__name5">React</h3>
          <img width="72" height="72" src="https://img.icons8.com/color/72/react-native.png" alt="react-native" />
        </div>
        <div className="skill__cont6">
          <h3 className="soft__name6">JavaScript</h3>
          <img width="72" height="72" src="https://img.icons8.com/color/72/javascript--v1.png" alt="javascript--v1" />
        </div>
        <div className="skill__cont7">
          <h3 className="soft__name7">Git</h3>
          <img width="72" height="72" src="https://img.icons8.com/color/72/git.png" alt="git" />
        </div>
        <div className="skill__cont8">
          <h3 className="soft__name8">Github</h3>
          <img width="72" height="72" src="https://img.icons8.com/ios-filled/72/github.png" alt="github" />
        </div>
        <div className="skill__cont9">
          <h3 className="soft__name9">VSCode</h3>
          <img width="72" height="72" src="https://img.icons8.com/color/72/visual-studio-code-2019.png" alt="visual-studio-code-2019" />
        </div>
        <div className="skill__cont10">
          <h3 className="soft__name10">CorelDraw</h3>
          <img width="72" height="72" src="https://img.icons8.com/color/72/coreldraw.png" alt="coreldraw" />
        </div>
        <div className="skill__cont11">
          <h3 className="soft__name11">Canva</h3>
          <img width="72" height="72" src="https://img.icons8.com/fluency/72/canva.png" alt="canva" />
        </div>
        <div className="skill__cont12">
          <h3 className="soft__name12">G.Copilot</h3>
          <img width="72" height="72" src="/src/assets/chast2.png" alt="github_copilot_chat" />
        </div>
      </div>
    </>
  );
};

export default Curriculum;