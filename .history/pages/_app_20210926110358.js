import '../styles/globals.css'
import Cart from './cart/index.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cart/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
