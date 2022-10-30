import './rationsList.scss';
import RationsCard from '../rationsCard/RationsCard';
import { useHttp } from '../../hooks/http.hook';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ellipse from '../../image/Ellipse.png';
import ModalRations from '../modalRations/ModalRations';

const RationsList = () =>{

  const {request} = useHttp();
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [butid, setButId] = useState(null);
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
    <Link end to='/' className="back">Back</Link>
    <div className="container">
    <div className="rations__titlewrap">
        <div className="rations__boldsets">Рационы <span>ZOOOV <img src={ellipse} alt="ellipse" /></span></div>
        <div className="rations__descr">Система питания взрослой собаки не подойдет для щенка, поэтому мы создали разные
         по составу рационы ZOOOV. Вы сможете заказать полноценное питание исходя из возраста, веса и даже вкусовых предпочтений вашего друга. ZOOOV  заботится о каждой собаке.</div>
      </div>
    </div>

<div className="rations__bigwrap">
  {
    modal ? <ModalRations data = {data} butid = {butid} modal = {modal} setModal = {setModal}/>: null
  }
   {
     data.map(({picture, type, chick, descr, weight, id})=>{
      return <RationsCard setModal = {setModal} setButId = {setButId} key={id} picture = {picture} type = {type} chick = {chick} descr = {descr} weight = {weight} id = {id}/>
     })
   }
</div>
   
  </section>
)
}
export default RationsList;