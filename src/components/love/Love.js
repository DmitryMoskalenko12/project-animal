import { useState, useEffect, Fragment, useMemo } from "react";
import './love.scss';
import axios from "axios";

const Love = () =>{

const [data, setData] = useState([]);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);
const [totalCount, setTotalCount] = useState(0);
const [search, setSearch] = useState('')

const postData = async(limit = 10, page = 1) =>{
const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
return res
}

function totalCounts() {
  return Math.ceil(totalCount / limit)
}

const pages = totalCounts(); 

const getData = async() =>{
  const res = await postData(limit, page)
  setData(res.data)
  setTotalCount(res.headers['x-total-count'])

}


const result = []
for (let i = 0; i < pages; i++) {
  result.push(i + 1);
}
/* удаление */
const delItem = (id) =>{
setData(data.filter(item =>  item.id !== id))
}
/* поиск */
const onSearch = (data, word) =>{
  if (word.length === 0) {
    return data
  }
  return data.filter(item => item.title.includes(word))
}

useEffect(() =>{
getData()

},[page])

console.log('ger')
const res = onSearch(data, search); 
console.log(res)
  return(
    <>
    <input onChange={(e) => {
      setSearch(e.target.value)
      }} className="inp" type="text" placeholder="Enter here" />
       {
          res.map(({body, title, id})=>{
            return(
              <Fragment key={id}>
               <div  className="love">
                 <div className="love__number">{id}</div>
                <div className="love__title">{title}</div>
                <div className="love__body">{body}</div>
              </div>
              <div onClick={() => delItem(id)} className="delete">Delete</div>
              </Fragment>
              
            )
         })
        }

         
          <div className="box">
          {    
          result.map(i =>{
              return (          
              <div key={i} onClick={()=> {getData(); setPage(i)}} className={page === i ? 'but active': 'but'}>
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