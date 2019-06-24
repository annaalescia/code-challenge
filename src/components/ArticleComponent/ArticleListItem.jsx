import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '3rem',
    color: theme.palette.text.primary
  },
  articleListItem: {
    display: 'flex',
    textAlign: 'left',
    padding: '0.5rem 0rem'
  },
  articleInfo: {
    paddingLeft: '1rem',
    color: theme.palette.text.secondary
  },
  articleTitle: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  articleSummary: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical'
  }
}));

export default function ArticleListItem({ article }) {
  const { imageURL, articleLink, title, summary } = article;
  const classes = useStyles();

  return (
    <React.Fragment>
      <li className={classes.articleListItem}>
        <a
          href={articleLink}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.articleImageContainer}
        >
          <img src={imageURL} alt={title} />
        </a>
        <div className={classes.articleInfo}>
          <a
            href={articleLink}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.articleTitle}
          >
            <Typography variant="h6">{title}</Typography>
          </a>
          <p className={classes.articleSummary}>{summary}</p>
        </div>
      </li>
    </React.Fragment>
  );
}
