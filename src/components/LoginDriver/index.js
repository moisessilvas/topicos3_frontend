import React from 'react';
import { login } from './../../services/Auth'
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
    LoginContainer,
    InitialBanner,
    LoginPage,
    LoginColumn,
    LoginForm,
    LoginField,
    LoginButton
} from '../LoginDriver/styles'
import Typography from '@material-ui/core/Typography';

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
            <LoginPage>
                <InitialBanner item xs={false} sm={4} md={7}></InitialBanner>
                <LoginContainer item xs={false} sm={4} md={7} item xs={12} sm={8} md={5}>
                    <LoginColumn>
                        <Typography component="h1" variant="h5" >
                            Login
                        </Typography>
                        <LoginForm onSubmit={this.handleSubmit}>
                            <LoginField  onChange={this.handleChange} variant="outlined" margin="normal" required fullWidth
                                id="email" label="Email" name="email" autoComplete="email" autoFocus />
                            <LoginField  onChange={this.handleChange} variant="outlined" margin="normal" required fullWidth
                                name="password" label="Senha" type="password" id="password" autoComplete="current-password" />
                            <LoginButton type="submit" fullWidth variant="contained" color="primary">Entrar</LoginButton>
                            <NavLink to="/Tela_RedefinirSenha" className="navlink-padrao-style"><p className="btn-fp-main">Esqueci a Senha</p></NavLink>
                        </LoginForm>
                    </LoginColumn>
                </LoginContainer>
            </LoginPage>
        );
    }
}

DriverLogin = withRouter(DriverLogin);
export default DriverLogin;