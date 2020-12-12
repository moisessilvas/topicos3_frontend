//import { NavLink } from 'react-router-dom';
import React from 'react';
import "./style.css";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
	},
	formControl: {
    margin: theme.spacing(1),
    minWidth: "95%"
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
        <Typography component="h1" variant="h5">
          Cadastrar Forma de Pagamento
        </Typography>
        <form className={classes.form} noValidate>
        <Grid item xs={12}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Forma de Pagamento</InputLabel>
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
                <MenuItem value={1}>Débito</MenuItem>
                <MenuItem value={0}>Crédito</MenuItem>
                </Select>
            </FormControl>
            <br></br>
            </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="cardNumber"
                name="cardNumber"
                variant="outlined"
                required
                fullWidth
                id="cardNumber"
                label="Número do Cartão"
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cvv"
                label="CVV"
                name="cvv"
                autoComplete="cvv"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="valid"
                label="Válido até"
                id="valid"
                autoComplete="valid"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome impresso no cartão"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar Cartão
          </Button>
          </Grid>
          <Grid item xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cancelar
          </Button>
          </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}