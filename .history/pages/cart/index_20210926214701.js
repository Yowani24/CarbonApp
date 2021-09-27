import React from 'react';
import Head from 'next/head'

import styles from './Cart.module.css'
import Link from 'next/link'

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

                          <div className={styles.product_details}>
                            <div className={styles.description}>
                                <p>Carbon Credit</p>
                                <p>More details goes here like description</p>
                            </div>

                            <div>
                                <div className={styles.quantity_controls}>
                                    <button>-</button>
                                    <button>+</button>
                                </div>

                                <div className={styles.current_money}>
                                    <p>2</p>
                                    <span>x</span>
                                    <p>$ 240</p>
                                </div>
                            </div>
                          </div>
                      </div>
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
                      <button>Continue</button>
                  </div>
              </div>
          </section>
        </>
    )
}