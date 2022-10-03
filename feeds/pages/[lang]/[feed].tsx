import { useRouter } from "next/router";
import { useAmp } from 'next/amp'
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import React from "react";
import { languages } from '../../i18n.config';

export const config = { amp: "hybrid" }

interface Props {
  feed: string;
  lang: string;
  filename: string;
  updatedAt: string;
}

interface StaticProps {
  params: { feed: string; lang: string; }
}

interface ComponentProps {
  img: any;
}

const Feed = ({ feed, lang, filename, updatedAt }: Props) => {
  const isAmp = useAmp();
  const router = useRouter();

  function Img ({ alt, src = '', title }: { alt?: string | undefined; src?: string | undefined; title?: string | undefined }) {
    return isAmp ? (
      <span className='ampImgContainer'><amp-img layout="fill" width="300" height="200" className="contain" src={require(`../../public/feeds/${decodeURI(src)}`)} alt={alt} /></span>
    ) : (
      <i-amphtml-sizer-intrinsic><img src={require(`../../public/feeds/${decodeURI(src)}`)} alt={alt} style={{ width: '100%', maxWidth: '800px', margin: '10px auto', display: 'block' }} /></i-amphtml-sizer-intrinsic>
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
        {
          process.env.NODE_ENV !== 'development' && (
            isAmp
              ? <link rel="canonical" href={`https://${process.env.APP_ENV === 'staging' && 'dev.'}wasedatime.com/feeds`}></link>
              : <link rel="amphtml" href={`https://${process.env.APP_ENV === 'staging' ? 'develop' : 'master'}.${process.env.MF_FEEDS_DOMAIN}/${lang}/${filename}?amp=1`}></link>
          )
        }
      </Head>

      {
        isAmp && <div className='headerInAmpMode'>
          <a href="https://wasedatime.com"><amp-img className="amp_logo" src={require(`../../public/logo.png`)} alt='WasedaTime logo' width='50' height='50' /></a>
          <a href="https://wasedatime.com/feeds" className='headerLink'><h2>Feeds <span style={{ fontFamily: 'Yu Gothic Medium' }}>記事</span></h2></a>
          <span style={{ width: '50px', margin: '16px' }}></span>
        </div>
      }

      <div className="mx-4 md:mx-20 my-4">      
        <button className="w-[32px] h-[32px] rounded-full text-bold text-light-main border-2 border-light-main hover:text-white hover:bg-light-main" onClick={() => router.back()}>←</button>
      </div>

      <div className="feedWrapper">
        <h1 className='text-3xl mb-8 title'>{feedInfo.title}</h1>
        <p className='info'>
          <b>{feedInfo.partner}</b> {feedInfo.authors.map((author, i) => i === 0 ? author :  ' & ' + author)}
        </p>
        <p className='info'>{feedInfo.date} (Last updated: {updatedAt})</p>
        <hr className="mb-8" />
        <div className='markdownWrapper'>
          <ReactMarkdown components={{ img: Img }} children={feed} />
        </div>

        {
          isAmp && <a href="https://wasedatime.com/feeds" className="linksToWasedaTime">
            <amp-img src={require(`../../public/logo.png`)} alt='WasedaTime logo' width='100' height='100' />
            <p>Read more? Visit WasedaTime!</p>
            <p>もっと読みたい？早稲田タイムへどうぞ！</p>
          </a>
        }
      </div>
    </React.Fragment>
  )
}

export async function getStaticPaths() {
  const POSTS_DIRECTORY = path.join(process.cwd(), "public", "feeds");
  const feedNames = await fs.readdirSync(POSTS_DIRECTORY).filter(file => path.extname(file).toLowerCase() === '.md').map(name => name.replace('.md', ''));
  var paths: { params: { lang: string; feed: string; } }[] = []

  languages.forEach(lang => {
    feedNames.forEach(name => {
      paths.push({ params: { lang: lang, feed: name } })
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
      lang: params.lang,
      filename: params.feed,
      updatedAt: stats.mtime.getFullYear() + '-' + stats.mtime.getMonth() + '-' + stats.mtime.getDate()
    }
  }
}

export default Feed;