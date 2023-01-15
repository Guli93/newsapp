import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default function Newses(props) {

const [news,setNews]=useState([])
const [page,setPage]=useState(1)
const [totalResult,setTotalResult]=useState(0)
const[loading,setLoading]=useState(false)

const updateNews=async(pageN)=>{
setLoading(true)
let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e8d49c1a8c06476d93a9d1791c1eafe4&category=${props.category}&pageSize=${props.pageSize}&page=${pageN}`;
const data=await fetch(url);
const parsedData=await(data.json())
setNews(parsedData.articles)
setLoading(false)
setTotalResult(parsedData.totalResults)
}
 
 console.log(page)
useEffect(()=>{
  
const fetchApi=async()=>{
updateNews(page)

}
fetchApi()
},[])

// const nextPage=async()=>{
// let pageN=page+1;
// console.log("pageN"+pageN)
// updateNews(pageN)
// setPage(page+1)
// }
// const previousPage=async()=>{
//  console.log('previous')
//  let pageN=page-1;
//  updateNews(pageN)
//  setPage(page-1)

// }
const fetchMoreData=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e8d49c1a8c06476d93a9d1791c1eafe4&category=${props.category}&pageSize=${props.pageSize}&page=${page+1}`;
  setPage(page+1)
  const data=await fetch(url);
  const parsedData=await(data.json())
  setNews(news.concat(parsedData.articles))
  setTotalResult(parsedData.totalResults)
}
  return (
    <>
     <h2 style={{marginTop:'80px',marginBottom:'40px'}} className='text-center'>NewsHub - Top Headlines from {props.category}</h2>
    {loading && <Spinner/>}
     
      <InfiniteScroll
          dataLength={news.length}
          next={fetchMoreData}
          hasMore={news.length!==totalResult}
          loader={<Spinner/>}
        >
      <div className="container">
      <div className="row">  

      {!loading && news.map((element)=>{
       return <div className="col-md-4">
        <NewsItem title={element.title} url={element.url} img={element.urlToImage} description={element.description}/>

        </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
   
     {/* <div className="buttons d-flex justify-content-between my-3">
     <button type="button" disabled={page<=1} onClick={previousPage}className="btn btn-sm btn-primary">&laquo; Previous</button>
     <button type="button" disabled={Math.ceil(totalResult/props.pageSize)<=page} onClick={nextPage} className="btn btn-sm btn-primary">Next &raquo;</button>
     </div> */}
   
    </>
  )
}
