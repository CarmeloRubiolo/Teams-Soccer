import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "./TeamsDetailContainer.css"


const TeamsDetailContainer = () => {

    const {id} = useParams()

    const [teams, setTeams] = useState({})

    const api =() => {
        fetch(`https://teamssoccer-api-production.up.railway.app/api/teams/${id}`)
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
            <div className="card text-center">
            <div className="card-header bg-dark text-light">
                Datos Generales
                </div>
                <div className="card-body position-relative">
                    <Link to="/edit">
                        <div className="edit-container">
                            <img className="img-edit" src="../../imagenes/editar.png"/>
                        </div>
                    </Link>
                    <div className="container">
                        <div className="row">
                            <div className="subtitle-container col text-center mb-5">
                                <span className="subtitle">Apodo</span> <br/><p className="detail-data text-center">{teams.apodo}</p>
                            </div>
                            <div className="col text-center mb-5">
                               <span className="subtitle">Títulos</span>  <br/> <p className="detail-data text-center">{teams.titulos}</p>
                            </div>
                            <div className="col-12 text-center mb-5">
                               <span className="subtitle">Año de fundación</span>  <br/> <p className="detail-data text-center">{teams.fundacion}</p>
                            </div>
                            <div className="col text-center mb-5">
                               <span className="subtitle">Socios</span>  <br/> <p className="detail-data text-center">{teams.socios}</p>
                            </div>
                            <div className="col text-center mb-5">
                               <span className="subtitle">Presidente</span>  <br/> <p className="detail-data text-center">{teams.presidente}</p>
                            </div>
                            <div className="col-12 text-center mb-5">
                               <span className="subtitle">Equipacion</span>  <br/> <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2"><img className="img-equipacion" src={teams.equipacion} alt={teams.name} /></div>
                               <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1>Equipación</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img className="imgEquipacion-modal" src={teams.equipacion} alt={teams.name} />
                                    </div>
                                    {/* <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 text-center mb-5">
                               <span className="subtitle">Estadio</span>  <br/> <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><img className=" img-estadio mt-2" src={teams.imgEstadio} alt={teams.name}></img></div>
                               <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1>{teams.estadio}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img className="imgEstadio-modal" src={teams.imgEstadio} alt={teams.name} />
                                    </div>
                                    {/* <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div> */}
                                    </div>
                                </div>
                                </div>
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