import React from 'react'
import styles from '@/components/ubike/detail.module.css'

export default function UbikeDetail({ selectedStation }) {
  return (
    <>
      {selectedStation ? (
        <>
          <h1 className={`${styles.sna}`}>
            {selectedStation.sna.replace('YouBike2.0_', '')}
          </h1>
          <h2 className={`${styles.sareaen}`}>{selectedStation.sareaen}</h2>
          <p className={`${styles.ar}`}>
            <span className={`${styles.badge}`}>地址</span>
            {selectedStation.ar}
          </p>
          <p className={`${styles.sbi}`}>
            <span className={`${styles.badge}`}>可借車輛</span>
            {selectedStation.sbi}
          </p>
          <p className={`${styles.bemp}`}>
            <span className={`${styles.badge}`}>可還車輛</span>
            {selectedStation.bemp}
          </p>
        </>
      ) : (
        ''
      )}
    </>
  )
}
