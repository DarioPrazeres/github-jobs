import React from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Work from './component/Work';

function App() {
  return (
    <section>
      <Header/>
      <Search/>
      <Work/>
    </section>
  );
}

export default App;
//Key=d4a87c64ee944f8b5f4dfb052eecbcd8
//id = 6cc0640d
//const [data] = useFetch("https://remotive.com/api/remote-jobs?limit=10") //useFetch("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=6cc0640d&app_key=d4a87c64ee944f8b5f4dfb052eecbcd8");