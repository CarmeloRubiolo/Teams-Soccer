import React, { useState, useEffect } from "react"
import "./TeamsListContainer.css"
import TeamList from "../TeamList/TeamList"



const Home = () => {

    const [teams, setTeams] = useState([])

    const api = () => {
        fetch('http://localhost:9000/api/teams/')
        .then(response => response.json())
        .then(allTeams => setTeams(allTeams))
      }

      useEffect(()=> {
        api()
      }, [])

    return (
        <div>
          <TeamList teams={teams}/>
        </div>
    )
}

export default Home