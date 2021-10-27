import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
    padding: 10,
  },
  cardMedia: {
    width: 160,
  },
  title: {
    fontFamily: "Lato, Yu Gothic Medium, Segoe UI"
  },
  text: {
    fontFamily: "Segoe UI, Yu Gothic Medium, Lato"
  },
});

const FeedLink = ({ name }: { name: string }) => {
  const classes = useStyles();
  const [cover, setCover] = useState(null);

  useEffect(() => {
    var coverImg;
    try {
      coverImg = require(`../public/feeds/${name}/media/image1.png`);
    } catch (e) {
      if (e.code === 'MODULE_NOT_FOUND') {
        try {
          coverImg = require(`../public/feeds/${name}/media/image1.jpg`);
        } catch (err) {
          coverImg = null;
        }
      }
    }
    setCover(coverImg);
  }, [])
  
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Link href={name}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h4" className={classes.title}>
                  {name.replace(/-/g, ' ')}
                </Typography>
                <Typography variant="h6" color="primary" className={classes.text}>
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={cover}
                title="Article Cover"
              />
            </Hidden>
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  )
}

export default FeedLink;