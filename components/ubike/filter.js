import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";

const options = [
  { value: "北投區", label: "北投區" },
  { value: "士林區", label: "士林區" },
  { value: "中山區", label: "中山區" },
  { value: "內湖區", label: "內湖區" },
  { value: "大同區", label: "大同區" },
  { value: "松山區", label: "松山區" },
  { value: "萬華區", label: "萬華區" },
  { value: "中正區", label: "中正區" },
  { value: "大安區", label: "大安區" },
  { value: "信義區", label: "信義區" },
  { value: "南港區", label: "南港區" },
  { value: "文山區", label: "文山區" },
];

export default function UbikeFilter({ data, setSelectedStation, setArea }) {
  const [selectedArea, setSelectedArea] = useState(null);
  const [stations, setStations] = useState([]); // 根據選擇的區域篩選的站點
  const router = useRouter();

  // 監聽路由的變化，並更新 selectedArea
  useEffect(() => {
    const { sarea } = router.query;
    if (sarea) {
      const selectedOption = options.find((option) => option.value === sarea);
      if (selectedOption) {
        setSelectedArea(selectedOption);
      }
    }
  }, [router.query]);

  // 當 selectedArea 更改時，更新 URL 中的查詢字串
  useEffect(() => {
    if (selectedArea) {
      router.push(`/ubike/?sarea=${selectedArea.value}`);
    } else {
      router.push("/ubike");
    }
  }, [selectedArea]);

  useEffect(() => {
    setStations([]);
    if (selectedArea) {
      const filtered = data.filter((v) => v.sarea === selectedArea.value);
      //   console.log(filtered)
      setStations(filtered);
    } else {
      setStations([]);
    }
  }, [selectedArea, data]);

  return (
    <>
      <div className="row">
        <Select
          className="col-md-4"
          placeholder={`選擇區域`}
          defaultValue={selectedArea}
          onChange={(selectedOption) => {
            setSelectedArea(selectedOption);
            setArea(selectedOption.value);
          }}
          options={options}
        />
        <Select
          className="col-md-8 mt-md-0 mt-3"
          placeholder={`搜尋站點`}
          options={stations.map((station) => ({
            value: station,
            label: station.sna.replace("YouBike2.0_", ""),
          }))}
          onChange={(selectedOption) => {
            setSelectedStation(selectedOption.value);
          }}
        />
      </div>
    </>
  );
}
