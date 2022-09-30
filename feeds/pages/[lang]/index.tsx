import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import fs from "fs";
import path from "path";
import FeedLink from '../../components/FeedLink';
import Grid from "@material-ui/core/Grid";
import { useLocale } from '../../hooks/useLocale';
import { languages } from '../../i18n.config';
import { FeedInfo, Lang } from '../../constants/types';
import { useState } from 'react';
import { LangMap } from '../../constants/langs';

interface StaticProps {
  params: { lang: string; }
}

interface HomeProps {
  feedNames: string[];
  lang: string;
}

const langs = ["EN", "JA", "zhCN", "zhTW"];

const Home: NextPage<HomeProps> = ({ feedNames, lang }) => {
  const { locale, t } = useLocale(lang);
  const [ filteredLang, setFilteredLang ] = useState("");

  const feeds: FeedInfo[] = feedNames.map(name => ({
    date: name.split('-')[0].replace(/_/g, '-'),
    partner: name.split('-')[1].replace(/_/g, '-'),
    title: name.split('-')[2].replace(/_/g, ' ').replace(/\[/g, '【').replace(/\]/g, '】').replace(/\</g, '(').replace(/\>/g, ')'),
    lang: name.split('-')[3],
    authors: name.split('-').slice(4).map(author => author.replace(/_/g, ' ').replace(/\</g, '(').replace(/\>/g, ')'))
  }));

  return (
    <div className={styles.container}>
      <Head>
        <title>WasedaTime - Feeds</title>
        <meta name="description" content="Welcome to WasedaTime Feeds! Here we offer you articles that may be helpful for your student life & future career." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 style={{ color: "#555" }}>{t.index.welcome}</h2>
        <hr style={{ width: "50%", color: "#555" }} />
        <div className={styles.description}>
          <p>{t.index['top message']}</p>
          <p>
            {t.index['looking for more blogs']}
            <a href="mailto:contact@wasedatime.com" style={{ color: '#3366ff' }}>contact@wasedatime.com</a>
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <button onClick={() => setFilteredLang("")}>
            Clear
            {/* Use a reset icon */}
          </button>
          {
            langs.map(lang => (
              <button onClick={() => setFilteredLang(lang)}>
                {LangMap[lang as Lang]}
              </button>
            ))
          }
        </div>

        <Grid container spacing={4}>
          {
            feeds.filter(feed => !filteredLang || feed.lang === filteredLang).map((feed, i) => (
              <FeedLink key={'feed_link' + i} name={feedNames[i]} feed={feed} locale={locale || 'en'} />
            ))
          }
        </Grid>
      </main>
    </div>
  )
}

export default Home;

export async function getStaticPaths() {
  var paths: { params: { lang: string } }[] = []

  languages.forEach(lang => {
    paths.push({ params: { lang: lang } })
  });

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: StaticProps) {
  const POSTS_DIRECTORY = path.join(process.cwd(), "public", "feeds");
  const feedNames = await fs.readdirSync(POSTS_DIRECTORY).filter(file => path.extname(file).toLowerCase() === '.md').sort((a, b) => a > b ? -1 : 1).map(name => name.replace('.md', ''));
  return { props: { feedNames, lang: params.lang } };
}
