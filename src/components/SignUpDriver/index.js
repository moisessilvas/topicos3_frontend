import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import { CenterPage, GridForm, MUIButton, GridButton } from './styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';



class SignUpDriver extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            deficiency: false,
            cpf: "",
            email: "",
            password: "",
            confirmPassword: "",
            aux_brand: "",
            aux_licensePlate: "",
            cars: [{
                brand: "",
                licensePlate: "",
            }]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect_g = this.handleSelect_g.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        console.log(evt.target.value);
    }

    handleSelect_g(event) {
        this.setState({ pcd: event.target.value });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.target.value);
        //this.state.aux_brand: this.state.cars[0].brand;
        //this.state.aux_licensePlate: this.state.cars[0].licensePlate;
        console.log(this.state.aux_brand);
        console.log(this.state.aux_licensePlate);
        var boolDeficiency;
        if (this.state.deficiency === 'true') {
            boolDeficiency = true;
        }
        else {
            boolDeficiency = false;
        }
        this.setState({ loading: true })
        const driver = {
            name: this.state.name,
            deficiency: boolDeficiency,
            cpf: parseInt(this.state.cpf),
            email: this.state.email,
            password: this.state.password,
            cars: this.state.cars = [{
                brand: this.state.aux_brand,
                licensePlate: this.state.aux_licensePlate,
            }]
        };

        console.log(driver);
        const aux = {
            confirmPassword: this.state.confirmPassword
        }

        // Validação de senha
        if (driver.password !== aux.confirmPassword) {
            console.log(driver.password);
            console.log(aux.confirmPassword);
            alert("As senhas inseridas não são iguais!");
        } else {
            axios.post(`https://topicos3-back-end.herokuapp.com/driver`, driver)
                .then(res => {
                    console.log(res);
                    this.props.history.push("/");
                    console.log(res.data);
                    console.log(res.driver);
                })
        }
    }


    render() {

        return (
            <CenterPage>
                <GridForm onSubmit={this.handleSubmit}>
                    <Typography component="h1" variant="h5" >Formulário de Cadastro </Typography>
                    <TextField onChange={this.handleChange} variant="outlined" label="Nome" name="name"
                        placeholder="Insira o nome do representante de instituição:" required margin="normal" fullWidth></TextField>
                    <TextField onChange={this.handleChange} variant="outlined" label="Email" name="email"
                        placeholder="Insira seu e-mail:" required margin="normal" fullWidth></TextField>
                    <TextField onChange={this.handleChange} variant="outlined" label="Senha" name="password"
                        placeholder="Insira uma senha:" required margin="normal" fullWidth></TextField>
                    <TextField onChange={this.handleChange} variant="outlined" label="Confirmar Senha" name="confirmPassword"
                        placeholder="Confirmar senha inserida:" required margin="normal" fullWidth></TextField>
                    <TextField onChange={this.handleChange} variant="outlined" label="CPF" name="cpf"
                        placeholder="Insira seu CPF:" inputProps={{maxLength: 11, }} required margin="normal" fullWidth></TextField>
                    <TextField onChange={this.handleChange} variant="outlined" label="Carro" name="aux_brand"
                        placeholder="Carro" required margin="normal" fullWidth></TextField>
                    <TextField onChange={this.handleChange} variant="outlined" label="Placa" name="aux_licensePlate"
                        placeholder="Placa:" required margin="normal" fullWidth></TextField>
                    <GridButton>
                        <MUIButton onClick={() => this.handleSubmit} type="submit" variant="contained" color="primary">ENVIAR</MUIButton>
                    </GridButton>
                </GridForm>
            </CenterPage>
        );
    }
}
SignUpDriver = withRouter(SignUpDriver);
export default SignUpDriver;
