import Teams from "../Teams/Teams"
import React, { useState } from "react";
import "./TeamList.css"


const TeamList = ({teams}) => {
    const [input, setInput] = useState("")
    const teamsFilter = teams.filter(team => team.name.toLowerCase().includes(input.toLocaleLowerCase()));
    
    const handleChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    return (
        <div className="container">
            <div className="row mt-3 text-center d-flex  justify-content-around align-ite">
                <form >
                    <input onChange={handleChange} type="text"/>
                </form>
                <Teams teamsFilter={teamsFilter} />
            </div>
        </div>
    )
}

export default TeamList