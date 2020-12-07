import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Tela_Home from './pages/Home';
import Tela_Cadastro from './pages/Cadastro';

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          
          <Route path="/" exact component={Tela_Home} />
          <Route path="/cadastro" exact component={Tela_Cadastro} />
  
        </Switch>
      </BrowserRouter>
    );
  }