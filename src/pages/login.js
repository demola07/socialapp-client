import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import appIcon from '../images/icon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

//MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  ...theme.otherstyles
});

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

      errors: {}
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={appIcon} alt='App Icon' className={classes.image} />
          <Typography variant='h2' className={classes.pageTitle}>
            Login
          </Typography>

          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id='email'
              name='email'
              type='email'
              label='Email'
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />

            <TextField
              id='password'
              name='password'
              type='password'
              label='Password'
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />

            {errors.general && (
              <Typography variant='body2' className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && <CircularProgress size={30} className={classes.progress} />}
            </Button>
            <br />
            <small>
              {' '}
              Don't have an account? Sign Up <Link to='/signup'>here</Link>
            </small>
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
