import React from 'react';
//import './../../../pages/Profissional_Saude/Login_M/style.css';
import { login } from './../../services/Auth'
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

//import da API
import { authenticate } from './../../services/api';
let apiAuthenticate = new authenticate();

class DriverLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit = evt => {
        evt.preventDefault();

        const driver = {
            email: this.state.email,
            password: this.state.password,
        };

        if (!driver.email || !driver.password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
            console.log('Preencha e-mail e senha para continuar!')
            // } else {api.post(`/authenticate/professional`, professional)
        } else {
            apiAuthenticate.DriverLogin(driver)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    console.log(driver);
                    login(res.data.token, res.data._id);
                    localStorage.setItem('driver_id', res.data._id);
                    this.props.history.push("/vagas");
                    window.location.reload(false); // Reload da pagina para automaticamente atualizar a component
                }
                ).catch(error => {
                    alert("E-mail ou Senha incorretos!")
                })
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="email" placeholder="E-mail" required />
                <input onChange={this.handleChange} name="password" type="password" placeholder="Senha" required />
                <button onClick={() => this.handleSubmit}>Fazer Login</button>
                <NavLink to="/Tela_RedefinirSenha" className="navlink-padrao-style"><p className="btn-fp-main">Esqueci a Senha</p></NavLink>
            </form>
        );
    }
}

DriverLogin = withRouter(DriverLogin);
export default DriverLogin;