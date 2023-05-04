import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Hidden from "@material-ui/core/Hidden"
import { useEffect, useState } from "react"
import { FeedInfo } from "../constants/types"
import { Lang, LangMap } from "../constants/langs"

const useStyles = makeStyles({
  card: {
    display: "flex",
    padding: 0,
  },
  cardContent: {
    padding: 20,
  },
  cardDetails: {
    flex: 1,
    padding: 10,
    lineHeight: 1.5,
  },
  cardMedia: {
    width: 200,
  },
  title: {
    fontSize: 20,
    fontFamily: "Lato, Yu Gothic Medium, Segoe UI",
  },
  text: {
    fontFamily: "Segoe UI, Yu Gothic Medium, Lato",
    color: "#666",
  },
  lang: {
    float: "right",
    borderRadius: 5,
    background: "#bbb",
    color: "#fff",
    padding: "0px 5px",
  },
})

type Props = {
  name: string
  feed: FeedInfo
  locale: string
}

const FeedLink = ({ name, feed, locale }: Props) => {
  const classes = useStyles()
  const [cover, setCover] = useState("")

  useEffect(() => {
    var coverImg
    try {
      coverImg = require(`../public/feeds/${name}/media/image1.jpg`)
    } catch (e: any) {
      if (e.code === "MODULE_NOT_FOUND") {
        try {
          coverImg = require(`../public/feeds/${name}/media/image1.jpeg`)
        } catch (err: any) {
          if (err.code === "MODULE_NOT_FOUND") {
            try {
              coverImg = require(`../public/feeds/${name}/media/image1.png`)
            } catch (error: any) {
              coverImg = null
            }
          }
        }
      }
    }
    setCover(coverImg)
  }, [])

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Link
          href={
            (process.env.APP_ENV === "production" ? "/feeds/" : "") +
            locale +
            "/" +
            name
          }
          passHref
        >
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent className={classes.cardContent}>
                <h3 className={classes.title}>{feed.title}</h3>
                <br />
                <p className={classes.text}>
                  <b>{feed.partner}</b>{" "}
                  {feed.authors.map((author, i) =>
                    i === 0 ? author : " & " + author
                  )}
                </p>
                <p className={classes.text}>
                  {feed.date}
                  <span className={classes.lang}>
                    {LangMap[feed.lang as Lang]}
                  </span>
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

export default FeedLink
