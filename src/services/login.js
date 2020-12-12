import React from 'react';
import axios from 'axios';
import {login} from "./Auth"
import { NavLink } from 'react-router-dom';

export default class FormLogin extends React.Component {
    state = {
      email: '',
      password: ''
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      const { email, password } = this.state;
      if (!email || !password) {
        this.setState({ error: "Preencha e-mail e senha para continuar!" });
      } else {
        try {
          const response = await axios.post(`https://topicos3-back-end.herokuapp.com/`,  {email, password} );
          login(response.data.token);
          this.props.history.push("/vagas");
          console.log(response.data)
        } catch (err) {
            console.log("Houve um problema com o login, verifique suas credenciais.")
          this.setState({
            error:
              "Houve um problema com o login, verifique suas credenciais."
          });
        }
      }
        
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="email" placeholder="email" email="name" onChange={event => this.setState({ email: event.target.value})} /><br/>
              <input type="password" placeholder="Senha" onChange={event => this.setState({ password: event.target.value})}/><br/>
            </label>
            <button type="submit">Enviar</button>
            <NavLink to = "/tela_ps_painel" ><button>GO</button></NavLink>
          </form>
        </div>
      )
    }
  }