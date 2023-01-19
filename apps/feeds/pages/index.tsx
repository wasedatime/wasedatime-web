import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/en')
  }, [])
  return (
    <div style={{ textAlign: 'center' }}>
      <LoadingSpinner message={"Redirecting..."} theme="light" />
    </div>
  )
}

export default Home;