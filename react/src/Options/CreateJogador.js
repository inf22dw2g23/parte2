import React from 'react';

const CreateJogador = ({
    actors, handleCreateJogador, createName, setCreateName
}) => {
  return (
    <main>
      <h2>Create Jogador</h2>
      <form class="form-group" onSubmit={handleCreateJogador}>
        <label class="form-label">Name:</label>
        <input class="form-control" type="text" required value={createName} onChange={(e) => setCreateName(e.target.value)}/>

      </form>
    </main>
  );
};

export default CreateJogador;
