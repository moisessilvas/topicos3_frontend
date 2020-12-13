import { NavLink } from 'react-router-dom';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./style.css";
import FormLogin from './../../components/LoginDriver';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Todos os Direitos Reservados © '}
      <Link color="inherit" href="https://material-ui.com/">
        Endereço Lógico
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  return (
    <FormLogin>

    </FormLogin>
    
    // <Grid container component="main">
    //   <CssBaseline />
    //   <Grid item xs={false} sm={4} md={7} id="capa"/>
    //   <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    //     <div>
    //       <Avatar>

    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Login
    //       </Typography>
    //       <FormLogin />
    //     </div>
    //   </Grid>
    //</Grid>
  );
}