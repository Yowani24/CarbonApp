import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.interface}>
          <div className={styles.header_box}>
            <h1>Welcome to the Yowani's creativity</h1>
          </div>
        </div>
      </header>

      <section className={styles.cards_sec}>
        <div className={styles.interface}>
          <div className={styles.card_box}>
            <div className={styles.card}>
              <div>
                <p>More details</p>
                <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
