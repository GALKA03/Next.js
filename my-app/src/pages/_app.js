 import '../styles/globals.scss'
import Layout from 'components/Layout/@'
import Image from 'next/image'
import youtubeImg from '../../public/youtube.png'
import styles from '../styles/globals.scss'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
       <Head>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap" rel="stylesheet"/>
            </Head>   
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Image src={youtubeImg} width={800} height={400} alt='bigImg' placeholder='blur'></Image> */}
      </Layout>
   ) 
 
}
export default App