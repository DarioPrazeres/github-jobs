import React from 'react';
import { createContext } from 'react';
import Header from './Header';
import Search from './Search';
import Work from './Work';
import Footer from './Footer';
import Control from './Control';

function Home() {
  return (
      <section id='body'>
        <Header />
        <Search />
        <Work />
        <Control />
        <Footer />
      </section>
  );
}

export default Home;

