import './rationsList.scss';
import RationsCard from '../rationsCard/RationsCard';
import { useState} from 'react';
import ellipse from '../../image/Ellipse.png';
import ModalRations from '../modalRations/ModalRations';
import FeedingNorm from '../feedingNorm/FeedingNorm';

const RationsList = () => {

  const rationsCard = [
    {
      "picture": "./image/pict1.webp",
      "type": "Для взрослых собак",
      "chick": "Индейка/Говядина",
      "descr": "Подходит для ежедвеного кормления. Богат животными белками и Омега-3.",
      "weight": "700г / 500г / 300г / 150г / 100г",
      "price": "250 грн",
      "id": 1
    },
    {
      "picture": "./image/pict2.webp",
      "type": "Для щенков ",
      "chick": "Индейка/Говядина",
      "descr": "Подходит для ежедвеного кормления. Богат животными белками и Омега-3.",
      "weight": "700г / 500г / 300г / 150г / 100г",
      "price": "400 грн",
      "id": 2
    },
    {
      "picture": "./image/pict3.webp",
      "type": "Для взрослых собак",
      "chick": "Баранина/Кролик",
      "descr": "Подходит для ежедвеного кормления. Богат животными белками и Омега-3.",
      "weight": "700г / 500г / 300г / 150г / 100г",
      "price": "500 грн",
      "id": 3
    },
    {
      "picture": "./image/pict4.webp",
      "type": "Для щенков ",
      "chick": "Баранина/Кролик",
      "descr": "Подходит для ежедвеного кормления. Богат животными белками и Омега-3.",
      "weight": "700г / 500г / 300г / 150г / 100г",
      "price": "325 грн",
      "id": 4
    }
  ]
  
  const [modal, setModal] = useState(false);
  const [butid, setButId] = useState(null);
 
return(
  <section id='rations' className="rations">
    <div className="container">
    <div className="rations__titlewrap">
        <div className="rations__boldsets">Рационы <span>ZOOOV <img src={ellipse} alt="ellipse" /></span></div>
        <div className="rations__descr">Система питания взрослой собаки не подойдет для щенка, поэтому мы создали разные
         по составу рационы ZOOOV. Вы сможете заказать полноценное питание исходя из возраста, веса и даже вкусовых предпочтений вашего друга. ZOOOV  заботится о каждой собаке.</div>
      </div>

      <div className="rations__bigwrap">
        {
          modal ? <ModalRations data = {rationsCard} butid = {butid} modal = {modal} setModal = {setModal}/>: null
        }
        {
          rationsCard.map(({picture, type, chick, descr, weight, id})=>{
            return <RationsCard setModal = {setModal} setButId = {setButId} key={id} picture = {picture} type = {type} chick = {chick} descr = {descr} weight = {weight} id = {id}/>
          })
        }
    
    </div>
    </div>
    <FeedingNorm/>
  </section>
)
}
export default RationsList;