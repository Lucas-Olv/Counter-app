import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'
import cat from '..//public/cat.png'

export default function Home() {

  const [count, counter] = useState(0);

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.wrapper_count}>{count}</h1>
      <div className={styles.wrapper_image}>
      <Image src={cat} alt='Cute cat'></Image>
      </div>
      <button className={styles.wrapper_button} onClick={() => {counter(count + 1)}}>Contar</button>
      <h3 className={styles.wrapper_restart} onClick={() => {counter(count - count)}}>Começar novamente</h3>
    </main>
  )
}
