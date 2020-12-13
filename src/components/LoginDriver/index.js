import React from 'react';
import axios from 'axios';
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
    handleSubmit = async evt => {
        evt.preventDefault();

        const driver = {
            email: this.state.email,
            password: this.state.password,
        };
        console.log(driver);
        console.log(driver.email);
        console.log(driver.password);
        if (!driver.email || !driver.password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
            console.log('Preencha e-mail e senha para continuar!')
        } else {
            try {
                const response = await axios.post(`https://topicos3-back-end.herokuapp.com/driver/login`,  driver);
                login(response.data.token);
                this.props.history.push("/estacionamento");
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
                            <LoginButton onClick={() => this.handleSubmit} type="submit" fullWidth variant="contained" color="primary">Entrar</LoginButton>
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