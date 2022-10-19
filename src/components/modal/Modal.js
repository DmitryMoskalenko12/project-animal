import './modal.scss';
import { useHttp } from '../../hooks/http.hook';
import { useState } from 'react';

const Modal = (props) => {
const {request} = useHttp();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [tel, setTel] = useState('');

const postData = () =>{
  const formData = {name: name, email: email, tel: tel}
  const json = JSON.stringify(formData);
  request('http://localhost:3001/post', json)
  .then(() => setName(''), setEmail(''), setTel(''), setTimeout(()=>{props.setModal(false)}, 2000) )
}

return(
  <div onClick={() => props.setModal(false)} /* style={{display: props.modal ? 'block': 'none'}} */ className={props.modal ? 'modal active' : 'modal'}>
    <div onClick={(e) => e.stopPropagation()} className={ "modal__content"}>
      <div onClick={() => props.setModal(false)} className="modal__close">&times;</div>
      <div className="modal__title">Залиште ваші дані і ми зв`яжемося з вами</div>
      <form onSubmit={(e) => {postData(); e.preventDefault();}} className='modal__form'>
        <input value={name} onChange={(e) => setName(e.target.value)} className='modal__name' type="text" name='name' required placeholder='Name' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='modal__email' type="email" name='email' required placeholder='Email'/>
        <input value={tel} onChange={(e) => setTel(e.target.value)} className='modal__tel' type="number" name='phone' required placeholder='Tel'/>
        <button className='modal__button'>Відправити</button>
      </form>
    </div>
  </div>
)
}
export default Modal;