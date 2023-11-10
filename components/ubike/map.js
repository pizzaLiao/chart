import React, { useEffect } from "react";
import styles from "@/components/ubike/map.module.css";

export default function UbikeDetail({ selectedStation }) {
  useEffect(() => {
    // 初始化 Google 地圖
    if (selectedStation) {
      const google = window.google;
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: selectedStation.lat, lng: selectedStation.lng },
        zoom: 15,
      });
      const marker = new google.maps.Marker({
        position: { lat: selectedStation.lat, lng: selectedStation.lng },
        map: map,
        title: "這是標記的標題",
      });
    }
  }, [selectedStation]);

  return (
    <>
      {selectedStation ? (
        <div id="map" className={`${styles.map}`}></div>
      ) : (
        <img src="/images/bike.png" alt="" style={{ width: "100%" }} />
      )}
    </>
  );
}
