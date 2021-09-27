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

          <section>
              <div className={styles.interface}>
                  <div className={styles.boxes}>
                      <div className={styles.content_box}>
                          <div className={styles.box}>
                              <h3>Carbon Credit</h3>
                          </div>

                          <div>
                              <p>Carbon Credit​</p>
                              <p>More details goes here like description​</p>
                          </div>

                          <div>
                              <span>-</span>
                              <span>+</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </>
    )
}