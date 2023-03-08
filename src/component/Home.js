import React from 'react';
import Header from './Header';
import Search from './Search';
import Work from './Work';
import Control from './Control';

function Home() {
  return (
      <section id='body'>
        <Search />
        <Work />
        <Control />
      </section>
  );
}

export default Home;

