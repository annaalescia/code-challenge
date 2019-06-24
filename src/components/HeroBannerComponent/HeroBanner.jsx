import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { salesDataAPI } from '../../mockApi/data';
import ChannelListItem from './ChannelListItem';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    padding: '3rem',
    color: theme.palette.secondary.contrastText
  },
  title: {
    textAlign: 'left'
  },
  salesDataContainer: {
    display: 'flex',
    textAlign: 'left',
    paddingTop: '1rem'
  },
  overallData: {
    flex: '1 0 0'
  },
  channelData: {
    flex: '3 0 0'
  },
  secondaryData: {
    opacity: 0.5,
    fontWeight: 300,
    paddingTop: '0.5rem'
  },
  channelsList: {
    listStyle: 'none',
    paddingLeft: '0rem',
    margin: '0rem',
    width: '50%'
  },
  channelTitle: {
    display: 'inline-block'
  },
  addChannelButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '0rem',
    fontSize: '0.8rem',
    marginLeft: '1rem'
  }
}));

export default function HeroBanner() {
  const classes = useStyles();
  const [salesData, setSalesData] = useState({});

  useEffect(() => {
    setSalesData(salesDataAPI);
  }, []);

  const numberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Sales this month
      </Typography>
      <div className={classes.salesDataContainer}>
        <div className={classes.overallData}>
          <Typography variant="h5">
            {salesData.grossSales &&
              `$ ${numberWithCommas(salesData.grossSales)} gross`}
          </Typography>
          <Typography variant="h6" className={classes.secondaryData}>
            {salesData.taxDue && `$ ${numberWithCommas(salesData.taxDue)} tax`}
          </Typography>
          <Typography variant="h6" className={classes.secondaryData}>
            {salesData.quantityOfTransactions &&
              `${numberWithCommas(
                salesData.quantityOfTransactions
              )} calculations`}
          </Typography>
        </div>
        <div className={classes.channelData}>
          <Typography variant="h5" className={classes.channelTitle}>
            {salesData.salesChannels &&
              `${salesData.salesChannels.length} channels`}
            <IconButton aria-label="Add" className={classes.addChannelButton}>
              <AddIcon />
            </IconButton>
          </Typography>

          <ul className={classes.channelsList}>
            {salesData.salesChannels &&
              salesData.salesChannels.map(channel => (
                <ChannelListItem
                  channel={channel}
                  key={channel}
                  numberWithCommas={numberWithCommas}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
