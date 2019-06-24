import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles(theme => ({
  channel: {
    display: 'flex',
    padding: '0.5rem 0rem',
    alignItems: 'center'
  },
  channelColor: classProps => ({
    width: '10px',
    height: '10px',
    backgroundColor: classProps.backgroundColor,
    flex: '1 0 0'
  }),
  channelName: {
    flex: '2 0 0',
    paddingLeft: '1rem'
  },
  channelGrossSales: {
    flex: '1 0 0',
    opacity: 0.5
  },
  channelYoyIncrease: {
    flex: '1 0 0',
    color: '#51c68b'
  },
  channelYoyDecrease: {
    flex: '1 0 0',
    color: '#e53530'
  },
  increaseIcon: {
    fontSize: '0.8rem',
    fill: '#51c68b'
  },
  decreaseIcon: {
    fontSize: '0.8rem',
    fill: '#e53530'
  }
}));

export default function HeroBanner({ channel, numberWithCommas }) {
  const { channelName, monthlyGrossSales, yoyComparison, isIncrease } = channel;
  const returnColor = () => {
    switch (channelName) {
      case 'Amazon':
        return '#e9668c';
      case 'e-Comm':
        return '#fd9332';
      case 'In-store POS':
        return '#30cace';
      case 'ERP AR':
        return '#6f6dbc';
      default:
        break;
    }
  };
  const classProps = { backgroundColor: returnColor() };
  const classes = useStyles(classProps);

  return (
    <React.Fragment>
      <li className={classes.channel}>
        <div>
          <div className={classes.channelColor} />
        </div>
        <div className={classes.channelName}>{channelName}</div>
        <div className={classes.channelGrossSales}>{`$ ${numberWithCommas(
          monthlyGrossSales
        )}`}</div>
        <div
          className={
            isIncrease ? classes.channelYoyIncrease : classes.channelYoyDecrease
          }
        >
          {isIncrease ? (
            <ArrowUpwardIcon className={classes.increaseIcon} />
          ) : (
            <ArrowDownwardIcon className={classes.decreaseIcon} />
          )}
          {yoyComparison}
        </div>
      </li>
    </React.Fragment>
  );
}
