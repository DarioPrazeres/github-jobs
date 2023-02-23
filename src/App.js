import React from 'react';
import { createContext } from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Work from './component/Work';
import Footer from './component/Footer';
import useFetch from './component/useFetch';
const DataContext = createContext();
function App() {
  const [data] = useFetch("https://serpapi.com/search.json?engine=google_jobs&q=webdev&hl=en&api_key=2c648a18f4528de54dde181efbc526f926689faa25500d1c991c5ee2e218f92d");
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
export {DataContext};
export default App;
//Key=d4a87c64ee944f8b5f4dfb052eecbcd8
//id = 6cc0640d
//const [data] = useFetch("https://remotive.com/api/remote-jobs?limit=10") //useFetch("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6cc0640d&app_key=d4a87c64ee944f8b5f4dfb052eecbcd8");