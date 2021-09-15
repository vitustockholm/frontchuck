import React, { useEffect, useState } from 'react';
import styles from '../App.module.css';

const Jokes = () => {
  const [amountJokes, setAmountJokes] = useState(10);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(`https://api.icndb.com/jokes/random/${amountJokes}`)
      .then((response) => response.json())
      .then((json) => displayJokes(json))
      .catch((err) => console.log(err));
  }, [amountJokes]);

  const displayJokes = (data) => {
    setJokes(data.value);
  };

  return (
    <div className={styles.container}>
      <h1>Chuck Norris 10x Jokes</h1>
      <main>
        {jokes.map((item, i) => {
          return <p key={item.id}>{item.joke}</p>;
        })}
      </main>
    </div>
  );
};

export default Jokes;
