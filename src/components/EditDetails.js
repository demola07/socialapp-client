import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

//Redux
import { connect } from 'react-redux';
import { editUserDetails } from '../redux/actions/userActions';

const styles = theme => ({
  ...theme
});

class EditDetails extends Component {
  render() {
    return <div></div>;
  }
}

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { editUserDetails })(withStyles(styles)(EditDetails));
