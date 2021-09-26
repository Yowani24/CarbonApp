import '../styles/globals.css'
import Cart from './cart';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cart/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
