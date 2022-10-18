import dog from '../../image/dog.png';
import './barf.scss';
import { Link } from 'react-router-dom';
import meat from '../../image/meat.png';
import bounce from '../../image/bounce.png';
import v from '../../image/v.png';
import p from '../../image/p.png';
import k from '../../image/k.svg';
import nu from '../../image/nu.png';
import fr from '../../image/fr.png';

const Barf = () => {
  
return(
  <section className="barf">
    <Link end to='/' className="back">Back</Link>
    <div className="container">
      <div className="barf__wrap">
      <div className="barf__descr">
        <h1 className="barf__title">Что такое BARF</h1>
        <div className="barf__content">
        BARF (Biologically Appropriate Raw Food) — система питания собак, основанная на сырых натуральных продуктах. Такой рацион максимально приближен к естественному пищевому поведению хищников, а значит биологически правилен. 
        </div>
        <div className="barf__list">После перехода на питание по системе BARF у собак:</div>
        <ul className="barf__wraplist">
          <li>Нормализуется пищеварение</li>
          <li>Проходят аллергические реакции</li>
          <li>Прекращается образование зубного камня</li>
          <li>Появляется больше энергии</li>
          <li>Увеличивается продолжительность жизни</li>
        </ul>
      </div>

      <div className="barf__img"><img src={dog} alt="dog" /></div>
      </div>  

       <div className="barf__bigwrap">
        <div className="barf__big">

          <div className="barf__wrapproduct">
            <ul className="barf__ul">
              <li className="barf__listbig ">Для взрослых </li>
              <li className="barf__list1 font"> <img src={meat} alt="meat" />  Мясо – 70%</li>
              <li className="barf__list2 font"> <img src={bounce} alt="bounce" />  Кости – 10%</li>
              <li className="barf__list3 font"> <img src={v} alt="v" /> Овощи – 7%</li>
              <li className="barf__list4 font"> <img src={p} alt="p" /> Печень – 5%</li>
            </ul>
            <ul className="barf__ul">
              <li className="barf__list5 font"> <img src={k} alt="k" /> Субпродукты – 5%</li>
              <li className="barf__list6 font"> <img src={nu} alt="nu" /> Семена/Орехи – 2% </li>
              <li className="barf__list7 font"> <img src={fr} alt="nfr" /> Фрукты – 1%</li>
            </ul>
          </div>
        </div>

        <div className="barf__little">
          <div className="barf__wrapproductlit">
            <ul className="barf__ul">
              <li className="barf__listlit">Для щенков </li>
              <li className="barf__list1 font"> <img src={meat} alt="meat" />  Мясо – 58%</li>
              <li className="barf__list2 font"> <img src={bounce} alt="bounce" />  Кости – 17%</li>
              <li className="barf__list3 font"> <img src={v} alt="v" /> Овощи – 7%</li>
              <li className="barf__list4 font"> <img src={p} alt="p" /> Печень – 7%</li>
            </ul>
            <ul className="barf__ul">
              <li className="barf__list5 font"> <img src={k} alt="k" /> Субпродукты – 7%</li>
              <li className="barf__list6 font"> <img src={nu} alt="nu" /> Семена/Орехи – 3% </li>
              <li className="barf__list7 font"> <img src={fr} alt="nfr" /> Фрукты – 1%</li>
            </ul>
          </div>
        </div>

       </div>
    </div>
  </section>
)
}
export default Barf;