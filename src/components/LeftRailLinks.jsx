import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '3rem',
    flex: '1 0 0'
  },
  title: {
    textAlign: 'left'
  },
  linkList: {
    listStyle: 'none',
    padding: '2rem 1.5rem',
    textAlign: 'left',
    backgroundColor: '#ebeef0',
    marginTop: '2rem'
  },
  linkListItem: {
    padding: '0.5rem 0rem'
  },
  link: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: '1.5rem'
  }
}));

export default function LeftRailLinks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        I want to...
      </Typography>
      <Router>
        <ul className={classes.linkList}>
          <li className={classes.linkListItem}>
            <Link className={classes.link} component={RouterLink} to="/test">
              Add invoices
            </Link>
          </li>
          <li className={classes.linkListItem}>
            <Link className={classes.link} component={RouterLink} to="/test">
              Add a product
            </Link>
          </li>
          <li className={classes.linkListItem}>
            <Link component={RouterLink} className={classes.link} to="/test">
              Add customers
            </Link>
          </li>
          <li className={classes.linkListItem}>
            <Link className={classes.link} component={RouterLink} to="/test">
              Manage an aquisition
            </Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}
