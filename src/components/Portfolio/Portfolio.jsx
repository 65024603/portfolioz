import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>My hobby</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/084298363a8fbf4cbe27df5e5d959444.jpg" alt="" />
            <p>listen to music</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/9d6e2a8ce980002be35efc1a35ed223b.jpg" alt="" />
            <p>play a game</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/85ba4e43211bf7641b43ecfd5ef7dfda.jpg" alt="" />
            <p>play football</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/67133d9faac444ac24323d0d3e99d6b7.jpg" alt="" />
            <p>Watch a movie</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/10a2f0c4221be23c238934528bab97e8.jpg" alt="" />
            <p>Write a program</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/b219c7be0cdc0be1c669f511fd71697e.jpg" alt="" />
            <p>like to travel to the sea</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio