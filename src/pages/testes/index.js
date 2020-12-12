import React from 'react';

import axios from 'axios';

export default class DriversList extends React.Component {
    state = {
        drivers: []
    }

    // componentDidMount() {
    //     axios.get(`https://topicos3-back-end.herokuapp.com/driver`)
    //         .then(res => {
    //             const drivers = res.data;
    //             this.setState({ drivers });
    //         })
    // }

    // handleChange = event => {
    //     this.setState({ name: event.target.value });
    // }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            "name": "felipe",
            "deficiency": false,
            "cpf": 15975388562,
            "email": "vamoquevamo@ss.com",
            "passowrd": "epilef",
            "cars": [
              {
                "brand": "Toyota",
                "licensePlate": "fel-1234"
              }
            ]
          };

        axios.post(`https://topicos3-back-end.herokuapp.com/driver`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    render() {
        return (
            <ul>nada

                {/* { this.state.drivers.map(driver => <li>{driver.name}</li>)} */}
            </ul>
        )
    }
}