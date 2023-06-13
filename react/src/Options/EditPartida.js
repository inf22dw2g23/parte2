import React from 'react';

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditPartida = ({
    Partidas, handleEditPartida, editNamePartida, setEditNamePartida
}) => {
    const { id } = useParams();
    const Partida = Partidas.find(Partida => (Partida.id).toString() === id);

    useEffect(() => {
        if (Partida) {
            setEditNamePartida(Partida.name);
        }
    }, [Partida, setEditNamePartida])

    return (
        <div>
            {Partida && <>
                <h2>Edit Partida #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Name:</label>
                    <input class="form-control" type="text" required value={editNamePartida} onChange={(e) => setEditNamePartida(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditPartida(id)}>Submit</button>
                </form>
            </>}
            {!Partida && <>
                <p>Missing Partida #{id}</p>
                <p>Check other <Link to='/Partidas'>Partidas</Link>!</p>
            </>}
        </div>
    )
}

export default EditPartida;