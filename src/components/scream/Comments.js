import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

//MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  ...theme.otherstyles
});

class Comments extends Component {
  render() {
    const { classes, comments } = this.props;
    return (
      <Grid container>
        {comments.map(comment => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt}>
              <Grid item sm={12}>
                <Grid container>
                  <Grid item sm={2}>
                    <img src={userImage} alt='comment' className={classes.commentImage} />
                  </Grid>
                  <Grid item sm={9}>
                    <div className={classes.commentData}>
                      <Typography
                        variant='h5'
                        component={Link}
                        to={`/user/${userHandle}`}
                        color='primary'
                      >
                        {userHandle}
                      </Typography>
                      <Typography variant='body2' color='textSecondary'>
                        {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                      </Typography>
                      <hr className={classes.invisibleSeparator} />
                      <Typography variant='body1'>{body}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <hr className={classes.visibleSeparator} />
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comments);
