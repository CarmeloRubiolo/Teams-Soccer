import React from "react"
import "./TeamsListContainer.css"
import TeamList from "../TeamList/TeamList"




const Home = ({teams}) => {

    return (
        <div>
          <TeamList teams={teams}/>
        </div>
    )
}

export default Home