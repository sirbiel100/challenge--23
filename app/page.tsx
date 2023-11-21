"use server"

import Form from './components/form'
import Image from 'next/image'
import styles from './styles/page.module.scss'
import HeroDesktop from '../public/hero-desktop.jpg'
import HeroMobile from '../public/hero-mobile.jpg'
import Logo from '../public/logo.svg'
import DesktopBackground from '../public/bg-pattern-desktop.svg'

export default async function Home() {
  return (
    <section className={styles.MainSection}>

      <header>
        <Image
          src={Logo}
          alt=''
        />
      </header>

      <aside>
        <Image
          src={HeroMobile}
          alt=''
        />
        <Image
          src={HeroDesktop}
          alt=''
        />
      </aside>

      <main>
        <div>
          <h1>WE'RE <br/><em>COMING  <br/>SOON</em></h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </div>
        <Form />
      </main>
    <Image
      src={DesktopBackground}
      alt=''
      className={styles.BGImage} 
    />
    </section>
  )
}
