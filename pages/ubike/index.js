import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import Ubikelist from '@/components/ubike/list'
import UbikeFilter from '@/components/ubike/filter'
import UbikeMap from '@/components/ubike/map'
import UbikeDetail from '@/components/ubike/detail'

export default function Ubikeindex() {
  const router = useRouter()
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [Area, setArea] = useState(null)
  const [selectedStation, setSelectedStation] = useState(null)
  const { sarea } = router.query

  //   YouBike2.0臺北市公共自行車即時資訊
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json`
      )

      // Update the state with the new data
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchData() // Call the fetchData function when the component mounts
  }, [])

  // 如果有查詢
  useEffect(() => {
    if (sarea) {
      const filtered = data.filter((item) => item.sarea === sarea)
      setFilteredData(filtered)
    } else {
      setFilteredData(data)
    }
  }, [data, sarea])

  // ** 分頁 **
  //每一頁 12 筆資料
  const itemsPerPage = 8

  // 這裡使用項目偏移量來控制當前頁顯示的項目。
  const [itemOffset, setItemOffset] = useState(0)

  // 模擬從其他資源獲取項目。
  const endOffset = itemOffset + itemsPerPage
  // console.log(`正在載入項目從 ${productOffset} 到 ${endOffset}`)
  const currentitems = filteredData.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(filteredData.length / itemsPerPage)

  // 當用戶點擊請求下一頁時調用。
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length
    // console.log(`用戶請求頁數 ${event.selected}，對應的偏移量為 ${newOffset}`)
    setItemOffset(newOffset)
  }

  //   console.log(selectedStation)
  return (
    <div className="container">
      <div className="d-flex uTitleWrapper justify-content-center">
        <img src="/images/YouBike.svg.png" alt="" className="ubikeLogo" />
        <h1 className="ubikeTitle">臺北市YouBike2.0公共自行車即時資訊</h1>
      </div>

      <div className="row uDetailWrapper">
        <div className="col">
          <UbikeFilter
            data={data}
            setSelectedStation={setSelectedStation}
            setArea={setArea}
          />
          <UbikeDetail selectedStation={selectedStation} />
        </div>
        <div className="col">
          <UbikeMap selectedStation={selectedStation} />
        </div>
      </div>
      {Area ? <p className="text-secondary">{Area}的所有站點：</p> : ''}
      <Ubikelist currentitems={currentitems} />
      {/* 分頁 */}
      <div className="mt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          // page-item
          pageClassName="pageBtn"
          previousClassName="pageBtn goBtn"
          nextClassName="pageBtn goBtn"
          breakClassName="pageBtn"
          //active
          activeClassName="pageActive"
          //container
          containerClassName="pageContainer"
          //link
          pageLinkClassName="pageLink"
          previousLinkClassName="pageLink goLink"
          nextLinkClassName="pageLink goLink"
          breakLinkClassName="pageLink"
        />
      </div>
    </div>
  )
}
