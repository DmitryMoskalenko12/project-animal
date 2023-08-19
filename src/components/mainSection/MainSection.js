import './mainSection.scss';
import Header from '../header/Header';
const MainSection = () => {
  return(
    <section id='main' className='main-section'>
      <div className="container">
      <Header/>
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