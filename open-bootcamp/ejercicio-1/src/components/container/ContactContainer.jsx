import React, { useState } from 'react'
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/ContactComponent'

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

  return (
    <div>
      <div>
        <ContactComponent contact={contacto}></ContactComponent>
      </div>
      <div>
        <button onClick={handleClick}>Cambiar estado</button>
      </div>
    </div>
  )
}

export default ContactContainer
