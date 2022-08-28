import React, { useState } from 'react'
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/ContactComponent'
import ContactForm from '../pure/ContactComponent'
import ContactFormFormik from '../pure/ContactFormFormik'

const ContactContainer = () => {

  const [connected, setConnected] = useState(true);
  const contacto = new Contact('Facundo', 'Rueda', 'facundo@gmail.com', connected);

  const handleClick = () => {
    if(connected){
      setConnected(false);
    } else {
      setConnected(true);
    }
  }

  const removeContact = () => {

  }

  const addContact = () => {

  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </tbody>
        <ContactComponent contact={contacto} handleClick={handleClick} removeContact={removeContact}></ContactComponent>
      </table>
      <ContactFormFormik></ContactFormFormik>
    </div>
  )
}

export default ContactContainer
