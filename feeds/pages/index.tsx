import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/en')
  }, [])
  return (
    <h1 style={{ textAlign: 'center', marginTop: '40vh' }}>Redirecting...</h1>
  )
}

export default Home;