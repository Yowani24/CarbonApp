import React from 'react';
import Head from 'next/head'

import styles from './Cart.module.css'
import Link from 'next/link'

import { CreditList } from '../products/CreditList'
import { useContext } from 'react'

export default function Cart(props) {
    const {cartContent} = useContext(CreditList);
    const [cartItems, setCartItems] = cartContent;
    return (
        <>
          <Head>
              <title>Cart</title>
          </Head>
          <header>
              <div className={styles.interface}>
                    <div className={styles.header_content}>
                        <h1>Cart</h1>
                        <p>2</p>
                    </div>
              </div>
          </header>

          <section>
              <div className={styles.interface}>
                  <div className={styles.boxes}>
                      
                  </div>

                  <div className={styles.total_to_pay_box}>
                      <span>
                          <p>Sub Total</p>
                          <p>$ 240</p>
                      </span>
                      <span>
                          <p>Total</p>
                          <p>$ 240</p>
                      </span>
                  </div>

                  <div className={styles.button_box}>
                      <Link href="/"><button>Back Home</button></Link>
                      <Link href="/payment"><button>Continue</button></Link>
                  </div>
              </div>
          </section>
        </>
    )
}