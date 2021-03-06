
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import PersistentDrawerLeft from '../../components/PersistentDrawer/PersistentDrawer';
import AdminWineEdit from '../../components/AdminWineEdit/AdminWineEdit';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const AdminPage = (props) => {
  const greeting = (
    <Fragment>
      Hello, <strong>{props.user.firstName}</strong>
    </Fragment>
  );

  // const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <PersistentDrawerLeft greeting={greeting} logout={props.logout} />
      <br></br>
      {/* <AppBar position="static" className={classes.appBar}>
      <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Menu
          </Typography>
          <Button color="inherit">Save</Button>
        </Toolbar>
      </AppBar> */}
      <main>
      <br></br>
      <br></br>
      <br></br>
        <AdminWineEdit />
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}

AdminPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminPage);