import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import fs from "fs";
import path from "path";
import FeedLink from '../../components/FeedLink';
import Grid from "@material-ui/core/Grid";
import { useLocale } from '../../hooks/useLocale';
import { languages } from '../../i18n.config';
import { FeedInfo } from '../../constants/types';
import { Lang, LangMap } from '../../constants/langs';

interface StaticProps {
  params: { lang: string; }
}

interface HomeProps {
  feedNames: string[];
  lang: string;
}

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
    <div className="px-4 sm:px-8 md:px-20 py-1">
      <Head>
        <title>WasedaTime - Feeds</title>
        <meta name="description" content="Welcome to WasedaTime Feeds! Here we offer you articles that may be helpful for your student life & future career." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col">
        <div className="flex flex-col my-8 text-center">
          <h2 className="text-3xl text-gray-600">{t.index.welcome}</h2>
          <hr className="w-1/2 text-gray-600 my-4 mx-auto" />
          <div className="text-center">
            <p>{t.index['top message']}</p>
            <p>
              {t.index['looking for more blogs']}
              <a href="mailto:contact@wasedatime.com" style={{ color: '#3366ff' }}>contact@wasedatime.com</a>
            </p>
          </div>
        </div>

        <div id="filterButtonGroup" className="mb-8 inline-flex rounded-md" role="group">
          <button
            type="button"
            className={"py-2 px-2 md:px-4 text-sm font-medium border border-x-0 border-y-2 border-light-main border-l-2 rounded-l-lg " + (filteredLang === "" ? "bg-light-main text-white" : "text-light-main hover:bg-light-main hover:text-white")}
            style={{ borderLeftWidth: 2 }}
            onClick={() => setFilteredLang("")}
          >
            All
          </button>
          {
            Object.values(Lang).map((lang, i) => (
              <button
                type="button"
                className={"py-2 px-2 md:px-4 text-sm font-medium border border-x-0 border-y-2 border-light-main " + (i === Object.values(Lang).length - 1 ? "rounded-r-lg " : " ") + (lang.toString() === filteredLang ? "bg-light-main text-white dark:text-white dark:bg-dark-main" : "text-light-main hover:bg-light-main hover:text-white")}
                style={i === Object.values(Lang).length - 1 ? { borderRightWidth: 2 } : {}}
                onClick={() => setFilteredLang(lang)}
              >
                {LangMap[lang]}
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
