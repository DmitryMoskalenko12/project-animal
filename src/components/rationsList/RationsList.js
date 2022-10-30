import './rationsList.scss';
import RationsCard from '../rationsCard/RationsCard';
import { useHttp } from '../../hooks/http.hook';
import { useState, useEffect } from 'react';

const RationsList = () =>{
  const {request} = useHttp();
  const [data, setData] = useState([]);

    useEffect(()=>{
      getData();
      //eslint-disable-next-line
    },[])

 const getData = () =>{
  request('http://localhost:3001/rationsCard')
   .then((res) => setData(res))
 }

return(
  <section className="rations">
    <div className="container">
    <div className="rations__titlewrap">
        <div className="rations__boldsets">Рационы ZOOOV</div>
        <div className="rations__descr">Система питания взрослой собаки не подойдет для щенка, поэтому мы создали разные
         по составу рационы ZOOOV. Вы сможете заказать полноценное питание исходя из возраста, веса и даже вкусовых предпочтений вашего друга. ZOOOV  заботится о каждой собаке.</div>
      </div>
    </div>

<div className="rations__bigwrap">
   {
     data.map(({picture, type, chick, descr, weight, id})=>{
      return <RationsCard key={id} picture = {picture} type = {type} chick = {chick} descr = {descr} weight = {weight} id = {id}/>
     })
   }
</div>
   
  </section>
)
}
export default RationsList;