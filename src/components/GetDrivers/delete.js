import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { MUIButton, GridButton } from './styles';

var token = localStorage.getItem('user_token');

class DeleteDriversComponent extends React.Component {

    handleSubmit = evt => {
        evt.preventDefault();
        console.log('funfa')

        axios.delete(`https://topicos3-back-end.herokuapp.com/driver/${this.props.id}`, { headers: { Authorization: token } })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Usuário deletado com sucesso!");
                //this.props.history.push("/mostrar_motoristas");
                window.location.reload();
            })

    }

    render() {
        return (
            <GridButton>
                <form onSubmit={this.handleSubmit} >
                <MUIButton onClick={() => this.handleSubmit} type="submit" variant="contained" color="primary">Apagar</MUIButton>
                </form>
            </GridButton>
        )
    }
}

DeleteDriversComponent = withRouter(DeleteDriversComponent);
export default DeleteDriversComponent;