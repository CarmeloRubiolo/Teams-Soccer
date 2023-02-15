import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "./TeamsDetailContainer.css"


const TeamsDetailContainer = () => {

    const {id} = useParams()

    const [teams, setTeams] = useState({})

    const api =() => {
        fetch(`http://localhost:9000/api/teams/${id}`)
    .then((response => response.json()))
    .then(allTeams => setTeams(allTeams))
    }
    useEffect(() => {
        api()
    },[])

    return(
        <div className="card m-5">
            <Link to="/"><img className="arrow-back" src="../../imagenes/arrow.png"/></Link>
             <div className="card-header m-5 d-flex justify-content-center row align-items-center">
                <img className="img-escudo" src={teams.escudo} alt={teams.name} />
                <h1 className="detail-title text-center">{teams.name}</h1>
                <p className="text-center">{teams.ubicacion}</p>
            </div>
            <div className="card-body">
            <div class="card text-center">
            <div class="card-header bg-dark text-light">
                Datos Generales
                </div>
                <div class="card-body">
                    <div class="container">
                        <div className="row">
                            <div className="col-6 text-start mb-5">
                                <span className="subtitle">Apodo</span> <br/>{teams.apodo}
                            </div>
                            <div className="col-6 text-start mb-5">
                               <span className="subtitle">Año de fundación</span>  <br/> {teams.fundacion}
                            </div>
                            <div className="col-6 text-start mb-5">
                               <span className="subtitle">Marca de equipación</span>  <br/> {teams.fundacion}
                            </div>
                            <div className="col-6 text-start mb-5">
                               <span className="subtitle">Patrocinador</span>  <br/> {teams.fundacion}
                            </div>
                            <div className="col-6 text-start mb-5">
                               <span className="subtitle">Presidente</span>  <br/> {teams.presidente}
                            </div>
                            <div className="col-6 text-start mb-5">
                               <span className="subtitle">Equipacion</span>  <br/> <img className=" img-equipacion" src={teams.equipacion} alt={teams.name} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TeamsDetailContainer