import Head from 'next/head'

import styles, { globalStyles } from './styles'

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Devter</title>
        <meta name="description" content="A Test app for learning NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>
          { children }
        </main>
      </div>

      <style jsx>{ styles }</style>
      <style jsx global>{ globalStyles }</style>
    </>
  )
}

export default AppLayout
