import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';

export const AccessButton = styled.button`
  background: ${props => props.primary ? "#000000" : "#003b01"};
  color: ${props => props.primary ? "white" : "white"};
  font-size: 1em;
  margin: 0em;
  padding: 0.25em 1em;
  border: 0px solid;
  border-radius: 5px;
  width: 77%;
  margin-left: 12.5%;
  margin-right: 12.5%;
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

export const ColorTypography = withStyles({
    root: {
        color:(props) => props.color,
        fontFamily:(props) => props.fontFamily
    }
  })(Typography);

export const CenterPage = styled(Card)`
    width: 60%;
    margin: auto;
    padding:15px;
    text-align: center;
    margin-top:15px;
    margin-bottom: 15px;
`;

export const ShowVagas = styled(Paper)`
    display: flex;
    flex-wrap: wrap;
`;

export const LoginButton = styled(Button)`
    margin: theme.spacing(3, 0, 2);
`;

export const GridButton = styled(Grid)`
    display: flex;
    justify-content: space-evenly;
    //flex-direction: row;
    //align-items: center;
`;

export const ButtonEnter = styled.button`
  background: #22b538;
  color: ${props => props.primary ? "white" : "white"};
  font-size: 1em;
  margin: 0em;
  padding: 0.25em 1em;
  border: 0px solid;
  border-radius: 5px;

`;

export const ButtonLeave = styled.button`
  background: #b52222;
  color: ${props => props.primary ? "white" : "white"};
  font-size: 1em;
  margin: 0em;
  padding: 0.25em 1em;
  border: 0px solid;
  border-radius: 5px;
`;