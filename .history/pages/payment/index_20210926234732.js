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
            <h1>Payment</h1>
        </header>

        <div className={styles.content}>
            <span>
                <p>Carbon Credit <br/> More details goes here like description</p>
                <p>2</p>
                <p>$ 240</p>
            </span>

        </div>
       </>
    );
}