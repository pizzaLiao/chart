import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import TemplateData from '@/data/highcharts-temp'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Test() {
  const [data, setData] = useState([
    {
      name: 'Corn',
      data: [406292, 260000, 107000, 68300, 27500, 14500],
    },
    {
      name: 'Wheat',
      data: [51086, 136000, 5500, 141000, 107180, 77000],
    },
  ])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://nstatdb.dgbas.gov.tw/dgbasall/webMain.aspx?sdmx/a070107020/1+2+3+4+5+6...M.&startTime=2018-00&endTime=2023-09`
      )

      const total = response.data.data.dataSets[0].series[0].observations
      const allTotal = Object.values(total).flat()

      const Asia = response.data.data.dataSets[0].series[1].observations
      const allAsia = Object.values(Asia).flat()

      const America = response.data.data.dataSets[0].series[2].observations
      const allAmerica = Object.values(America).flat()

      const Oceania = response.data.data.dataSets[0].series[3].observations
      const allOceania = Object.values(Oceania).flat()

      const Africa = response.data.data.dataSets[0].series[4].observations
      const allAfrica = Object.values(Africa).flat()

      // Update the state with the new data
      setData([
        {
          name: 'total',
          data: allTotal,
        },
        {
          name: 'Asia',
          data: allAsia,
        },
        {
          name: 'America',
          data: allAmerica,
        },
        {
          name: 'Oceania',
          data: allOceania,
        },
        {
          name: 'Africa',
          data: allAfrica,
        },
      ])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData() // Call the fetchData function when the component mounts
  }, [])

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
      categories: ['12', 'China', 'Brazil', 'EU', 'India', 'Russia'],
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
    series: data,
  }

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // constructorType={'mapChart'}
      />
    </>
  )
}
