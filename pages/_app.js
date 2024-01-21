import "../styles/globals.css";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;

import { wrapper } from '../Redux/store';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Welcome to Rk Library" key="title" />
        <title>Welcome To Rk Library</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </Head>
      <Header />
      <div style={{ background: "#f3f0ea", color: "grey", minHeight: "81vh" }}>
        <Component {...pageProps} />
      </div>
      <div style={{ background: "#f3f0ea", color: "grey" }} >
        <Footer />
      </div>
    </>
  );
}

export default withRedux(wrapper)(withReduxSaga(MyApp));