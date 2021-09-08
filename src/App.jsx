import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageHeader from './components/Header';
import HomePage from './components/Home';
import ListaUsuarios from './components/ListaUsuarios.jsx';
import FormularioCadastro from './components/FormularioCadastro.jsx';

function App() {
  const [token, setToken] = useState(null)

  return (
    <div className="app">
      <BrowserRouter>
        <PageHeader token={token} setToken={setToken} />
        <Switch>
          <Route exact path="/">
            <HomePage token={token} />
          </Route>
          <Route path="/listaUsuarios">
            <ListaUsuarios token={token}/>
          </Route>
          <Route path="/formularioCadastro">
            <FormularioCadastro token={token} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;