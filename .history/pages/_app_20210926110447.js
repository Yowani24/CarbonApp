import '../styles/globals.css'
import Cart from './cart/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cart/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
