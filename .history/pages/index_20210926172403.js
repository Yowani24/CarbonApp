import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import arrowIcon from '../public/arrowIcon.svg'
import cartIcon from '../public/cartIcon.png'
import styled from 'styled-components'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';



export default function Home() {
  // var options = {
  //   type: 'loop',
  //   perPage: 1,
  //   breakpoints: {
  //     640: {
  //       perPage: 1,
  //     },
  //   }
  // };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.interface}>
          <div className={styles.header_box}>
            <h1>Make the world a better place</h1>
            <ImageBox className={styles.ImageBox}>
              <Image className={styles.cartIcon} src={cartIcon} alt=""/>
            </ImageBox>
          </div>
        </div>
      </header>

      <section className={styles.cards_sec}>
        <div className={styles.interface}>
            <div className={styles.card_box}>
            <Splide
          options={ {
            type: 'loop',
            gap: '1rem',
            perPage: 3,
            focus: 'center',
            arrows:true,
            pagination: false,
            
          }}
           >
             <SplideSlide>
              <div className={styles.card}>
                <div className={styles.topSide_card}>
                  <p>More details</p>
                  <span className={styles.arrowIcon_box}>
                    <Image src={arrowIcon} alt=""/>
                  </span>
                </div>
                <div className={styles.centerSide_card}>
                  <p>$ 120</p>
                  <p>Carbon Credit - 1</p>
                  <p>More details goes here like description</p>
                </div>
                <div className={styles.card_add_btn_box}>
                  <button>Add</button>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={styles.card}>
                <div className={styles.topSide_card}>
                  <p>More details</p>
                  <span className={styles.arrowIcon_box}>
                    <Image src={arrowIcon} alt=""/>
                  </span>
                </div>
                <div className={styles.centerSide_card}>
                  <p>$ 120</p>
                  <p>Carbon Credit - 2</p>
                  <p>More details goes here like description</p>
                </div>
                <div className={styles.card_add_btn_box}>
                  <button>Add</button>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={styles.card}>
                <div className={styles.topSide_card}>
                  <p>More details</p>
                  <span className={styles.arrowIcon_box}>
                    <Image src={arrowIcon} alt=""/>
                  </span>
                </div>
                <div className={styles.centerSide_card}>
                  <p>$ 120</p>
                  <p>Carbon Credit - 3</p>
                  <p>More details goes here like description</p>
                </div>
                <div className={styles.card_add_btn_box}>
                  <button>Add</button>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={styles.card}>
                <div className={styles.topSide_card}>
                  <p>More details</p>
                  <span className={styles.arrowIcon_box}>
                    <Image src={arrowIcon} alt=""/>
                  </span>
                </div>
                <div className={styles.centerSide_card}>
                  <p>$ 120</p>
                  <p>Carbon Credit - 4</p>
                  <p>More details goes here like description</p>
                </div>
                <div className={styles.card_add_btn_box}>
                  <button>Add</button>
                </div>
              </div>
            </SplideSlide>
          </Splide>
            </div>

          <div className={styles.bottom_text}>
            <h1>Carbon Credits Purchase Flow</h1>
            <p>Yowani da Costa</p>
          </div>

          
        </div>
      </section>
    </div>
  )
}

const ImageBox = styled.div`
 width:22px;
 justify-self: flex-end;
 cursor:pointer;

 @media (max-width:415px){
   display:none;
 }

`