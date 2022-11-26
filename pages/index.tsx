import type { NextPage } from 'next'
import Head from 'next/head'
import Scroll from '../components/Scroll'

const Home: NextPage = () => {
  return (
    <div className='w-full h-full'>
      <Head>
        <title>3D protfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Scroll />
    </div>
  )
}

export default Home
