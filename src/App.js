import React, { useState} from 'react';
import { createContext } from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Work from './component/Work';
import Footer from './component/Footer';
import useFetch from './component/useFetch';
import Control from './component/Control';
const DataContext = createContext();

function App() {
  const [category, setCategory] = useState('Frontend');
  const [status, setStatus] = useState(false);
  const [number, setNumber] = useState(1);
  const [country, setCountry] = useState('');
  const [length, setLength] = useState(50/5);
  const [data] = useFetch(`https://remotive.com/api/remote-jobs?search=${category}&limit=200`);
  console.log(data)
  return (
    <DataContext.Provider value={{data, number, setNumber, status, setStatus, length, setLength, country, setCountry, category, setCategory}}>
      <section>
        <Header />
        <Search />
        <Work />
        <Control />
        <Footer />
      </section>
    </DataContext.Provider>
  );
}

export { DataContext };
export default App;

