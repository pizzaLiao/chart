import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Test() {
  const [data, setData] = useState([])
  const [selectedMonth, setSelectedMonth] = useState('01') // 初始選擇的月份為 01

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://nstatdb.dgbas.gov.tw/dgbasall/webMain.aspx?sdmx/a070107020/1+2+3+4+5+6...M.&startTime=2018-00&endTime=2023-09`
      )

      const total = response.data.data.dataSets[0].series[0].observations
      const newTotal = Object.values(total).flat()

      // Update the state with the new data
      setData(newTotal)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData() // Call the fetchData function when the component mounts
  }, [])

  // 過濾資料並更新狀態
  const filterDataByMonth = () => {
    // 這只是一個示例，你可以根據需要定義不同的過濾邏輯
    const filteredData = data.filter(
      (value, index) => index % 12 === parseInt(selectedMonth, 10) - 1
    )
    setData(filteredData)
  }

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Corn vs wheat estimated production for 2020',
      align: 'left',
    },
    subtitle: {
      text:
        'Source: <a target="_blank" ' +
        'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      align: 'left',
    },
    xAxis: {
      categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
      crosshair: true,
      accessibility: {
        description: 'Countries',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '1000 metric tons (MT)',
      },
    },
    tooltip: {
      valueSuffix: ' (1000 MT)',
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'total',
        data,
      },
    ],
  }

  return (
    <>
      <div>
        <p>Select Month: </p>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={String(i + 1).padStart(2, '0')}>
              {String(i + 1).padStart(2, '0')}
            </option>
          ))}
        </select>
        <button onClick={filterDataByMonth}>Filter</button>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}
