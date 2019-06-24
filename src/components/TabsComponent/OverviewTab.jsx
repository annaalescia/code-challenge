import React from 'react';
import HeroBanner from '../HeroBannerComponent/HeroBanner';
import RecentArticles from '../ArticleComponent/RecentArticles';
import LeftRailLinks from '../LeftRailLinks';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  contentWrapper: {
    display: 'flex'
  }
}));

export default function OverviewTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroBanner />
      <article className={classes.contentWrapper}>
        <RecentArticles />
        <LeftRailLinks />
      </article>
    </div>
  );
}
