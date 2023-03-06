import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./component/pages/Blogs";
import App from './App';
import './index.css';
export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<App />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterApp />);
