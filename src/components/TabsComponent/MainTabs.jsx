import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import OverviewTab from './OverviewTab';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  wrapper: {
    padding: '0rem 1.5rem'
  }
}));

export default function MainTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.wrapper} square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Overview" />
          <Tab label="Recent Quotes" />
        </Tabs>
      </Paper>
      {value === 0 && (
        <TabContainer>
          <OverviewTab />
        </TabContainer>
      )}
      {value === 1 && <TabContainer>Recent Quotes Placeholder</TabContainer>}
    </div>
  );
}
