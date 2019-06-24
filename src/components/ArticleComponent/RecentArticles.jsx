import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArticleListItem from './ArticleListItem';
import { articlesDataAPI } from '../../mockApi/data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '3rem',
    color: theme.palette.text.primary,
    flex: '2 0 0'
  },
  articleList: {
    listStyle: 'none',
    paddingLeft: '0rem',
    paddingTop: '1rem'
  },
  title: {
    textAlign: 'left'
  }
}));

export default function RecentArticles() {
  const classes = useStyles();
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    //mock api get
    setInterval(() => setArticlesData(articlesDataAPI), 500);
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Recent Articles
      </Typography>
      <ul className={classes.articleList}>
        {articlesData.length > 0 &&
          articlesData.map((article, i) => (
            <ArticleListItem article={article} key={i} />
          ))}
      </ul>
    </div>
  );
}
