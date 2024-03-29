import './modalCount.scss';
import { useState } from 'react';
import ThanksModal from '../thanksModal/ThanksModal';
import { post } from '../../dummy-post/dummy-post';

const ModalCount = (props) =>{
  const [weight, setWeight] = useState('');
  const [sizedog, setSizeDog] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [area, setArea] = useState('');
  const [check, setCheck] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [error, setError] = useState(false);
  
  const postData = () =>{
    const res = {weight, sizedog, age, type, name, number, area, check } 
     post(res)
    .then(() => {
      setAge(''); 
      setSizeDog('');
      setWeight(''); 
      setType(''); 
      setName('');
      setNumber(''); 
      setArea(''); 
      setCheck(false);  
      setTimeout(()=>{props.setModalCount(false)}, 2000)})
    .catch(() => setError(true), setTimeout(()=>{props.setModalCount(false)}, 2000)) 
  }

const content = (
<div className='modalcount__wrapall'>
<div className="modalcount__ratio">Рассчет рациона</div>
  <div className="modalcount__descr">
    Заполните информацию и мы свяжемся с вами, чтобы подсказать с подбором рациона для вашего хвостика.
    Или напишите нам в мессендерах <a href='#' className='modalcount__whatsapp'>WhatsApp</a> и <a href="#" className='modalcount__telegram'>Telegram.</a></div>

    <form  onSubmit={(e) => {e.preventDefault(); postData(); setShowContent(false)}} className='modalcount__form'>

      <div className="modalcount__inpwrp">

       <div>
        <input value={'big'} className='modalcount__oldinp' id='old'  onChange={(e) => setSizeDog(e.target.value)} type='radio' name="big"/>
        <label htmlFor='old' className='modalcount__old'>
            Взрослая собака
        </label> 

      </div>

      <div>
      
        <input  value={'little'} id="little" onChange={(e) => setSizeDog(e.target.value)}  className="modalcount__littleinp" name="big" type="radio"/>
       <label htmlFor="little" className="modalcount__little">Щенок</label>
      </div>

      </div>

      <input value={weight} onChange={(e) => setWeight(e.target.value)}   className='modalcount__weight' type="number" placeholder='Вес (кг)'/>
      <input value={age} onChange={(e) => setAge(e.target.value)}  className='modalcount__age' type="number" placeholder='Сколько лет'/>
      <input value={type} onChange={(e) => setType(e.target.value)}  className='modalcount__type' type="text" placeholder='Порода собаки'/>
      <input value={name} onChange={(e) => setName(e.target.value)} required className='modalcount__name' type="text" placeholder='Ваше имя'/>
      <input value={number} onChange={(e) => setNumber(e.target.value)} required className='modalcount__number' type="number" placeholder='Телефон'/>
      <textarea value={area} onChange={(e) => setArea(e.target.value)}  className='modalcount__area' type="text" placeholder='Если у вашего хвостика есть особенности
       здоровья – напишите об этом...' />
       <div className='modalcount__checkinpwrap'>
        <input onChange={(e) => setCheck(e.target.checked)} checked={check}  id='dat' type="checkbox" className="modalcount__checkinp" />
        <label htmlFor='dat' className="modalcount__check">
          Даю согласие на обработку персональных данных
       </label>
       </div>

       <button className="modalcount__button">Расчитать</button>
    </form>
</div>
  
)
  return(
    <div onClick={() => props.setModalCount(false)}  className = {props.modalCount ? 'modalcount active': 'modalcount'}>
    <div className="modalcount__content" onClick={(e) => e.stopPropagation()}>
    <div className="modalcount__close" onClick={() => props.setModalCount(false)}>&times;</div>

     {
     error ? <div style={{textAlign: 'center',fontSize: '20px', marginTop: '80px', color: 'red'}}>Произошла ошибка</div> : showContent ? content : <ThanksModal/>
     }
    
    </div>
    </div>
  )
}


export default ModalCount;