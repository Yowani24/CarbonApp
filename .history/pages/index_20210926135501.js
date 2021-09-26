import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import arrowIcon from '../public/arrowIcon.svg'


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
              <div className={styles.topSide_card}>
                <p>More details</p>
                <span className={styles.arrowIcon_box}>
                  <Image className={styles.esse} src={arrowIcon} alt=""/>
                </span>
              </div>
              <div className={styles.centerSide_card}>
                <p>$ 120</p>
                <p>Carbon Credit​</p>
                <p>More details goes here like description​</p>
              </div>
              <div className={styles.card_add_btn_box}>
                <button>Add</button>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.topSide_card}>
                <p>More details</p>
                <span className={styles.arrowIcon_box}>
                  <Image className={styles.esse} src={arrowIcon} alt=""/>
                </span>
              </div>
              <div className={styles.centerSide_card}>
                <p>$ 120</p>
                <p>Carbon Credit​</p>
                <p>More details goes here like description​</p>
              </div>
              <div className={styles.card_add_btn_box}>
                <button>Add</button>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.topSide_card}>
                <p>More details</p>
                <span className={styles.arrowIcon_box}>
                  <Image className={styles.esse} src={arrowIcon} alt=""/>
                </span>
              </div>
              <div className={styles.centerSide_card}>
                <p>$ 120</p>
                <p>Carbon Credit​</p>
                <p>More details goes here like description​</p>
              </div>
              <div className={styles.card_add_btn_box}>
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
