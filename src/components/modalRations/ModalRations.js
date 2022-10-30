import './modalRations.scss';
const ModalRations = (props) =>{
const content = (
  <div className='modalrations__wrapall'>
    <div className="modalrations__gridwrapp">
      <div className="modalrations__imgwrap">
        <img src="./image/pict1.png" alt="pict1" />
      </div>
      <div className="modalrations__contentwrapp">
        <div className="modalrations__title">Для взрослых собак </div>
        <div className="modalrations__chick">Баранина/Кролик</div>
        <div className="modalrations__vitamin">Подходит для ежедвеного кормления. Богат животными белками и Омега-3.</div>
        <div className="modalrations__include">Состав: Мякоть баранины (46,5%), мясо кролика (23,5%), кости
        кролика (10%), печень баранины (5%), почки бараньи (2,5%),
        рубец бараний (2,5%), кабачок (3%), брокколи (3%), семена
        конопли (2%), шпинат (1%), яблоко (1%), льняное масло,
        конопляное масло.</div>
        <div className="modalrations__call">Пищевая ценность на 100г: 174.9 ккал, 
        белки 16.45, жиры 11.9, углеводы 0.60</div>
        <div className="modalrations__weight">500г/300г/100г</div>
        <button className="modalrations__button">Заказать</button>
      </div>
    </div>
  </div>
)
  return(
    <div onClick={() => props.setModal(false)} /* style={{display: props.modal ? 'block': 'none'}} */ className={props.modal ? 'modalrations active' : 'modalrations' }>
    <div onClick={(e) => e.stopPropagation()} className= "modalrations__content">

      <div onClick={() => props.setModal(false)} className="modalrations__close">&times;</div>

     {
   /*  error ? <div style={{textAlign: 'center',fontSize: '20px', marginTop: '80px', color: 'red'}}>Произошла ошибка</div>: showModal ? content : <ThanksModal/> */ content
     }

    </div>
  </div>
  )
}
export default ModalRations;