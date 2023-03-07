import React, { useState} from 'react';
import { createContext } from 'react';
import useFetch from './component/useFetch';
import Home from './component/Home';
import DetailVacancy from './component/DetailVacancy';
const DataContext = createContext();

function App() {
  const [category, setCategory] = useState('Frontend');
  const [status, setStatus] = useState(false);
  const [number, setNumber] = useState(1);
  const [country, setCountry] = useState('');
  const [length, setLength] = useState(50/5);
  const [idItem, setId] = useState();
  const [data] = useFetch(`https://remotive.com/api/remote-jobs?search=${category}&limit=200`);
  console.log(data)
  return (
    <DataContext.Provider value={{data, number, setNumber, status, setStatus, length, setLength, country, setCountry, category, setCategory, idItem, setId}}>
      <Home/>
      <DetailVacancy/>
    </DataContext.Provider>
  );
}

export { DataContext };
export default App;

