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
    padding: '0px 10px !important'
  },
  cardContent: {
    padding: '0px !important'
  },
  cardDetails: {
    flex: 1,
    padding: 10,
    lineHeight: 1.5
  },
  cardMedia: {
    width: 240,
  },
  title: {
    fontFamily: "Lato, Yu Gothic Medium, Segoe UI"
  },
  text: {
    fontFamily: "Segoe UI, Yu Gothic Medium, Lato",
    color: '#666'
  },
  lang: {
    float: 'right',
    borderRadius: 5,
    background: '#bbb',
    color: '#fff',
    padding: '0px 5px'
  }
});

const LangMap = {
  EN: 'English',
  JA: '日本語',
  zhCN: '简中',
  zhTW: '繁中'
} as const;

type LangMap = typeof LangMap[keyof typeof LangMap];

const FeedLink = ({ name, locale }: { name: string; locale: string; }) => {
  const classes = useStyles();
  const [cover, setCover] = useState(null);

  const feedInfo = {
    date: name.split('-')[0].replace(/_/g, '-'),
    partner: name.split('-')[1].replace(/_/g, '-'),
    title: name.split('-')[2].replace(/_/g, ' ').replace(/\[/g, '【').replace(/\]/g, '】').replace(/\</g, '(').replace(/\>/g, ')'),
    lang: name.split('-')[3],
    authors: name.split('-').slice(4).map(author => author.replace(/_/g, ' ').replace(/\</g, '(').replace(/\>/g, ')'))
  };

  useEffect(() => {
    var coverImg;
    try {
      coverImg = require(`../public/feeds/${name}/media/image1.jpg`);
    } catch (e) {
      if (e.code === 'MODULE_NOT_FOUND') {
        try {
          coverImg = require(`../public/feeds/${name}/media/image1.png`);
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
        <Link href={name} locale={locale}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent className={classes.cardContent}>
                <h3 className={classes.title}>
                  {feedInfo.title}
                </h3>
                <p className={classes.text}>
                  <b>{feedInfo.partner}</b> {feedInfo.authors.map((author, i) => i === 0 ? author :  ' & ' + author)}
                </p>
                <p className={classes.text}>
                  {feedInfo.date}
                  <span className={classes.lang}>{LangMap[feedInfo.lang]}</span>
                </p>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={cover}
                title="Feed Cover Image"
              />
            </Hidden>
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  )
}

export default FeedLink;