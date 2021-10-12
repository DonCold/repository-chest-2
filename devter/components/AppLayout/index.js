import Head from 'next/head'

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Devter</title>
        <meta name="description" content="A Test app for learning NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        { children }
      </main>
    </>
  )
}

export default AppLayout
