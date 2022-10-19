import './setsZoov.scss';
import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import SetZoovCard from '../setZoovCard/SetZoovCard';
import apple from '../../image/apple.png';
import redmeat from '../../image/redmeat.png';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
const SetsZoov = () => {

const [data, setData] = useState([]);
const [modal, setModal] = useState(false);

const {request} = useHttp();

useEffect(() =>{
  request('http://localhost:3001/sectionCard1')
  .then(res => setData(res))
  .catch(console.log('error'))
  //eslint-disable-next-line
},[])

  return(
  <section className="sets">
    <Link end to='/' className="back">Back</Link>
    <div className="container">

      <div className="sets__titlewrap">
        <div className="sets__boldsets">Пробные наборы от ZOOOV</div>
        <div className="sets__descr">Порой очень сложно определиться с выбором и хочется попробовать всё и сразу. Ваш хвостик может попробовать разные вкусы и определится что ему больше нравится.</div>
      </div>

      <div className="sets__bigwrap">
        {
          data.map(({title, set, meats, weight, oldprice, newprice, id, picture}) => {
            return <SetZoovCard modal = {modal} setModal = {setModal} key={id} title = {title} set = {set} meats = {meats} weight = {weight} oldprice = {oldprice} newprice = {newprice} picture={picture}/>
          })

        }
        {
          modal ? <Modal  modal = {modal} setModal = {setModal}/>: null
        }

        <div className="sets__calc">
          <div className="sets__calctext">
          Рассчитаем в каком количестве нужно кормить вашего хвостика рационами Zooov
          </div>
          <button className="sets__calcbutton">Расчитать</button>
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