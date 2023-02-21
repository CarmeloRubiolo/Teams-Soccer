import React, {useState, useEffect} from 'react'
import TeamsListContainer from './componentes/TeamsListContainer/TeamsListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeamsDetailContainer from './componentes/TeamsDetailContainer/TeamsDetailContainer';
import NavBar from './componentes/NavBar/NavBar';
import "./App.css"
import TeamsContext from './context/TeamsContext';
import EditTeams from './componentes/EditTeams/EditTeams';

function App() {

  const apiFetch = () => {
    fetch('https://teamssoccer-api-production.up.railway.app/api/teams')
    .then(response => response.json())
    .then(res => {
      setTeams(res);
    })
  }

  useEffect(()=> {
    apiFetch() 
  }, [])
  


  const [teams, setTeams] = useState([])
  

    
    /* const filteredProducts = filter(teams) */
      
      return (
        
        
        <BrowserRouter>
      <TeamsContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<TeamsListContainer teams={teams}/>} />
          <Route path="/detalles/:id" element={<TeamsDetailContainer />} />
          <Route path="/edit" element={<EditTeams />} />
        </Routes>
      </TeamsContext>
    </BrowserRouter>
      
      );
    }
      
export default App;
