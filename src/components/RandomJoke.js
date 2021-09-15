import React, { useState, useEffect } from 'react';

const RandomJokes = () => {
  useEffect(() => {
    getData();
  }, []);

  const [quote, setQuote] = useState();

  const getData = async () => {
    try {
      let chuckJokes = await fetch(`https://api.chucknorris.io/jokes/random`);
      let data = await chuckJokes.json();
      setQuote(data.value);
    } catch (error) {
      console.warn(`We have an error here: ${error}`);
    }
  };

  return (
    <div className='container'>
      <button className='getjoke' onClick={getData}>
        Get Joke
      </button>
      <p className='quote'>{quote}</p>
    </div>
  );
};

export default RandomJokes;
