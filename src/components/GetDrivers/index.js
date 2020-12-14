import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import DeleteDriver from './delete';
//import { NavLink } from 'react-router-dom'; 
import { CenterPage, TilePaper, ColorText, ColorH5 } from './styles';

var token = localStorage.getItem('user_token');
console.log(token);

class GetDriversComponent extends React.Component {

    state = {
        motoristas: []
    }

    componentDidMount() {
        const config = {
            headers: { Authorization: token }
        };

        console.log(config.headers)

        axios.get(`https://topicos3-back-end.herokuapp.com/driver`, {
            headers: { Authorization: token }
        })
            .then(res => {
                const motoristas = res.data;
                console.log(res.data)
                this.setState({ motoristas });
            })
    }

    render() {
        return (
            <>
                { this.state.motoristas.map(driver =>
                    <CenterPage key={driver._id}>
                        <ColorH5 fontFamily="Arial">Motorista:</ColorH5>
                        <ColorText fontFamily="Monospace">{driver.name}</ColorText>
                        <ColorText fontFamily="Monospace">{driver.email}</ColorText>
                        <DeleteDriver id={driver._id} key={driver._id}></DeleteDriver>
                    </CenterPage>)}
            </>
        )
    }

}
GetDriversComponent = withRouter(GetDriversComponent);
export default GetDriversComponent;