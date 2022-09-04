import React, { useState, useEffect } from 'react'
import { getRandomJoke } from '../../Service/AxiosService.js';

const JokeContainer = () => {

  const [joke, setJoke] = useState({});
  
  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    getRandomJoke()
      .then((response) => {
        console.log(response);
        setJoke(response);
      })
      .catch((error) => {
        alert(`Ocurrio un error: ${error}`);
      })
  }

  return (
    <div>
      <h2>Chuck Norris Joke</h2>
      <div>
        {
          joke !=null ?
            (
              <div>
                <img src={joke.data.url} alt="imagen joke" />
                <p>{joke.data.value}</p>
              </div>
            )
            :
            <p>Haga click en el boton para obtener un chiste.</p>
        }
      </div>
      <button onClick={getJoke}>Get Random Joke</button>
    </div>
  )
}

export default JokeContainer
