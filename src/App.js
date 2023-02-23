import React from 'react';
import { createContext } from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Work from './component/Work';
import Footer from './component/Footer';


const DataContext = createContext();
function App() {  return (
    <DataContext.Provider value={{ }}>
      <section>
        <Header />
        <Search />
        <Work />
        <Footer />
      </section>
    </DataContext.Provider>
  );
}
function endpoint(){
  
}

export { DataContext };
export default App;

