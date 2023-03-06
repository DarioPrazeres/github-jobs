import React, { useState} from 'react';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch from './component/useFetch';
import Home from './component/Home';
import DetailVacancy from './component/DetailVacancy';
import Layout from "./component/pages/Layout"
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
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<DetailVacancy key={length} />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </DataContext.Provider>
  );
}

export { DataContext };
export default App;

