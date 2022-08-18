import React, { useEffect, useState } from 'react'

const ClockFuncional = () => {

  const climaInicial = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
  };

  const [clima, setClima] = useState(climaInicial);

  useEffect(() => {
    const intervalAge = setInterval(() => {
      actualiceUser();
    }, 1000);
    return () => {
      clearInterval(intervalAge);
    };
  });

  const actualiceUser = () => {
    return setClima({
      fecha: clima.fecha,
      edad: clima.edad + 1,
      nombre: clima.nombre,
      apellidos: clima.apellidos,
    });
  };

  return (
    <div>
      <h2>
        Hora Actual:
        {clima.fecha}
      </h2>
      <h3>{clima.nombre} {clima.apellidos}</h3>
      <h1>Edad: {clima.edad}</h1>
    </div>
  )
}

export default ClockFuncional
