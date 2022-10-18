import dog from '../../image/dog.png';
import './barf.scss';
import { Link } from 'react-router-dom';
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
    </div>
  </section>
)
}
export default Barf;