import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {

return(
<nav className='main-section__nav'>
  <a className='main-section__logo' href="#"><img src={logo} alt="logo" /></a>
  <ul className="main-section__menu">
  <li className="main-section__item">
    <Link end to='/barf' className="main-section__link">
    BARF
    </Link>
  </li>
  <li className="main-section__item">
    <a href="#" className="main-section__link">
    Рационы
    </a>
  </li>
  <li className="main-section__item">
    <Link to='/sets' className="main-section__link">
    наборы ZOOOV
    </Link>
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
)
}
export default Header;