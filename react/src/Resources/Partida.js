import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Partidas = "http://localhost:3000/Partidas";
const Partida = "http://localhost:3000/Partida";
const request = axios.create({
  withCredentials: true,
});

export default function Partidas() {
  const [regs, setPosts] = React.useState(null);
  const [, setState] = React.useState(null);

  React.useEffect(() => {
    request.get(Partidas).then((response) => {
      setPosts(response.data);
    });
  }, []);

  function deletePartida(event) {
    const deletedId = event.currentTarget.dataset.index;
    request.delete(`${Partida}/${deletedId}`).then(() => {
      regs.splice(
        regs.findIndex((el) => String(el.id) === String(deletedId)),
        1
      );
      setPosts(regs);
      setState({});
    });
  }

  if (!regs) return null;
  return (
    <div>
      <Link to={`/Partida/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Partida</button></Link>
      <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
        <thead>
          <tr>
            <th width="4%">#</th>
            <th width="20%">Name</th>
            <th width="4%" colspan="2"></th>
          </tr>
        </thead>
        <tbody>
          {regs.map((reg, i) => (
            <tr key={i}>
              <td>{reg.id}</td>
              <td>{reg.name}</td>
              <td>
                <Link to={`/Partida/${reg.id}`}><button class="btn btn-primary">Update</button></Link>

              </td>
              <td>
                <button class="btn btn-danger" data-index={reg.id} onClick={deletePartida}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}