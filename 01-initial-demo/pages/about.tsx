import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About - David site</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Head>
       
       
        <meta name="keywords" content="David, lazaro, curso, nextjs" />
     
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </h1>

        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/about.tsx</code>
          </p>
       
        </div>


      
      </main>
    </>
  )
}
