import './setsZoov.scss';
import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import SetZoovCard from '../setZoovCard/SetZoovCard';

const SetsZoov = () => {

const [data, setData] = useState([]);
const {request} = useHttp();

useEffect(() =>{
  request('http://localhost:3001/sectionCard1')
  .then(res => setData(res))
  .catch(console.log('error'))
  //eslint-disable-next-line
},[])

  return(
  <section className="sets">
    <div className="container">

      <div className="sets__titlewrap">
        <div className="sets__boldsets">Пробные наборы от ZOOOV</div>
        <div className="sets__descr">Порой очень сложно определиться с выбором и хочется попробовать всё и сразу. Ваш хвостик может попробовать разные вкусы и определится что ему больше нравится.</div>
      </div>

      <div className="sets__bigwrap">
        {
          data.map(({title, set, meats, weight, oldprice, newprice, id, picture}) => {
            return <SetZoovCard key={id} title = {title} set = {set} meats = {meats} weight = {weight} oldprice = {oldprice} newprice = {newprice} picture={picture}/>
          })
        }
      </div>
    </div>
  </section>
  )
}
export default SetsZoov;