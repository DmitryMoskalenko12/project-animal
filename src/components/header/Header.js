import logo from '../../image/logo.png';

const Header = () => {

return(
<nav className='main-section__nav'>
  <a className='main-section__logo' href="#main"><img src={logo} alt="logo" /></a>
  <ul className="main-section__menu">
  <li className="main-section__item">
    <a href='#barf' className="main-section__link">
    BARF
    </a>
  </li>
  <li className="main-section__item">
    <a href={'#rations'} className="main-section__link">
    Рационы
    </a>
  </li>
  <li className="main-section__item">
    <a href='#sets' className="main-section__link">
    наборы ZOOOV
    </a>
  </li>
  <li className="main-section__item">
    <a href={'#about'} className="main-section__link">
    О нас
    </a>
  </li>
  <li className="main-section__item">
    <a href={'#faq'} className="main-section__link">
    Доставка
    </a>
  </li>
  <li className="main-section__item">
    <a href={'#delivery'} className="main-section__link">
    FAQ
    </a>
  </li>
  <li className="main-section__item">
    <a href={'#footer'} className="main-section__link">
    Контакты
    </a>
  </li>
  </ul>
</nav>
)
}
export default Header;