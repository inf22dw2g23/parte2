import React from 'react';

const CreatePartidaor = ({
    Partidaors, handleCreatePartidaor, createNamePartidaor, setCreateNamePartidaor
}) => {
  return (
    <main>
      <h2>Create Partida</h2>
      <form class="form-group" onSubmit={handleCreatePartidaor}>
        <label class="form-label">Name:</label>
        <input class="form-control" type="text" required value={createNamePartidaor} onChange={(e) => setCreateNamePartidaor(e.target.value)}/>
      </form>
    </main>
  );
};

export default CreatePartida;
