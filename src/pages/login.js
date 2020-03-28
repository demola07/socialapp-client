import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import appIcon from '../images/icon.png';
import axios from 'axios'

//MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'


const styles = {
  form: {
    textAlign: 'center'
  },
  image: {
    margin: '20px auto 20px auto'
  },
  pageTitle: {
    margin: '10px auto 10px auto'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    marginTop: 20
  }
};



class login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      loading: true
    })
    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('/login', userData)
      .then(res => {
        console.log(res.data)
        this.setState({
          loading: false
        })
        this.props.history.push('/')
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        })
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={appIcon} alt='App Icon' className={classes.image} />
          <Typography variant='h2' className={classes.pageTitle}>
            Login
          </Typography>

          <form noValidate onSubmit={this.handleSubmit}>
            <TextField id='email' name='email' type='email' label='Email' className={classes.textField}  value={this.state.email} onChange={this.handleChange} fullWidth />

            <TextField id='password' name='password' type='password' label='Password' className={classes.textField}  value={this.state.password} onChange={this.handleChange} fullWidth />

            <Button type='submit' variant='contained' color="primary" className={classes.button}>Login</Button>


          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);
