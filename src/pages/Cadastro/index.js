import { NavLink } from 'react-router-dom';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
	},
	formControl: {
    margin: theme.spacing(1),
    minWidth: "55%"
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [pcd, setPCD] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setPCD(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastrar
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome completo"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="placa"
                name="placa"
                variant="outlined"
                required
                fullWidth
                id="placa"
                label="Placa do carro"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Possui deficiência?</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={pcd}
                    onChange={handleChange}
                >
                <MenuItem value="">
                    <em>Escolha uma das opções abaixo:</em>
                </MenuItem>
                <MenuItem value={1}>Sim</MenuItem>
                <MenuItem value={0}>Não</MenuItem>
                </Select>
            </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/" variant="body2">
                Já possui uma conta? Clique aqui e entre!
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}