import React, { Component } from 'react';
//import styles from './styles.css';
//import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    button: {
      margin: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });
  
class SignUp extends Component {
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
        
}
handleSubmit(event){
     event.preventDefault();
     //var self=this;
     var data= new FormData(document.getElementById('signup'));
     console.log(data);
     fetch('http://localhost:5000/api/signup/', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
            body:  JSON.stringify({
                email: document.getElementById('email').value,
                uname: document.getElementById('username').value,
                password: document.getElementById('password').value
            })
        }).then(function(response) {
            if (response.ok){
                return response.json();
              } else {
                throw new Error ('Something went wrong with your fetch');
              }
            }).then(function(body) {
                console.log(body);
            }); 
}

render(){
    const { classes } = this.props;
    return (
<main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" name="username" autoComplete="Username" autoFocus/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <Button
            onClick={this.handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
    );
}
}

export default withStyles(styles)(SignUp);
  

