import { useRouter } from "next/router";
import { useAmp } from 'next/amp'
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import React from "react";

export const config = { amp: true }

interface Props {
  feed: string;
  updatedAt: string;
}

interface StaticProps {
  params: { feed: string; }
}

interface ComponentProps {
  img: any;
}

const Feed = ({ feed, updatedAt }: Props) => {
  const isAmp = useAmp()
  const router = useRouter();

  function Img ({ alt, src = '', title }: { alt?: string | undefined; src?: string | undefined; title?: string | undefined }) {
    return isAmp ? (
      <span className='ampImgContainer'><img className="contain" src={require(`../public/feeds/${decodeURI(src)}`)} alt={alt} /></span>
    ) : (
      <img src={require(`../public/feeds/${decodeURI(src)}`)} alt={alt} style={{ width: '100%', maxWidth: '800px', margin: '10px auto', display: 'block' }} />
    );
  };

  const feedInfo = {
    date: (router.query.feed as string).split('-')[0].replace(/_/g, '-'),
    partner: (router.query.feed as string).split('-')[1].replace(/_/g, '-'),
    title: (router.query.feed as string).split('-')[2].replace(/_/g, ' ').replace(/\[/g, '【').replace(/\]/g, '】').replace(/\</g, '(').replace(/\>/g, ')'),
    lang: (router.query.feed as string).split('-')[3],
    authors: (router.query.feed as string).split('-').slice(4).map(author => author.replace(/_/g, ' ').replace(/\</g, '(').replace(/\>/g, ')'))
  };

  return (
    <React.Fragment>
      <Head>
        <title>{"WasedaTime Feeds: " + feedInfo.title}</title>
        <meta name="description" content={"WasedaTime Feeds: " + router.query.feed + "\n" + feed} />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            .header {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 65px;
              border-bottom: 2px solid #eee;
              background-color: #fff;
              z-index: 100;
              display: flex;
              flex-direction: row;
            }

            .header img {
              margin: 7.5px 16px;
            }

            .header .headerLink {
              flex-grow: 1;
              align-self: center;
              font-family: Segoe UI;
              text-align: center;
              text-decoration: none;
              color: #000;
            }

            .header .headerLink h2 {
              font-weight: lighter;
            }

            .title {
              font-family: Lato;
              text-align: center;
            }

            .info {
              font-family: Lato;
              color: #777;
              margin: 5px 0px;
            }

            .markdownWrapper {
              font-family: ${feedInfo.lang === 'EN' ? "Segoe UI, Yu Gothic Medium, Lato" : 'Yu Gothic Medium, Lato, Segoe UI'} !important;
              padding: 0px;
              font-weight: lighter;
            }

            .markdownWrapper p {
              font-size: 1.3rem;
              margin: 0px 0px;
              padding-bottom: 20px;
              line-height: 2.5rem;
            }

            .markdownWrapper p em {
              font-size: 1rem;
              display: block;
              text-align: center;
              color: #666;
              line-height: 1.5rem;
            }

            .markdownWrapper a {
              font-size: 1.3rem;
              color: #3366ff;
            }

            .markdownWrapper ul {
              list-style: square;
              margin-top: 10px;
              font-size: 1.3rem;
            }

            .markdownWrapper li {
              padding-bottom: 2px;
            }

            amp-img.contain img {
              object-fit: contain;
            }

            .ampImgContainer {
              position: relative;
              display: block;
              width: 100%;
              height: 300px;
            }

            .linksToWasedaTime {
              display: block;
              font-family: Lato;
              text-align: center;
              text-decoration: none;
              color: #666;
            }

            .linksToWasedaTime p {
              margin: 10px 0px;
            }

            @media (max-width: 768px) {
              .markdownWrapper p {
                font-size: 1.1rem;
                line-height: 2rem;
              }

              .markdownWrapper p em {
                font-size: 0.8rem;
                line-height: 1.2rem;
              }

              .markdownWrapper a {
                font-size: 1.1rem;
              }

              .markdownWrapper ul {
                font-size: 1.1rem;
              }

              .ampImgContainer {
                height: 200px;
              }
            }
          `}
        </style>
      </Head>

      {
        isAmp && <div className='header'>
          <a href="https://wasedatime.com"><img src={require(`../public/logo.png`)} alt='WasedaTime logo' width='50' height='50' /></a>
          <a href="https://wasedatime.com/feeds" className='headerLink'><h2>Feeds <span style={{ fontFamily: 'Yu Gothic Medium' }}>記事</span></h2></a>
          <span style={{ width: '50px', margin: '16px' }}></span>
        </div>
      }

      <div style={{ padding: '0px 5vw', paddingTop: '70px' }}>
        <h1 className='title'>{feedInfo.title}</h1>
        <p className='info'>
          <b>{feedInfo.partner}</b> {feedInfo.authors.map((author, i) => i === 0 ? author :  ' & ' + author)}
        </p>
        <p className='info'>{feedInfo.date} (Last updated: {updatedAt})</p>
        <hr />
        <div className='markdownWrapper'>
          <ReactMarkdown components={{ img: Img }} children={feed} />
        </div>

        {
          isAmp && <a href="https://wasedatime.com/feeds" className="linksToWasedaTime">
            <img src={require(`../public/logo.png`)} alt='WasedaTime logo' width='100' height='100' />
            <p>Read more? Visit WasedaTime!</p>
            <p>もっと読みたい？早稲田タイムへどうぞ！</p>
          </a>
        }
      </div>
    </React.Fragment>
  )
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const POSTS_DIRECTORY = path.join(process.cwd(), "public", "feeds");
  const feedNames = await fs.readdirSync(POSTS_DIRECTORY).filter(file => path.extname(file).toLowerCase() === '.md').map(name => name.replace('.md', ''));
  var paths: { params: { feed: string }, locale: string }[] = []

  locales.forEach(locale => {
    feedNames.forEach(name => {
      paths.push({ params: { feed: name }, locale })
    });
  });
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: StaticProps) {
  const path = process.cwd() + `/public/feeds/${params.feed}.md`;
  const stats = await fs.statSync(path)
  const feed = await fs.readFileSync(path, 'utf8')
  return {
    props: {
      feed: feed,
      updatedAt: stats.mtime.getFullYear() + '-' + stats.mtime.getMonth() + '-' + stats.mtime.getDate()
    }
  }
}

export default Feed;