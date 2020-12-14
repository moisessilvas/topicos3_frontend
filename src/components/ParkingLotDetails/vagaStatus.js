import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { MUIButton, GridButton, ButtonEnter, ButtonLeave} from './styles';
import moment from 'moment';

var token = localStorage.getItem('user_token');
var user_id = localStorage.getItem('user_id');


var date = moment()
      .utcOffset('-03:00')
      .format('YYYY-MM-DD hh:mm:ss a');

class UpdateParkingLotComponent extends React.Component {

    handleSubmit = async evt => {
        evt.preventDefault();

        const changeStatus = {
            isFree: !this.props.status
        };

        console.log(this.props.id)

        await axios.patch(`https://topicos3-back-end.herokuapp.com/parkingSpace/${this.props.id}`, changeStatus, { headers: { Authorization: token }})
        
        const register = {
            history: [{
                driver_id: user_id,
                entryTime: date,
                departureTime: ""
            }]
        };
        await axios.put(`https://topicos3-back-end.herokuapp.com/parkingSpace/${this.props.id}`, register, { headers: { Authorization: token }})
            .then(res => {
                const estacionamento = res.data;
                console.log(res.data)
                this.setState({ estacionamento });
                alert("Status de vaga alterado com sucesso!");
                //window.location.reload();
            })
      }

    render() {
        return (
            <GridButton>
                <form onSubmit={this.handleSubmit} >
                { this.props.status && <ButtonEnter onClick={() => this.handleSubmit} type="submit" variant="contained" color="primary">Entrar na vaga</ButtonEnter>}
                { !this.props.status && <ButtonLeave onClick={() => this.handleSubmit} type="submit" variant="contained" background="secondary" color="secondary">Sair da vaga</ButtonLeave>}
                </form>
            </GridButton>
        )
    }
}

UpdateParkingLotComponent = withRouter(UpdateParkingLotComponent);
export default UpdateParkingLotComponent;