import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';


export const LoginPage = styled(Grid)`
    height: 100vh;
    display: flex;
`;

export const LoginContainer = styled(Grid)`
    height: 100vh;
    background-color: #fefefe;
    display: flex;
`;

export const LoginColumn = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginForm = styled.form`
    width: 80%;
`;

export const LoginField = styled(TextField)`
    width: 100%;
`;

export const LoginButton = styled(Button)`
    margin: theme.spacing(3, 0, 2);
`;

export const InitialBanner = styled(Grid)`
    background-image: url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;