import React from "react";
import styles from "@/components/ubike/list.module.css";

export default function Ubikelist({ currentitems }) {
  return (
    <>
      <section className={`${styles.tablewraper}`}>
        <div className={`row text-center ${styles.title}`}>
          <div className={`col-3`}>區域</div>
          <div className="col">站點名稱</div>
          <div className="col-2">可借車輛</div>
          <div className="col-2">可還車輛</div>
        </div>
        {currentitems.map((v, i) => {
          return (
            <div key={i} className={`row text-center ${styles.items}`}>
              <div className="col-3">{v.sarea}</div>
              <div className="col">{v.sna.replace("YouBike2.0_", "")}</div>
              <div className={`col-2 ${styles.sbiText}`}>{v.sbi}</div>
              <div className={`col-2`}>{v.bemp}</div>
            </div>
          );
        })}
      </section>
    </>
  );
}
