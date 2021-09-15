import React, { useEffect, useState } from 'react';
import styles from '../App.module.css';

const SelectCat = () => {
  const [category, setCategory] = useState();
  const [jokes, setJokes] = useState([]);
  const [option, setOption] = useState();

  useEffect(() => {
    fetch(`https://api.icndb.com/jokes/random/${category}`)
      .then((response) => response.json())
      .then((json) => displayJokes(json))
      .catch((err) => console.log(err));
  }, [category]);

  const displayJokes = (data) => {
    setJokes(data.value);
  };
  function updateJokes(event) {
    setCategory(event.target.value);
  }

  const getContent = () => {
    return jokes.map((item, i) => {
      return (
        <p key={item.id} abacustomhtml={{ __html: `${i + 1})  ${item.joke}` }}>
          {' '}
          ${item.joke}
        </p>
      );
    });
  };

  function handleChange(event) {
    setOption(event.target.value);
    console.log('test', event);
    getContent();
  }
  return (
    <div className={styles.container}>
      <h1>Chuck Norris 10x Jokes</h1>
      <main></main>
      <section>
        <div className={styles.num_jokes}>SELECT JOKE from Chuck</div>
        <select name='option' onChange={handleChange}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>
        {getContent()}
      </section>
    </div>
  );
};

export default SelectCat;
