import '../styles/globals.css'
import { CreditProvider } from './products/CreditProvider'

function MyApp({ Component, pageProps }) {
  return (
    <CreditProvider>
      <Component {...pageProps} />
    </CreditProvider>
  );
}

export default MyApp
