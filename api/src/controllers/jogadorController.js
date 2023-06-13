const sql = require("../utils/db");

const countJogadores = (req, res) => {
  sql.query("SELECT COUNT(id) FROM jogador", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const retrieveJogadores = (req, res) => {
  sql.query("SELECT * FROM jogador", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createJogador = (req, res) => {
  sql.query(
    "INSERT INTO jogador (name) VALUES (?)",
    [req.body.name],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveJogador = (req, res) => {
  sql.query(
    "SELECT * FROM jogador WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteJogador = (req, res) => {
  sql.query(
    "DELETE FROM jogador WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Jogador " + req.params.id + " successfully deleted");
    }
  );
};

const updateJogador = (req, res) => {
  sql.query(
    "UPDATE jogador SET name = ? WHERE id = ?",
    [req.body.name, req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const obterJogador = (req, res) => {
  const id = req.params.id;
  // Logic to retrieve jogador with the specified id from the database
  // Example: Perform a database query to fetch the jogador details

  // Return the jogador data as the response
  res.send(`Jogador ${id} details`);
};


module.exports = {
  countJogadores,
  retrieveJogadores,
  createJogador,
  retrieveJogador,
  updateJogador,
  deleteJogador,
  obterJogador,
};
