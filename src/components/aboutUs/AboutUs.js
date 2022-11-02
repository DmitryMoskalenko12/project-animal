import leaf from '../../image/Leaf.png';
import heart from '../../image/Heartbeat.png';
import paw from '../../image/PawPrint.png';
import smiley from '../../image/Smiley.png';
import './aboutUs.scss';
import { Link } from 'react-router-dom';
import Love from '../love/Love';

const AboutUs = () =>{
return(
  <section className="why">
    <Link end to='/' className="back back__why">Back</Link>
    <div className="container">
      <h1 className="why__title">Почему ZOOOV</h1>
      <div className="why__wrapper">

        <div className="why__leafwrap">
          <div className="why__imgwrap">
            <img src={leaf} alt="leaf" />
          </div>
          <div className="why__natural">Натурально</div>
          <div className="why__descr">Все продукты тщательно отбираем у проверенных поставщиков.</div>
        </div>

        <div className="why__heartwrap">
          <div className="why__imgwrap">
            <img src={heart} alt="heart" />
          </div>
          <div className="why__natural">Здорово</div>
          <div className="why__descr">Система питания, которая продлевает жизнь
          вашего хвостика.
          </div>
        </div>

        <div className="why__pawwrap">
          <div className="why__imgwrap">
            <img src={paw} alt="paw" />
          </div>
          <div className="why__natural">Сбалансированно</div>
          <div className="why__descr">Сделайте заказ на сайте
          и с вами свяжется  наш менеджер для уточнения деталей.</div>
          </div>

        <div className="why__smileywrap">
          <div className="why__imgwrap">
            <img src={smiley} alt="smiley" />
          </div>
          <div className="why__natural">Удобно</div>
          <div className="why__descr">Достаточно разморозить порцию ZOOOV,  удалить отрывную крышку с лотка и обед для вашего питомца готов.</div>
        </div>
      </div>
    </div>
    <Love/>
  </section>
)
}
export default AboutUs;