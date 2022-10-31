import './modalRationForm.scss';
import { useState } from 'react';

const ModalRationForm = (props) =>{

  return(
    <div className='modalrationform'>
      <div className="modalrationform__wrapall">
          <div className="modalrationform__imgwrap">
                <img src={props.data[props.id - 1].picture} alt={props.data[props.id - 1].type}/>
          </div>

              <div className="modalrationform__wrapcontent">
              <div className="modalrationform__title">{props.data[props.id - 1].type} </div>
              <div className="modalrationform__meat">{props.data[props.id - 1].chick}</div>

              <form className="modalrationform__form">
              <div className="modalrationform__coll">
                <input type="text" required placeholder='Имя' className="modalrationform__name" />
                <input type="number" required placeholder='Телефон' className="modalrationform__phone" />
                <input type="text" required placeholder='Адрес' className="modalrationform__addr" />

                <select name="" id="" className="modalrationform__weight">
                  <option value="">700 г</option>
                  <option value="">500 г</option>
                  <option value="">300 г</option>
                  <option value="">150 г</option>
                  <option value="">100 г</option>
                </select>
              </div>

              <div className="modalrationform__calc">
               <div className="modalrationform__calctitle">Количество:</div>

               <div className="modalrationform__plusminus">
                <span className="modalrationform__plus">+</span>
                <div className="modalrationform__state">1</div>
                <span className="modalrationform__minus">-</span>
               </div>

              </div>
              <div className="modalrationform__checkboxwrap">
                  <input  type="checkbox" required name="checkboxform" id='modal__checkboxform'/>
                  <label htmlFor='modal__checkboxform' className="modalrationform__checkdescr">
                  Даю согласие на обработку персональных данных
                  </label>
              </div>

              <div className="modalrationform__butprice">
              <div className="modalrationform__price">828грн</div>
              <div className="modalrationform__butform">Оформить заказ</div>
              </div>

              </form>
              </div>
      </div>

    </div>
  )
}
export default ModalRationForm;