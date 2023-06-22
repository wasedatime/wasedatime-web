"use client"

import Link from "next/link"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Hidden from "@mui/material/Hidden"
import React, { useEffect, useState } from "react"
import { FeedInfo } from "../constants/types"
import { Lang, LangMap } from "../constants/langs"

type Props = {
  name: string
  feed: FeedInfo
  locale: string
}

const FeedLink = ({ name, feed, locale }: Props) => {
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
          <Card
            sx={{
              display: "flex",
              padding: 0,
            }}
          >
            <div
              style={{
                flex: 1,
                padding: 10,
                lineHeight: 1.5,
              }}
            >
              <CardContent
                sx={{
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontFamily: "Lato, Yu Gothic Medium, Segoe UI",
                  }}
                >
                  {feed.title}
                </h3>
                <br />
                <p
                  style={{
                    fontFamily: "Segoe UI, Yu Gothic Medium, Lato",
                    color: "#666",
                  }}
                >
                  <b>{feed.partner}</b>{" "}
                  {feed.authors.map((author, i) =>
                    i === 0 ? author : " & " + author
                  )}
                </p>
                <p
                  style={{
                    fontFamily: "Segoe UI, Yu Gothic Medium, Lato",
                    color: "#666",
                  }}
                >
                  {feed.date}
                  <span
                    style={{
                      float: "right",
                      borderRadius: 5,
                      background: "#bbb",
                      color: "#fff",
                      padding: "0px 5px",
                    }}
                  >
                    {LangMap[feed.lang as Lang]}
                  </span>
                </p>
              </CardContent>
            </div>
            {/* <Hidden xsDown> */}
              <CardMedia
                sx={{
                  width: 200,
                }}
                image={cover}
                title="Feed Cover Image"
              />
            {/* </Hidden> */}
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  )
}

export default FeedLink
