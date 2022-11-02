import { useState, useEffect, Fragment, useMemo } from "react";
import { useHttp } from "../../hooks/http.hook";
import './love.scss';
import axios from "axios";

const Love = () =>{

const [data, setData] = useState([]);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);
const [totalCount, setTotalCount] = useState(0);

const postData = async (limit = 10, page = 1) =>{
const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
return res
}

function totalCounts() {
  return Math.ceil(totalCount / limit)
}

const pages = totalCounts()


const getData = async () =>{
  const res = await postData(limit, page)
  setData(res.data)
  setTotalCount(res.headers['x-total-count'])

}
const result = []
for (let i = 0; i < pages; i++) {
  result.push(i + 1);
}

useEffect(() =>{
getData()

},[page])

console.log('ger')
  return(
    <>
       {
          data.map(({body, title, id})=>{
            return(
              <Fragment key={id}>
               <div  className="love">
                 <div className="love__number">{id}</div>
                <div className="love__title">{title}</div>
                <div className="love__body">{body}</div>
              </div>
              </Fragment>
              
            )
         })
        }

         
          <div className="box">
          {    
          result.map(i =>{
              return (          
              <div key={i} onClick={()=> {getData(); setPage(i)}} className="but">
                {i}
              </div>
             )
          })
        }
          </div>
        
        

    </>

 )
}
export default Love;