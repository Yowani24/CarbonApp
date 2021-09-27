import { useState } from 'react';
import '../styles/globals.css'
import { CreditProvider } from './products/CreditList'

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CreditProvider>
      <Component {...pageProps} />
    </CreditProvider>
  );
}

export default MyApp
