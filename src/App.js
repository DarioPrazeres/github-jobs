import React from 'react';
import { createContext } from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Work from './component/Work';
import Footer from './component/Footer';
import useFetch from './component/useFetch';


const DataContext = createContext();
function App() {
  const [data] = useFetch("https://remotive.com/api/remote-jobs?limit=10");
  return (
    <DataContext.Provider value={{ data }}>
      <section>
        <Header />
        <Search />
        <Work />
        <Footer />
      </section>
    </DataContext.Provider>
  );
}


export { DataContext };
export default App;

