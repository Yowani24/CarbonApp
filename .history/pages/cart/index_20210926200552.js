import React from 'react';
import Head from 'next/head'

import styles from './Cart.module.css'

export default function Cart(props) {
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
        </>
    )
}