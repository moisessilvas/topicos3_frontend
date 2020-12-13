import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import { CenterPage, GridForm, MUIButton, GridButton } from './styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


class SignUpParkLot extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            cnpj: "",
            parkingSpacesTotal: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const parkingLot = {
            name: this.state.name,
            cnpj: parseInt(this.state.cnpj),
            parkingSpacesTotal: parseInt(this.state.parkingSpacesTotal),
        };

        var token = localStorage.getItem("user_token")

        console.log(token);

        axios.post(`https://topicos3-back-end.herokuapp.com/parkingLot`, parkingLot, {
            headers: {
                "x-access-token": token
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.driver);
            })

    }


    render() {

        return (
            <CenterPage>
                <GridForm onSubmit={this.handleSubmit}>
                    <Typography component="h1" variant="h5" >Cadastrar Estacionamento</Typography>
                    <TextField onChange={this.handleChange} variant="outlined" label="Nome" name="name"
                        placeholder="Insira o nome do representante de instituição:" required margin="normal" fullWidth></TextField>
                    <TextField onChange={this.handleChange} variant="outlined" label="CNPJ" name="cnpj"
                        placeholder="Insira seu CNPJ:" inputProps={{ maxLength: 13, }} required margin="normal" fullWidth></TextField>
                    <TextField onChange={this.handleChange} variant="outlined" label="Total de vagas" name="parkingSpacesTotal"
                        placeholder="Insira o total de vagas:" required margin="normal" fullWidth></TextField>
                    <GridButton>
                        <MUIButton onClick={() => this.handleSubmit} type="submit" variant="contained" color="primary">ENVIAR</MUIButton>
                    </GridButton>
                </GridForm>
            </CenterPage>
        );
    }
}
SignUpParkLot = withRouter(SignUpParkLot);
export default SignUpParkLot;
