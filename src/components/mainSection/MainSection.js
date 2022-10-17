import './mainSection.scss';
import logo from '../../image/logo.png';

const MainSection = () => {
  return(
    <section className='main-section'>
      <div className="container">
      <nav className='main-section__nav'>
        <a className='main-section__logo' href="#"><img src={logo} alt="logo" /></a>
       <ul className="main-section__menu">
        <li className="main-section__item">
          <a href="#" className="main-section__link">
          BARF
          </a>
        </li>
        <li className="main-section__item">
          <a href="#" className="main-section__link">
          Рационы
          </a>
        </li>
        <li className="main-section__item">
          <a href="#" className="main-section__link">
          ZOOOV
          </a>
        </li>
        <li className="main-section__item">
          <a href="#" className="main-section__link">
          О нас
          </a>
        </li>
        <li className="main-section__item">
          <a href="#" className="main-section__link">
          Доставка
          </a>
        </li>
        <li className="main-section__item">
          <a href="#" className="main-section__link">
          FAQ
          </a>
        </li>
        <li className="main-section__item">
          <a href="#" className="main-section__link">
          Контакты
          </a>
        </li>
       </ul>
      </nav>
     <div className="main-section__wrapper">
     <div className="main-section__title">Питание, которое <span>полюбит</span> ваш хвостик</div>
     <div className="main-section__des">Натуральные рационы питания для собак по системе BARF</div>
     <button className='main-section__button'>Выбрать рацион</button>
    </div>
     </div>
    </section>
  )
}
export default MainSection;