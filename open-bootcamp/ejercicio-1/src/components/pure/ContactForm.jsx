import React, { useRef } from 'react'
import { Contact } from '../../models/Contact.class';

const ContactForm = ({ onAddContact }) => {

  const nombre = useRef('');
  const surName = useRef('');
  const email = useRef('');

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(nombre.current.value, surName.current.value, email.current.value, true);
    onAddContact(newContact);
    nombre.current.value = '';
    surName.current.value = '';
    email.current.value = '';
  }

  return (
    <form onSubmit={addContact} className="contact-component">
      <h2>Añadir Contacto: </h2>
      <input ref={nombre} name="nombre" placeholder="Nombre contacto" className="form-control mb-2" />
      <input ref={surName} name="surName" placeholder="Apellido contacto" />
      <input ref={email} name="email" type="email" placeholder="Email contacto" />
      <button onClick={addContact} type="submit" className="submit-button">
        Añadir
      </button>
    </form>
  )
}

export default ContactForm
