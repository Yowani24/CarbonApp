import '../styles/globals.css'
import { CreditProvider } from './products/CreditProvider'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
