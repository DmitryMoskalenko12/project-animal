import './modalRationForm.scss';
import { useState } from 'react';
import { useHttp } from '../../hooks/http.hook';

const ModalRationForm = (props) =>{
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addr, setAddr] = useState('');
  const [weight, setWeight] = useState('');
  const [check, setCheck] = useState('');

  const [error, setError] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const {request} = useHttp();
  const price = props.data[props.id - 1].price;

  const postData = () =>{
   const formData = {count, name, phone, addr, weight, check, price};
   request('http://localhost:3001/post', 'POST', JSON.stringify(formData))
   .then(() => {
     setCount(0); 
     setName('');
     setWeight(''); 
     setPhone(''); 
     setAddr(''); 
     setCheck('');  
     setTimeout(()=>{props.setFormModal(false); props.setModal(false)}, 2000)})
    .catch(() => setError(true), setTimeout(()=>{props.setModal(false)}, 2000)) 
  }

  return(
    <div className='modalrationform'>
      <div className="modalrationform__wrapall">
          <div className="modalrationform__imgwrap">
                <img src={props.data[props.id - 1].picture} alt={props.data[props.id - 1].type}/>
          </div>

              <div className="modalrationform__wrapcontent">
              <div onClick={() => props.setModal(false)} className="modalrationform__close">&times;</div>
              <div className="modalrationform__title">{props.data[props.id - 1].type} </div>
              <div className="modalrationform__meat">{props.data[props.id - 1].chick}</div>

              <form onSubmit={(e) => {postData(); e.preventDefault(); setShowContent(false)}} className="modalrationform__form">
              <div className="modalrationform__coll">
                <input value={name} onChange = {(e)=> setName(e.target.value)} type="text" required placeholder='Имя' className="modalrationform__name" />
                <input value={phone} onChange = {(e)=> setPhone(e.target.value)} type="number" required placeholder='Телефон' className="modalrationform__phone" />
                <input value={addr} onChange = {(e)=> setAddr(e.target.value)} type="text" required placeholder='Адрес' className="modalrationform__addr" />

                <select value={weight} onChange = {(e)=> setWeight(e.target.value)} name="weight" className="modalrationform__weight">
                  <option value="">Выбор веса</option>
                  <option value="700">700 г</option>
                  <option value="500">500 г</option>
                  <option value="300">300 г</option>
                  <option value="150">150 г</option>
                  <option value="100">100 г</option>
                </select>
              </div>

              <div className="modalrationform__calc">
               <div className="modalrationform__calctitle">Количество:</div>

               <div className="modalrationform__plusminus">
                <span onClick={() => setCount(count => count + 1)} className="modalrationform__plus">+</span>
                <div className="modalrationform__state">{count < 0 ? setCount(0) : count}</div>
                <span onClick={() => setCount(count => count - 1)} className="modalrationform__minus">-</span>
               </div>

              </div>
              <div className="modalrationform__checkboxwrap">
                  <input value={check} onChange = {(e)=> setCheck(e.target.value)}  type="checkbox" required name="checkboxform" id='modal__checkboxform'/>
                  <label htmlFor='modal__checkboxform' className="modalrationform__checkdescr">
                  Даю согласие на обработку персональных данных
                  </label>
              </div>

              <div className="modalrationform__butprice">
              <div className="modalrationform__price">{props.data[props.id - 1].price}</div>
              <button className="modalrationform__butform">Оформить заказ</button>
              </div>

              </form>
              </div>
      </div>

    </div>
  )
}
export default ModalRationForm;