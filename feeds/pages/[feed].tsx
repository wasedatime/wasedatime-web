import { useRouter } from "next/router";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import fs from "fs";
import path from "path";

const FeedWrapper = styled.div`
  padding: 0px 5vw;
`;

const Info = styled.p`
  color: #777;
  margin: 5px 0px;
`;

const Title = styled.h1`
  font-family: Lato;
  text-align: center;
`;

const StyledMarkdown = styled(ReactMarkdown)`
    * {
      font-family: Segoe UI, Yu Gothic Medium, Lato !important;
      padding: 0px;
    }
    & p {
      font-size: 1.3rem;
      margin: 0px 0px;
      padding-bottom: 2px;
      line-height: 2.5rem;
    }
    & p em {
      font-size: 1rem;
      display: block;
      text-align: center;
      color: #666;
      line-height: 1.5rem;
    }
    & a {
      font-size: 1.3rem;
      color: #3366ff;
    }
    & ul {
      list-style: square;
      margin-top: 10px;
      font-size: 1.3rem;
    }
    & li {
      padding-bottom: 2px;
    }
  }
`;

const Feed = ({ feed, updatedAt }) => {
  const router = useRouter();

  const Img = ({ alt, src, title }: { alt: string; src: string; title: string }) => {
    return (
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
    <div style={{ margin: '1em' }}>
      <Head>
        <title>{"WasedaTime Feeds: " + feedInfo.title}</title>
        <meta name="description" content={"WasedaTime Feeds: " + router.query.feed} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeedWrapper>
        <Title>{feedInfo.title}</Title>
        <Info>
          <b>{feedInfo.partner}</b> {feedInfo.authors.map((author, i) => i === 0 ? author :  ' & ' + author)}
        </Info>
        <Info>{feedInfo.date} (Last updated: {updatedAt})</Info>
        <Info><hr /></Info>
        <StyledMarkdown components={{ img: Img }} children={feed} />
      </FeedWrapper>
    </div>
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