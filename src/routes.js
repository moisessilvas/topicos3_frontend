import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Tela_Home from './pages/Home';
import Tela_Cadastro from './pages/Cadastro';
import Detalhes_Estacionamento from './pages/Detalhes_Estacionamento';
import Tela_Estacionamento from './pages/Estacionamento';
import Tela_Pagamento from './pages/Pagamento';
import Tela_Cadastro_Cartao from './pages/Cadastrar_Cartao';
import Tela_Testes from './pages/testes/';
import Tela_Cadastro_ParkingLot from './pages/Cadastro_Estacionamento';
import Mostrar_Motoristas from './pages/Motoristas';
//import Detalhes_Estacionamento from './pages/Detalhes_Estacionamento';

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Tela_Home} />
          <Route path="/cadastro" exact component={Tela_Cadastro} />
          <Route path="/detalhes/:id" exact component={Detalhes_Estacionamento} />
          <Route path="/estacionamento" exact component={Tela_Estacionamento} />
          <Route path="/pagamento" exact component={Tela_Pagamento} />
          <Route path="/cadastrar_cartao" exact component={Tela_Cadastro_Cartao} />
          <Route path="/teste" exact component={Tela_Testes} />
          <Route path="/cadastro_estacionamento" exact component={Tela_Cadastro_ParkingLot}/>
          <Route path="/mostrar_motoristas" exact component={Mostrar_Motoristas}/>
        </Switch>
      </BrowserRouter>
    );
  }