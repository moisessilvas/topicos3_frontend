import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';

import { VagasPage } from "../Vagas/styles"


class VagasComponent extends React.Component {
    constructor() {
        super();
        this.state = {

        };
        //this.handleChange = this.handleChange.bind(this);
    }

    

    render() {
        return (
            <VagasPage>
                {/* <GridList cols={5}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.id} >
                            <Card>
                                <Typography variant="h5"> Vaga {tile.id}</Typography>
                            </Card>
                        </GridListTile>
                    ))}
                </GridList> */}
            </VagasPage>
        )
    }
}

VagasComponent = withRouter(VagasComponent);
export default VagasComponent;