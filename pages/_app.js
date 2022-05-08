import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
const config = require('../next.config')

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <base href={config.basePath + "/"} />
      </Head>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
