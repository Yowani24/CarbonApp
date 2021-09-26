import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.interface}>
          <h1>Welcome to the Yowani's creativity</h1>
        </div>
      </header>
    </div>
  )
}
