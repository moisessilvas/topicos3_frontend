import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { CenterPage, ColorText, ColorH5, LoginButton, AccessButton } from './styles';

var token = localStorage.getItem('user_token');

class DetailsEstacionamentoComponent extends React.Component {


    state = {
        estacionamento: []
    }

    componentDidMount() {
        axios.get(`https://topicos3-back-end.herokuapp.com/parkingLot/parkingSpace/5fd14c306465f031149eed06`)
            .then(res => {
                const estacionamento = res.data;
                console.log(res.data)
                this.setState({ estacionamento });
            })
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = async evt => {
        evt.preventDefault();

        await axios.put(`https://topicos3-back-end.herokuapp.com/parkingSpace/5fd14c326465f031149eed0b`)
            .then(res => {
                const estacionamento = res.data;
                console.log(res.data)
                this.setState({ estacionamento });
                alert("Usuário autenticado com sucesso!");
                this.props.history.push("/Tela_");
            }, {
                headers: {
                    "x-access-token": token
                }
              })
      }


    render() {
        return (
            <>
                { this.state.estacionamento.map(vaga =>
                    <CenterPage key={vaga._id}>
                        <ColorText fontFamily="Arial">
                            <b>Identificação da vaga: </b>
                            <ColorH5>{vaga.numericID}</ColorH5>
                        </ColorText>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                          <AccessButton onClick={() => this.handleSubmit}>Aceitar</AccessButton>
                        </div>
                    </form>
                    </CenterPage>
                )}

            </>
        )
    }

}
DetailsEstacionamentoComponent = withRouter(DetailsEstacionamentoComponent);
export default DetailsEstacionamentoComponent;