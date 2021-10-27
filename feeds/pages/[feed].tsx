import { useRouter } from "next/router";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import fs from "fs";
import path from "path";

const FeedWrapper = styled.div`
  padding: 0px 5vw;
`;

const StyledMarkdown = styled(ReactMarkdown)`
    * {
      font-family: Segoe UI, Yu Gothic Medium, Lato !important;
      padding: 0px;
    }
    & p {
      font-size: 1rem;
      margin: 30px 0px;
      padding-bottom: 2px;
      line-height: 2rem;
    }
    & a {
      font-size: 1rem;
      color: #3366ff;
    }
    & ul {
      list-style: square;
      margin-top: 10px;
      font-size: 2rem;
    }
    & li {
      padding-bottom: 2px;
    }
    & h2 {
      display: none;
    }
    & img{
      display: block;
      margin-bottom: -30px;
      width: 500px;
    }
  }
`;

const Feed = ({ feed, updatedAt }) => {
  const router = useRouter();

  const Img = ({ alt, src, title }: { alt: string; src: string; title: string }) => {
    return (
      <img src={require(`../public/feeds/${src}`)} alt={alt} style={{ maxWidth: '100%' }} />
    );
  };

  return (
    <div style={{ margin: '1em' }}>
      <Head>
        <title>{"WasedaTime Feeds: " + router.query.feed}</title>
        <meta name="description" content={"WasedaTime Feeds: " + router.query.feed} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeedWrapper>
        <h1>{router.query.feed.replace(/-/g, ' ')}</h1>
        <p>Last updated: {updatedAt}</p>
        <StyledMarkdown components={{ img: Img }} children={feed} />
      </FeedWrapper>
    </div>
  )
}

export async function getStaticPaths() {
  const POSTS_DIRECTORY = path.join(process.cwd(), "public", "feeds");
  const feedNames = await fs.readdirSync(POSTS_DIRECTORY).filter(file => path.extname(file).toLowerCase() === '.md').map(name => name.replace('.md', ''));
  const paths = feedNames.map(name => '/' + name)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
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