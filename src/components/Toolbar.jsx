import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1),
    color: theme.palette.primary.contrastText
  },
  input: {
    display: 'none'
  },
  titleContainer: {
    flex: '5 0 0',
    textAlign: 'left'
  },
  buttonContainer: {
    flex: '1 0 0',
    textAlign: 'right'
  }
}));

export default function MainToolbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <div className={classes.titleContainer}>
            <Typography variant="h6" color="inherit">
              Determination Engine
            </Typography>
          </div>
          <div className={classes.buttonContainer}>
            <IconButton aria-label="More">
              <MoreVertIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Calculate
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
