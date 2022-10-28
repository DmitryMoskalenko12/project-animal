import './modalCount.scss';

const ModalCount = (props) =>{
  return(
    <div className = {props.modalCount ? 'modalcount active': 'modalcount'}>
    <div className="modalcount__content" onClick={(e) => e.stopPropagation()}>
      <div className="modalcount__close" onClick={() => props.setModalCount(false)}>&times;</div>

      <div className="modalcount__ratio">Рассчет рациона</div>
      <div className="modalcount__descr">
        Заполните информацию и мы свяжемся с вами, чтобы подсказать с подбором рациона для вашего хвостика.
        Или напишите нам в мессендерах <a href='#' className='modalcount__whatsapp'>WhatsApp</a> и <a href="#" className='modalcount__telegram'>Telegram.</a></div>

        <form className='modalcount__form'>

          <div className="modalcount__inpwrp">

          <input className='modalcount__oldinp' name='type' type="radio"/> Взрослая собака
          <input className='modalcount__littleinp' name='type' type="radio"/>Щенок

          </div>

          <input className='modalcount__weight' type="text" placeholder='Вес (кг)'/>
          <input className='modalcount__age' type="text" placeholder='4'/>
          <input className='modalcount__type' type="text" placeholder='Порода собаки'/>
          <input className='modalcount__name' type="text" placeholder='Ваше имя'/>
          <input className='modalcount__number' type="number" placeholder='Телефон'/>
          <textarea className='modalcount__area' type="text" placeholder='Если у вашего хвостика есть особенности
           здоровья – напишите об этом...' />

           <label className="modalcount__check">
           Даю согласие на обработку персональных данных
            <input type="checkbox" className="modalcount__checkinp" />
           </label>

           <button className="modalcount__button">Расчитать</button>
        </form>
    </div>
    </div>
  )
}
export default ModalCount;