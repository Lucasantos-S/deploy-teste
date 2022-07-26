import React from 'react'
import styles from "./Contato.module.css"
import foto from '../img/contato.jpg'
import Head from './Head'

function Contato() {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title='Renek | Contato' description ="Entre em contato"></Head>
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>lucassantos.dsilv@gmail.com</li>
          <li>(31)99999-9999</li>
          <li>Rua em algum lugar, 999</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato