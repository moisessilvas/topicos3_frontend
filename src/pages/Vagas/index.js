import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
      margin: 'auto',
      "& ul": {
        overflow: "overlay",
        justifyContent: 'center',
      }
    },
    gridList: {
      minWidth: 200,
      height: 'auto !important'
    },
    redBckg: {
        backgroundColor: '#e62727'
    },
    greenBckg:{
        backgroundColor: '#11e611'
    }

  }));

export default function Vagas() {
    const styles = useStyles();

    const tileData = [
        {
            id: 0,
            title: "any",
            subtitle: "any",
            isFree: false
        },
        {
            id: 1,
            title: "any2",
            subtitle: "any2",
            isFree: false
        },
        {
            id: 2,
            title: "any3",
            subtitle: "any3",
            isFree: true
        },
        {
            id: 3,
            title: "any4",
            subtitle: "any",
            isFree: false
        },
        {
            id: 4,
            title: "any5",
            subtitle: "any2",
            isFree: true
        },
        {
            id: 5,
            title: "any6",
            subtitle: "any3",
            isFree: true
        },
        {
            id: 6,
            title: "any6",
            subtitle: "any3",
            isFree: true
        },
        {
            id: 7,
            title: "any6",
            subtitle: "any3",
            isFree: false
        },
        {
            id: 8,
            title: "any6",
            subtitle: "any3",
            isFree: true
        },
    ];

    return (
        <div >
            <Card className={styles.root}>
                <GridList cols={5}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.id} className={styles.gridList}> 
                            <Card  className={((tile.isFree) ? styles.redBckg : styles.greenBckg)}> 
                                <Typography variant="h5"> Vaga {tile.id}</Typography>
                            </Card>
                        </GridListTile>
                    ))}
                </GridList>
            </Card>
        </div>
    )
}

