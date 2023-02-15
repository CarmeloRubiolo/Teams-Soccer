import React, { useState} from "react"
import { Link } from 'react-router-dom'
import "./Teams.css"



const Teams = ({ teamsFilter}) => {

    

    return (
        <>
            
            {teamsFilter.map((team) => (
                <div key={team._id} className="mb-3 col-3 card-team ">
                <Link className="detail" to={`/detalles/${team._id}`}>
                            <h1>{team.name}</h1>
                            <img src={team.escudo}/>
                </Link>
                    </div>
            ))}
        </>
    )
}

export default Teams