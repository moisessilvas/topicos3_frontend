import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SignUpDriver from './../../components/SignUpDriver';

export default function SignUp() {

  return (
    <SignUpDriver />
    // <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   <div>
    //     <Avatar>
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Cadastrar
    //     </Typography>
    //     <SignUpDriver />
    //   </div>
    // </Container>
  );
}