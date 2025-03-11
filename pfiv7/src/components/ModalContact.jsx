/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/Contacto.css';
import '../styles/Contacto-responsive.css';

const ModalContact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    if (!recaptchaToken) {
      setStatus('Por favor, completa el reCAPTCHA');
      return;
    }

    try {
      const response = await fetch('http://ivanchenkoel7.dev/api/contacto/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, recaptchaToken })
      });

      if (response.ok) {
        setStatus('Mensaje enviado con éxito');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setRecaptchaToken('');
      } else {
        setStatus('Error al enviar el mensaje');
      }

    } catch (error) {
      setStatus('Error al enviar el mensaje');
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        
        <h2 className="contacto__title">¿Cómo puedo ayudarte?</h2>
        <section className="contact__form-box">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__container">
              <section className="form__left">
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    name="name"
                    required
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="form__label">
                    Nombre
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    name="subject"
                    required
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label htmlFor="subject" className="form__label">
                    Asunto
                  </label>
                </div>
              </section>
              <section className="form__right">
                <div className="form__group form__group--textarea">
                  <textarea
                    name="message"
                    className="form__input form__input--textarea"
                    required
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message" className="form__label">
                    Mensaje
                  </label>
                </div>
              </section>
            </div>
            <ReCAPTCHA
              sitekey="6LfE0OwqAAAAAJc0nM6JgyVUtlfm8-L4vTnlcjzc"
              onChange={handleRecaptchaChange}
            />
            <input
              type="submit"
              className="form__button modal__button"
              value="Enviar Mensaje"
            />
          </form>
          {status && <p className="status__message">{status}</p>}
        </section>
      </div>
    </div>
  );
};

ModalContact.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalContact;