import './setsZoov.scss';
import { useState } from 'react';
import SetZoovCard from '../setZoovCard/SetZoovCard';
import apple from '../../image/apple.png';
import redmeat from '../../image/redmeat.webp';
import Modal from '../modal/Modal';
import ModalCount from '../modalCount/ModalCount';

const SetsZoov = () => {

const [modal, setModal] = useState(false);
const [butid, setButId] = useState(null);
const [modalCount, setModalCount] = useState(false);

const sectionCard1 = [
  {
    "title": "Для собак до 10кг",
    "set": "Набор M",
    "meats": "4 шт. – баранина/кролик 3 шт. – говядина/индейка",
    "weight": "Вес каждой упаковки – 300г",
    "oldprice": "2 423.",
    "newprice": "1 680.",
    "picture": "./image/dog1.webp",
    "id": 1
  },
  {
    "title": "Для собак до 15кг",
    "set": "Набор L",
    "meats": "4 шт. – баранина/кролик 3 шт. –  говядина/индейка",
    "weight": "Вес каждой упаковки – 500г",
    "oldprice": "3 983.",
    "newprice": "2 770.",
    "picture": "./image/dog2.webp",
    "id": 2
  },
  {
    "title": "Для собак до 20кг",
    "set": "Набор XL",
    "meats": "4 шт. – баранина/кролик 3 шт. –  говядина/индейка",
    "weight": "Вес каждой упаковки – 700г",
    "oldprice": "5 437.",
    "newprice": "3 810.",
    "picture": "./image/dog3.webp",
    "id": 3
  }
]

  return(
  <section id='sets' className="sets">

    <div className="container">

      <div className="sets__titlewrap">
        <div className="sets__boldsets">Пробные наборы от ZOOOV</div>
        <div className="sets__descr">Порой очень сложно определиться с выбором и хочется попробовать всё и сразу. Ваш хвостик может попробовать разные вкусы и определится что ему больше нравится.</div>
      </div>

      <div className="sets__bigwrap">
        {
          sectionCard1.map(({title, set, meats, weight, oldprice, newprice, id, picture}) => {
            return <SetZoovCard setButId = {setButId} modal = {modal} setModal = {setModal} key={id} title = {title} set = {set} meats = {meats} weight = {weight} oldprice = {oldprice} newprice = {newprice} picture={picture} id = {id}/>
          })

        }
        {
            modal ? <Modal data = {sectionCard1} butId = {butid}  modal = {modal} setModal = {setModal}/> : null
        }
        
        <div className="sets__calc">
        {
          modalCount ? <ModalCount modalCount = {modalCount} setModalCount = {setModalCount}/> : null
        }
          <div className="sets__calctext">
          Рассчитаем в каком количестве нужно кормить вашего хвостика рационами Zooov
          </div>
          <button onClick={() => setModalCount(true)} className="sets__calcbutton">Расчитать</button>
          <div className="sets__applemeatwrap">

            <div className="sets__applewrap"><img src={apple} alt="apple" /></div>
            <div className="sets__meatwrap"><img src={redmeat} alt="redmeat" /></div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
export default SetsZoov;