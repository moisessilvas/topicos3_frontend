import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';

var token = localStorage.getItem('user_token');
console.log(token);

class GetDriversComponent extends React.Component {

    state = {
        motoristas: []
    }

    componentDidMount() {
        const config = {
            headers: { Authorization: "Bearer" + token }
        };

        console.log(config.headers)

        axios.get(`https://topicos3-back-end.herokuapp.com/driver`, config)
            .then(res => {
                const motoristas = res.data;
                console.log(res.data)
                this.setState({ motoristas });
            })
    }

    render() {
        return (
            <ul>
            { this.state.motoristas.map(person => <li>{person.name}</li>)}
          </ul>
        )}

}
GetDriversComponent = withRouter(GetDriversComponent);
export default GetDriversComponent;