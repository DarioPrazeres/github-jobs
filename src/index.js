import React, {useState, createContext} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailVacancy from './component/DetailVacancy';
import App from './App';
import './index.css';
const IdContext = createContext();
export default function RouterApp() {
  const [idElement, setIdElement] = useState();
  return (
    <IdContext.Provider value={{idElement, setIdElement}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<App />} />
          <Route path="blogs" element={<DetailVacancy />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </IdContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterApp />);

export { IdContext};
