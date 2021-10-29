import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from "fs";
import path from "path";
import FeedLink from '../components/feedLink';
import Grid from "@material-ui/core/Grid";
import { useLocale } from '../hooks/useLocale';


interface HomeProps {
  feedNames: string[]
}

const Home: NextPage = ({ feedNames }: HomeProps) => {
  const { locale, t } = useLocale();

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

        <Grid container spacing={4}>
          {
            feedNames.map((name, i) => <FeedLink key={'feed_link' + i} name={name} locale={locale || 'en'} />)
          }
        </Grid>
      </main>
    </div>
  )
}

export default Home;

export async function getServerSideProps() {
  const POSTS_DIRECTORY = path.join(process.cwd(), "public", "feeds");
  const feedNames = await fs.readdirSync(POSTS_DIRECTORY).filter(file => path.extname(file).toLowerCase() === '.md').map(name => name.replace('.md', ''));
  return { props: { feedNames } };
}
