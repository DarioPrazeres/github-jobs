import React, { useState } from 'react';
import { createContext } from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Work from './component/Work';
import Footer from './component/Footer';
import useFetch from './component/useFetch';
import Control from './component/Control';
const DataContext = createContext();
function App() {
  const [data] = useFetch('https://remotive.com/api/remote-jobs?limit=200');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState(false);
  const [number, setNumber] = useState(1);
  const [country, setCountry] = useState('');
  const [length, setLength] = useState(50/5);
  console.log(data)
  return (
    <DataContext.Provider value={{data, number, setNumber, status, setStatus, length, setLength, country, setCountry}}>
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

////const [data] = useFetch("https://remotive.com/api/remote-jobs?limit=10") //useFetch("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6cc0640d&app_key=d4a87c64ee944f8b5f4dfb052eecbcd8");
//useFetch("https://remotive.com/api/remote-jobs?limit=10")

