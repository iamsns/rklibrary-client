import "../styles/globals.css";
import { wrapper } from '../Redux/store';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
      <Component {...pageProps} />
    <Footer />
    </>
  );
}

export default withRedux(wrapper)(withReduxSaga(MyApp));
