import React from 'react';
import Head from 'next/head'
import styles from './Payment.module.css'


export default function Payment(props) {
    return (
       <>
        <Head>
            <title>Payment</title>
        </Head>

        <header className={styles.header}>
            <div className={styles.interface}>
                <div className={styles.header_content}>
                    <h1>Payment</h1>
                </div>
            </div>
        </header>

        <div className={styles.content}>
            <div className={styles.interface}>
                <div className={styles.list_content}>
                    <span>
                        <p>Carbon Credit <br/> More details goes here like description</p>
                        <p>2</p>
                        <p>$ 240</p>
                    </span>
                </div>
            </div>
        </div>

        <div className={styles.button_box}>
            <button>Back</button>
            <button>Comfirm</button>
        </div>
       </>
    );
}