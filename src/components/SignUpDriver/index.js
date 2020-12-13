import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from "axios";


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
            aux_brand:"",
            aux_licensePlate:"",
            cars:[{
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
    
    handleSelect_g(event){
        this.setState({ pcd: event.target.value});
    }

    handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.target.value);
        //this.state.aux_brand: this.state.cars[0].brand;
        //this.state.aux_licensePlate: this.state.cars[0].licensePlate;
        console.log(this.state.aux_brand);
        console.log(this.state.aux_licensePlate); 
        var boolDeficiency;
        if (this.state.deficiency === 'true'){
            boolDeficiency = true;
        } 
        else {
            boolDeficiency = false;
        }
        this.setState({loading: true})
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
            alert("As senhas inseridas não são iguais!");
        } else {
            axios.post(`https://topicos3-back-end.herokuapp.com/driver`, driver)
            .then(res => {
              console.log(res);
              console.log(res.data);
              console.log(res.driver);
            })
        }
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}  id="forms-RI-Cadastro">
            <h1 id="tittle-forms-cme">Formulário de Cadastro</h1>
            <br></br>
            <p id="RI-Title-Cadastro" >Nome</p>
            <input onChange={this.handleChange} name="name" placeholder="Insira o nome do representante de instituição:" id="RI-Cadastro" required />
            <p id="RI-Title-Cadastro" >E-mail</p>
            <input onChange={this.handleChange} name="email" placeholder="Insira seu e-mail:" id="RI-Cadastro" required/>
            <p id="RI-Title-Cadastro" >Senha</p>
            <input onChange={this.handleChange} name="password" placeholder="Insira uma senha:" id="RI-Cadastro" required/>
            <p id="RI-Title-Cadastro" >Confirmar Senha</p>
            <input onChange={this.handleChange} name="confirmPassword" placeholder="Confirmar senha inserida:" id="RI-Cadastro" required/>
            <p id="RI-Title-Cadastro" >CPF</p>
            <input onChange={this.handleChange} name="cpf" placeholder="Insira seu CPF:" id="RI-Cadastro" maxLength='11'/>
            <p id="RI-Title-Cadastro-Paciente" >Possui deficiência</p>
            <select onChange={this.handleSelect_g} id="RI-Solicitar-Forms" required>
                <option></option>
                <option value='true'>Sim</option>
                <option value='false'>Não</option>
            </select>
            <p id="RI-Title-Cadastro" >Carro</p>
            <input onChange={this.handleChange} name="aux_brand" placeholder="Carro:" id="RI-Cadastro" required />
            <p id="RI-Title-Cadastro" >Placa</p>
            <input onChange={this.handleChange} name="aux_licensePlate" placeholder="Placa:" id="RI-Cadastro" required/>
            <br></br>                
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={() => this.handleSubmit} id="RI-Cadastro">
                    <p>Enviar</p>
                </button>
            </div>
        </form>
        );
    }
}
SignUpDriver = withRouter(SignUpDriver);
export default SignUpDriver;
