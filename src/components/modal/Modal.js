import './modal.scss';
import { useState } from 'react';
import ThanksModal from '../thanksModal/ThanksModal';
import { post } from '../../dummy-post/dummy-post';

const Modal = (props) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [tel, setTel] = useState('');
const [check, setCheck] = useState(false);
const [akkordion1, setAkkordion1] = useState(false);
const [akkordion2, setAkkordion2] = useState(false);
const [showModal, setShowModal] = useState(true);
const [error, setError] = useState(false);

const set = props.data[props.butId - 1].set,
      oldPrice = props.data[props.butId - 1].oldprice,
      newPrice = props.data[props.butId - 1].newprice;

const postData = () =>{

  const formData = {name: name, email: email, tel: tel, checkbox: check, set, oldPrice, newPrice}
  post(formData)
  .then(() => setName(''), setEmail(''), setTel(''), setCheck(false), setTimeout(()=>{props.setModal(false)}, 2000))
  .catch(()=> setError(true))
}
const content = (
  <div className='modal__wrapall'>
   <div className="modal__contentwrap">
        <div className="modal__imgwrap">
          <div className="modal__imgtext">{props.data[props.butId - 1].title}</div>
          <img src={props.data[props.butId - 1].picture} alt={props.data[props.butId - 1].title} />
        </div>

        <div className="modal__contentbigwrap">
          <div className="modal__modaltitle">
          {set}
          </div>

          <div className="modal__modalweight">{props.data[props.butId - 1].weight}</div>

          <div className="modal__butwrap1" onClick={() => setAkkordion1( akkordion1 => !akkordion1)}>
             <button className='modal__butrabbit'>Баранина/Кролик</button>
             <div className="modal__weight1">4 шт</div>
          </div>
          <div className="modal__akkordion1"  style={{display: akkordion1 ? 'block' : 'none'}}>
              Состав: Мякоть баранины (46,5%), мясо кролика (23,5%), кости
              кролика (10%), печень баранины (5%), почки бараньи (2,5%),
              рубец бараний (2,5%), кабачок (3%), брокколи (3%), семена
              конопли (2%), шпинат (1%), яблоко (1%), льняное масло,
              конопляное масло.
          </div>
           <div className="modal__butwrap2" onClick={() => setAkkordion2(akkordion2 => !akkordion2)}>
              <button className='modal__butcow'>Говядина/Индейка</button>
              <div className="modal__weight2">3 шт</div>
           </div>
           <div className="modal__akkordion2" style={{display: akkordion2 ? 'block' : 'none'}}>
              Состав: Мякоть баранины (46,5%), мясо кролика (23,5%), кости
              кролика (10%), печень баранины (5%), почки бараньи (2,5%),
              рубец бараний (2,5%), кабачок (3%), брокколи (3%), семена
              конопли (2%), шпинат (1%), яблоко (1%), льняное масло,
              конопляное масло.
              </div>
          

           <form onSubmit={(e) => {postData(); setShowModal(false); e.preventDefault()}} className='modal__form'>
            <input value={name} onChange={(e) => setName(e.target.value)} className='modal__name' type="text" name='name' required placeholder='Name' />
            <input value={tel} onChange={(e) => setTel(e.target.value)} className='modal__tel' type="number" name='phone' required placeholder='Tel'/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='modal__email' type="email" name='email' required placeholder='Email'/>

            <div className="modal__checkboxwrap">
            <input onChange={(e)=> setCheck(e.target.checked)} checked={check} type="checkbox" required name="checkbox" id='modal__checkbox'/>
            <label htmlFor='modal__checkbox' className="modal__checkdescr">
            Даю согласие на обработку персональных данных
            </label>
          </div>
          <div className="modal__butandprice">
            <div className="modal__pricewrap">
              <div className="modal__oldprice">{oldPrice}</div>
              <div className="modal__newprice">{newPrice}</div>
            </div>
          <button className='modal__button'>Відправити</button>
          </div>
      
          </form>

        </div>
      </div>
  </div>
)
return(
  <div onClick={() => props.setModal(false)} className={props.modal ? 'modal active' : 'modal' }>
    <div onClick={(e) => e.stopPropagation()} className= "modal__content">

      <div onClick={() => props.setModal(false)} className="modal__close">&times;</div>

     {
    error ? <div style={{textAlign: 'center',fontSize: '20px', marginTop: '80px', color: 'red'}}>Произошла ошибка</div>: showModal ? content : <ThanksModal/>
     }

    </div>
  </div>
)
}
export default Modal;


