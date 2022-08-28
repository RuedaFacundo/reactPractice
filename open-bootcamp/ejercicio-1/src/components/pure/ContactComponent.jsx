import React from 'react'
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';

const ContactComponent = ({ contact, handleClick, removeContact }) => {
  return (
    <tr>
      <th>{ contact.name }</th>
      <th>{ contact.surName }</th>
      <th>{ contact.email }</th>
      <th>{ contact.connected ? 'Contacto En Línea' : 'Contacto No Disponible' }</th>
      <th><button onClick={handleClick}>Cambiar estado</button></th>
      <th><button onClick={removeContact}>Eliminar contacto</button></th>
    </tr>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;