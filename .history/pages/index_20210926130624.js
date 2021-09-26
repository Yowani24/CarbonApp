import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {} from '../public/vercel.svg'


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
                <span>
                <Image src={arrowIcon} alt="Picture of the author" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
