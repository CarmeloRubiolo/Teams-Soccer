import React from 'react'
import TeamsListContainer from './componentes/TeamsListContainer/TeamsListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeamsDetailContainer from './componentes/TeamsDetailContainer/TeamsDetailContainer';
import NavBar from './componentes/NavBar/NavBar';
import "./App.css"
import TeamsContext from './context/TeamsContext';
function App() {

  return (

    <BrowserRouter>
      <TeamsContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<TeamsListContainer />} />
          <Route path="/detalles/:id" element={<TeamsDetailContainer />} />
        </Routes>
      </TeamsContext>
    </BrowserRouter>
      
  );
}

export default App;
