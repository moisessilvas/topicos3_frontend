import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

export const CenterPage = styled(Grid)`
    width: 60%;
    margin: auto;
    padding:15px;
    text-align: left;
    margin-top:15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
`;

export const GridForm = styled.form`
    width: 80%;
    display: inline-grid;
`;

export const GridColumn = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MUIButton = styled(Button)`
`;

export const GridButton = styled(Grid)`
    display: flex;
    justify-content: space-evenly;
    //flex-direction: row;
    //align-items: center;
`;