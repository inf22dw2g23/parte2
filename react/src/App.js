import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Partidas from './components/Partidas';
import Jogadores from './components/Jogadores';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/partidas" component={Partidas} />
        <Route path="/jogadores" component={Jogadores} />
      </Switch>
    </Router>
  );
}

export default App;
