// eslint-disable-next-line no-unused-vars
import React, { useEffect }  from 'react';
import FotoChica from './FotoChica';
import '../styles/Contacto.css';

const Contacto = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('#load-iframe-map').innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.895773618297!2d-55.30326122348073!3d-34.83371296968261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95754323f2f8a243%3A0x6e8e9c4c254d9e3c!2sC.%202%2C%2020200%20Playa%20Hermosa%2C%20Departamento%20de%20Maldonado!5e0!3m2!1ses!2suy!4v1694047205357!5m2!1ses!2suy"></iframe>
      `;
    }, 1000);
  }, []);
  return (
      <><div className="area area1a">
      <div className="areaone">
        <h1 className="title__grid">Contactame</h1>
      </div>
    </div><FotoChica /><div className="area area3a">
        <div className="container__info">
          <h2 className="info__title">Contactame</h2>
          <h3 className="info__destacado">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum velit ipsum sunt, ut quod minima
            maiores praesentium, eligendi error, asperiores ex! Quis temporibus quod dolorem, beatae quidem
            facilis sit mollitia.
          </h3>
        </div>
      </div><div className="area area1co">
        <h2 className="contacto__title">¿Como puedo ayudarte?</h2>
        <section className="contact__form-box">
          <form className="contact__form">
            <div className="form__container">
              <section className="form__left">
                <div className="form__group">
                  <input type="text" className="form__input" name="name" required placeholder="Nombre" />
                  <label htmlFor="name" className="form__label">Nombre</label>
                </div>

                <div className="form__group">
                  <input type="email" className="form__input" name="email" required placeholder="Email" />
                  <label htmlFor="email" className="form__label">Email</label>
                </div>

                <div className="form__group">
                  <input type="text" className="form__input" name="subject" required placeholder="Subject" />
                  <label htmlFor="subject" className="form__label">Asunto</label>
                </div>
              </section>
              <section className="form__right">
                <div className="form__group form__group--textarea">
                  <textarea name="message" className="form__input form__input--textarea" required placeholder="Mensaje"></textarea>
                  <label htmlFor="message" className="form__label">Mensaje</label>
                </div>
              </section>
            </div>
            <input type="submit" className="form__button" value="Enviar Mensaje" />
          </form>
        </section>
      </div><div className="area area2co">
        <div className="contact__map" id="load-iframe-map">
          <span className="loader"></span>
        </div>
      </div><div className="area area3co">
        <div className="contact__data">
          <img width="72" height="72" src="https://img.icons8.com/color/72/filled-message.png" alt="filled-message" />
          <h2 className="contact__subtitle">ivanchenkoel7@gmail.com</h2>
        </div>
      </div><div className="area area4co">
        <div className="contact__data">
          <img width="72" height="72" src="https://img.icons8.com/emoji/72/check-mark-button-emoji.png" alt="check-mark-button-emoji" />
          <h2 className="contact__subtitle">Desarrollador Freelance</h2>
        </div>
      </div><div className="area area5co">
        <div className="img__contacto">
          <img src="/src/assets/iv7ico.png" alt="" className="logo__about" />
        </div>
      </div><div className="area area6co">
        <div className="contact__data">
          <img width="72" height="72" src="https://img.icons8.com/color/72/whatsapp--v1.png" alt="whatsapp--v1" />
          <h2 className="contact__subtitle">+598 95604814</h2>
        </div>
      </div><div className="area area7co">
        <div className="contact__data">
          <img width="64" height="64" src="https://img.icons8.com/arcade/64/marker.png" alt="marker" />
          <h2 className="contact__subtitle">Playa Hermosa, Uruguay</h2>
        </div>
      </div></>
  );
};

export default Contacto;