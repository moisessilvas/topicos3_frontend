import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

export const CenterPage = styled(Card)`
    width: 35%;
    margin: auto;
    padding:15px;
    text-align: left;
    margin-top:15px;
    margin-bottom: 15px;
`;

export const TilePaper = styled(Paper)`
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 15px;
`;

export const ColorText = styled.p`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-size: 18px;
`;

export const ColorH5 = styled.h2`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
`;

export const MUIButton = styled(Button)`
`;

export const GridButton = styled(Grid)`
    display: flex;
    justify-content: space-evenly;
    //flex-direction: row;
    //align-items: center;
`;