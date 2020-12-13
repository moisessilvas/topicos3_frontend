import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SignUpParkingLot from '../../components/SignUpParkingLot';

export default function SignUp() {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Cadastrar Estacionamento
        </Typography>
        <SignUpParkingLot />
      </div>
    </Container>
  );
}