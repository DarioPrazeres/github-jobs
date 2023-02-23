import React from 'react';
import { createContext } from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Work from './component/Work';
import Footer from './component/Footer';
import useFetch from './component/useFetch';

const DataContext = createContext();
function App() {
  const [data] = useFetch('https://remotive.com/api/remote-jobs?limit=100')
  console.log(data && data.jobs[0])
  return (
    <DataContext.Provider value={{data}}>
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

////const [data] = useFetch("https://remotive.com/api/remote-jobs?limit=10") //useFetch("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6cc0640d&app_key=d4a87c64ee944f8b5f4dfb052eecbcd8");
//useFetch("https://remotive.com/api/remote-jobs?limit=10")

