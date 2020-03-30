import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Scream from '../components/Scream';
import Profile from '../components/Profile';

//Redux
import { connect } from 'react-redux';
import { getScrems } from '../redux/actions/dataActions';

class home extends Component {
  componentDidMount() {
    this.props.getScrems();
  }

  render() {
    const { screams, loading } = this.props.data;

    let recentScreamsMarkup = !loading ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>

        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  data: PropTypes.object.isRequired,
  getScrems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getScrems })(home);
