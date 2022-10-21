import './modal.scss';
import { useHttp } from '../../hooks/http.hook';
import { useState } from 'react';

const Modal = (props) => {
const {post} = useHttp();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [tel, setTel] = useState('');

const postData = () =>{
  const formData = {name: name, email: email, tel: tel}
  const json = JSON.stringify(formData);
  post('http://localhost:3001/post', json)
  .then(() => setName(''), setEmail(''), setTel(''), setTimeout(()=>{props.setModal(false)}, 2000) )
}

return(
  <div onClick={() => props.setModal(false)} /* style={{display: props.modal ? 'block': 'none'}} */ className={props.modal ? 'modal active' : 'modal'}>
    <div onClick={(e) => e.stopPropagation()} className= "modal__content">

      <div onClick={() => props.setModal(false)} className="modal__close">&times;</div>

      

      <div className="modal__contentwrap">
        <div className="modal__imgwrap">
          <img src={props.data[props.butId - 1].picture} alt={props.data[props.butId - 1].title} />
        </div>

        <div className="modal__contentbigwrap">
          <div className="modal__modaltitle">
          {props.data[props.butId - 1].set}
          </div>

          <div className="modal__modalweight">{props.data[props.butId - 1].weight}</div>

          <div className="modal__butwrap1">
             <button className='modal__butrabbit'>Баранина/Кролик</button>
             <div className="modal__weight1">4 шт</div>
          </div>

           <div className="modal__butwrap2">
              <button className='modal__butcow'>Говядина/Индейка</button>
              <div className="modal__weight2">3 шт</div>
           </div>
          

           <form onSubmit={(e) => {postData(); e.preventDefault()}} className='modal__form'>
            <input value={name} onChange={(e) => setName(e.target.value)} className='modal__name' type="text" name='name' required placeholder='Name' />
            <input value={tel} onChange={(e) => setTel(e.target.value)} className='modal__tel' type="number" name='phone' required placeholder='Tel'/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='modal__email' type="email" name='email' required placeholder='Email'/>

            <div className="modal__checkboxwrap">
            <input type="checkbox" required name="checkbox" id='modal__checkbox'/>
            <label htmlFor='modal__checkbox' className="modal__checkdescr">
            Даю согласие на обработку персональных данных
            </label>
          </div>
          <div className="modal__butandprice">
            <div className="modal__pricewrap">
              <div className="modal__oldprice">{props.data[props.butId - 1].oldprice}</div>
              <div className="modal__newprice">{props.data[props.butId - 1].newprice}</div>
            </div>
          <button className='modal__button'>Відправити</button>
          </div>
      
          </form>

        </div>
      </div>


    </div>
  </div>
)
}
export default Modal;