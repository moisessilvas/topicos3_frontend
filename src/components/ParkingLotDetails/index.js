import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { CenterPage, ColorText, ColorH5, LoginButton, AccessButton } from './styles';
import UpdateStatus from './vagaStatus'
import Grid from '@material-ui/core/Grid';

var token = localStorage.getItem('user_token');

class DetailsEstacionamentoComponent extends React.Component {
    state = {
        estacionamento: [],
        estacionamento_id: this.props.match.params.id,
        vaga_id: ""
    }



    componentDidMount() {
        axios.get(`https://topicos3-back-end.herokuapp.com/parkingLot/parkingSpace/${this.state.estacionamento_id}`)
            .then(res => {
                const estacionamento = res.data;
                console.log(res.data)
                this.setState({ estacionamento });
            })
    }

    render() {
        return (
            <>
            <Grid container item xs={12} spacing={1}>
                { this.state.estacionamento.map(vaga =>
                <Grid key={vaga._id} container item xs={4} spacing={3}>
                    <CenterPage >
                        <ColorText fontFamily="Arial">
                            <b>Identificação da vaga </b> </ColorText>
                        <ColorH5>{vaga.numericID}</ColorH5>
                        <UpdateStatus id={vaga._id} key={vaga._id} status={vaga.isFree}></UpdateStatus>
                    </CenterPage>
                    </Grid>
                )}
            </Grid>
            </>
        )
    }

}
DetailsEstacionamentoComponent = withRouter(DetailsEstacionamentoComponent);
export default DetailsEstacionamentoComponent;