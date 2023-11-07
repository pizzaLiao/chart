// import React from 'react'
import axios from 'axios'
import { object } from 'prop-types'
import { useState } from 'react'

export default function TemplateData() {
  const [data, setData] = useState([])

  const total = async () => {
    const url = `https://nstatdb.dgbas.gov.tw/dgbasall/webMain.aspx?sdmx/a070107020/1+2+3+4+5+6...M.&startTime=2018-00&endTime=2023-09`
    const res = await axios.get(url)
    console.log(res.data.data.dataSets[0].series[0].observations)
    return res.data.data.dataSets[0].series[0].observations
  }
  const newtotal = object.values(total)
  setData(newtotal)
  return {
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
        name: 'Corn',
        data: [406292, 260000, 107000, 68300, 27500, 14500],
      },
      {
        name: 'Wheat',
        data: [51086, 136000, 5500, 141000, 107180, 77000],
      },
    ],
  }
}
