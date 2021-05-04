import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Post } from "../types/post";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { parseSrcS3ToHttps, getArticleTitle } from '../utils/parseS3Link';


const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    marginBottom: theme.spacing(4),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  title: {
    fontFamily: "Lato, Yu Gothic Medium, Segoe UI"
  },
  text: {
    fontFamily: "Segoe UI, Yu Gothic Medium, Lato"
  },
  cardMedia: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: 500,
  },
}));

function MainFeaturedPost(props: { post: Post }) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Link to={`/feeds/articles/${getArticleTitle(post.src)}`} style={{ textDecoration: 'none' }}>
      <Card
        className={classes.mainFeaturedPost}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} alt="main text" />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                {post.title}
              </Typography>
              <Typography variant="h5" color="textSecondary" className={classes.text}>
                {post.created_at.match(/\d{4}\-\d{2}\-\d{2}/g)}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph className={classes.text}>
                {post.summary}
              </Typography>
              <Typography variant="h5" color="primary" className={classes.text}>
                Continue reading...
              </Typography>
            </div>
          </Grid>
          <CardMedia
            className={classes.cardMedia}
            image={`${parseSrcS3ToHttps(post.src)}cover.jpg`}
            title="Article Cover"
          />
        </Grid>
      </Card>
    </Link>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    // imageText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
