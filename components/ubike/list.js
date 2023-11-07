import React from 'react'
import styles from '@/components/ubike/list.module.css'

export default function Ubikelist({ currentitems }) {
  return (
    <>
      <section className={`${styles.tablewraper}`}>
        <div className={`row text-center ${styles.title}`}>
          <div className="col">區域</div>
          <div className="col-8">站點名稱</div>
          <div className="col">可借車輛</div>
          <div className="col">可還車輛</div>
        </div>
        {currentitems.map((v, i) => {
          return (
            <div key={i} className={`row text-center ${styles.items}`}>
              <div className="col">{v.sarea}</div>
              <div className="col-8">{v.sna.replace('YouBike2.0_', '')}</div>
              <div className="col">{v.sbi}</div>
              <div className="col">{v.bemp}</div>
            </div>
          )
        })}
      </section>
    </>
  )
}
