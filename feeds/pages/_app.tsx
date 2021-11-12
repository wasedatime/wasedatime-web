import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  
  useEffect(() => {
    var url = new URL(window.location.href);
    var params = url.searchParams;
    const locale = params.get('locale');
    locale && router.push({ pathname, query }, asPath, { locale: locale });
  }, [])

  return <Component {...pageProps} />
}
export default MyApp
