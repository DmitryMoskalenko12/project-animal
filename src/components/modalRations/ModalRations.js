import './modalRations.scss';
import { useState } from 'react';
import ModalRationForm from '../modalRationForm/ModalRationForm';

const ModalRations = (props) =>{

  const [formModal, setFormModal] = useState(false);

const content = (
  <div className='modalrations__wrapall'>
    <div onClick={() => props.setModal(false)} className="modalrations__close">&times;</div>
    <div className="modalrations__gridwrapp">
      <div className="modalrations__imgwrap">
        <img src={props.data[props.butid - 1].picture} alt="pict1" />
      </div>
      <div className="modalrations__contentwrapp">
        <div className="modalrations__title">{props.data[props.butid - 1].type} </div>
        <div className="modalrations__chick">{props.data[props.butid - 1].chick}</div>
        <div className="modalrations__vitamin">{props.data[props.butid - 1].descr}</div>
        <div className="modalrations__include"><span>Состав:</span> Мякоть баранины (46,5%), мясо кролика (23,5%), кости
        кролика (10%), печень баранины (5%), почки бараньи (2,5%),
        рубец бараний (2,5%), кабачок (3%), брокколи (3%), семена
        конопли (2%), шпинат (1%), яблоко (1%), льняное масло,
        конопляное масло.</div>
        <div className="modalrations__call"> <span>Пищевая ценность на 100г:</span> 174.9 ккал, 
        белки 16.45, жиры 11.9, углеводы 0.60</div>
        <div className="modalrations__weight">{props.data[props.butid - 1].weight}</div>
        <button className="modalrations__button" onClick={() => setFormModal(true)}>Заказать</button>
      </div>
    </div>
  </div>
)
  return(
    <div onClick={() => props.setModal(false)} /* style={{display: props.modal ? 'block': 'none'}} */ className={props.modal ? 'modalrations active' : 'modalrations' }>
    <div onClick={(e) => e.stopPropagation()} className= "modalrations__content">

     {
   /*  error ? <div style={{textAlign: 'center',fontSize: '20px', marginTop: '80px', color: 'red'}}>Произошла ошибка</div>: showModal ? content : <ThanksModal/> */ formModal ? <ModalRationForm setModal = {props.setModal} setFormModal = {setFormModal} data = {props.data} id = {props.butid}/> : content
     }

    </div>
  </div>
  )
}
export default ModalRations;