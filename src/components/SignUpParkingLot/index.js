import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from "axios";

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
            <form onSubmit={this.handleSubmit} id="forms-RI-Cadastro">
                <h1 id="tittle-forms-cme">Formulário de Cadastro</h1>
                <br></br>
                <p >Nome</p>
                <input onChange={this.handleChange} name="name" placeholder="Insira o nome do representante de instituição:" required />
                <p>CNPJ</p>
                <input onChange={this.handleChange} name="cnpj" placeholder="Insira seu CNPJ:" maxLength='13' />
                <p>Total de vagas</p>
                <input onChange={this.handleChange} name="parkingSpacesTotal" placeholder="Insira o total de vagas:" required />
                <br></br>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button onClick={() => this.handleSubmit}>
                        <p>Enviar</p>
                    </button>
                </div>
            </form>
        );
    }
}
SignUpParkLot = withRouter(SignUpParkLot);
export default SignUpParkLot;
