import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { VagasPage, ColorText, ColorH5 } from './styles';
import { AccessButton } from './styles';


class EstacionamentoComponent extends React.Component {
    state = {
        vagas: []
    }

    componentDidMount() {
        axios.get(`https://topicos3-back-end.herokuapp.com/parkingLot`)
            .then(res => {
                const vagas = res.data;
                this.setState({ vagas });
            })
    }

    render() {
        return (
            <>
                { this.state.vagas.map(vaga => 
                <VagasPage key={vaga._id}>
                    <ColorText fontFamily="Arial">
                        <b>Nome do Estacionamento: </b>
                    </ColorText>
                        <ColorH5 color="#000000" fontFamily="Monospace">{vaga.name}</ColorH5>
                    <ColorText color="#008c2c" fontFamily="Arial">
                        <b>Vagas Totais: </b>
                    </ColorText>
                        <ColorH5 color="#000000" fontFamily="Monospace">{vaga.parkingSpacesTotal}</ColorH5>
                    <ColorText color="#8c0000" fontFamily="Arial">
                        <b>Vagas Ocupadas: </b>
                    </ColorText>
                    <ColorH5 color="#000000" fontFamily="Monospace">{vaga.parkingSpacesOccupied}</ColorH5>
                    <NavLink to={{ pathname: '/detalhes/' + vaga._id}}>
                        <AccessButton fullWidth variant="contained">Acessar</AccessButton>
                    </NavLink>
                </VagasPage>)}
            </>
        )
    }
}

EstacionamentoComponent = withRouter(EstacionamentoComponent);
export default EstacionamentoComponent;