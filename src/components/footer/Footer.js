import './footer.scss';
import whats from '../../image/WhatsappLogo.png';
import teleg from '../../image/TelegramLogo.png';
import { Link } from 'react-router-dom';
import meat from '../../image/fotmeat.png';
import dog from '../../image/fotdog.png';
import apple from '../../image/fotapple.png';
import up from '../../image/up.png';
import left from '../../image/left.png';
import succes from '../../image/success.png';
import erro from '../../image/error.png';

import { useState } from 'react';
import { useHttp } from '../../hooks/http.hook';

const Footer = () =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [check, setCheck] = useState(false);
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  const {request} = useHttp();

const postData =  () =>{
  const data = {
    name,
    email,
    area,
    check
  }
   request('http://localhost:3001/post', 'POST', JSON.stringify(data))
  .then(() => setName(''), setEmail(''), setArea(''), setCheck(false), setSuccess(true), setTimeout(() => {setSuccess(false)}, 2000))
  .catch(() => /* setName(''), setEmail(''), setArea(''), setCheck(false), */ setErr(true), setTimeout(() => {setErr(false)}, 2000))
}
  return(
    <footer className="footer">
      <Link end to='/' className="back">Back</Link>
      <div className="container">
        <div className="footer__bigwrap">

          <div className="footer__colon1">
            <div className="footer__contacts">Контакты</div>
            <div className="footer__descr">Вы всегда можете с нами связаться
            по телефону или в мессенджерах</div>
            <div className="footer__tel">38(099)6547145</div>

            <a href="" className="footer__social">
              <div className="footer__whats">
                <img src={whats} alt="whats" />
              </div>
              <div className="footer__socialtext">Написать в WhatsApp</div>
            </a>

            <a href="#" className="footer__social">
              <div className="footer__teleg">
                <img src={teleg} alt="teleg" />
              </div>
              <div className="footer__socialtext">Написать в Telegram</div>
            </a>
            

            <div className="footer__subscr">Подписывайтесь на наш Instagram
            и следите за новостями</div> 
          </div>

        <div className="footer__form">
         <div className="footer__formquest"> <span>Остались вопросы?</span><br />Напишите нам и мы обязательно подробно на них ответим.</div>

         <form onSubmit={(e) =>{ e.preventDefault(); postData()}} className="footer__formsubmit">
          <input onChange={(e) => setName(e.target.value)} value={name} required placeholder='Name' type="text" className="footer__inpname" name='name' />
          <input onChange={(e) => setEmail(e.target.value)} value={email} required placeholder='Emeil' type="email" className="footer__inpemail" name='email' />
          <textarea onChange={(e) => setArea(e.target.value)} value={area} name="textarea" placeholder='Your question...' className="footer__textarea"></textarea>

          <div className="footer__wrapcheck">
            <input onChange={(e) => setCheck(e.target.checked)} checked ={check} id='formcheck' type="checkbox" className="footer__checkbox" name='checkbox' />
            <label htmlFor='formcheck' className="footer__checktex">Даю согласие на обработку
              персональных данных</label>
          </div>
          <button className="footer__butsub">Отправить</button>
         </form>

        </div>
        </div>

      </div>
      <div className="footer__subfooter">
          <div className="footer__subdesc"><a href="#">ЧП Коваленко Евгений Геннадьевич, адрес производства г. Николаев 2-я линия В.О 66, пом. 2/07</a></div>
          <div className="footer__oferta"><a href="#">Публичная оферта</a></div>
          <div className="footer__politconf"><a href="#">Политика конфеденциальности</a></div>
        </div>

        <div className="footer__meat">
          <img src={meat} alt="meaat" />
        </div>
        <div className="footer__apple">
          <img src={apple} alt="apple" />
        </div>
        <div className="footer__dog">
          <img src={dog} alt="dog" />
        </div>
        <div className="footer__up">
          <img src={up} alt="up" />
        </div>
        <div className="footer__left">
          <img src={left} alt="left" />
        </div>
{
err ? <div className="footer__error">
<img src={erro} alt="error" />
<span>Ошибка</span>
</div> : success ? <div className="footer__success">
<img src={succes} alt="success" />
<span>Успешно</span>
</div> :  null
}
       
    </footer>
  )
}
export default Footer;