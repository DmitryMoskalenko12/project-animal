import './setsZoov.scss';
import dog1 from '../../image/dog1.png';
import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';

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
        <div className="sets__cardwrap">

          <div className="sets__img">
            <div className="sets__imgtext">Для собак до 10кг</div>
            <img src={dog1} alt="dog1" />
          </div>

          <div className="sets__set">Набор M</div>

          <div className="sets__num">
            4 шт. – баранина/кролик <br />
            3 шт. – говядина/индейка
          </div>

          <div className="sets__weight">Вес каждой упаковки – 300г</div>

          <div className="sets__pricewrap">
            <div className="sets__oldprice">2 423.</div>
            <div className="sets__newprice">1 680.</div>
          </div>

          <div className="sets__button">Заказать</div>

          </div>
      </div>
    </div>
  </section>
  )
}
export default SetsZoov;