import React from 'react';

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditJogador = ({
    Jogadors, handleEditJogador, editName, setEditName
}) => {
    const { id } = useParams();
    const Jogador = Jogadors.find(Jogador => (Jogador.id).toString() === id);

    useEffect(() => {
        if (Jogador) {
            setEditName(Jogador.name);
        }
    }, [Jogador, setEditName])

    return (
        <div>
            {Jogador && <>
                <h2>Edit Jogador #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Name:</label>
                    <input class="form-control" type="text" required value={editName} onChange={(e) => setEditName(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditJogador(id)}>Submit</button>
                </form>
            </>}
            {!Jogador && <>
                <p>Missing Jogador #{id}</p>
                <p>Check other <Link to='/jogador'>Jogadores</Link>!</p>
            </>}
        </div>
    )
}

export default EditJogador