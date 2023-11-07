import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import TemplateData from '@/data/highcharts-temp'
import axios from 'axios'

// const options = {
//   series: [
//     {
//       name: 'profit',
//       data: [123, 233, 323, 123],
//     },
//   ],
// }

export default function index() {
  const getTotal = async () => {
    const url = `https://nstatdb.dgbas.gov.tw/dgbasall/webMain.aspx?sdmx/a070107020/1+2+3+4+5+6...M.&startTime=2018-00&endTime=2023-09`
    const res = await axios.get(url)
    console.log(res.data.data.dataSets[0].series[0].observations)
  }

  return (
    <>
      <button className="btn btn-dark" onClick={getTotal}>
        123
      </button>
      <HighchartsReact
        highcharts={Highcharts}
        options={TemplateData}
        // constructorType={'mapChart'}
      />
    </>
  )
}
