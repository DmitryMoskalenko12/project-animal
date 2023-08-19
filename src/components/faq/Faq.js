import './faq.scss';
import pack from '../../image/Package.png';
import phone from '../../image/PhoneCall.png';
import clock from '../../image/Clock.png';
import vector from '../../image/Vector.png';

const Faq = () =>{
 
  return(
    <section id='faq' className='faq'>
      <div className="container">
        <div className="faq__title">Как получить ZOOOV?</div>
        <div className="faq__wrap">

          <div className="faq__card">
           <div className="faq__figurwrap">
            <img src={pack} alt="pack" />
            <div className='faq__arrow'></div>
           </div>
           <div className="faq__undtitle faq__moretitle">Закажите рацион</div>
           <div className="faq__descr faq__moremar">Выберите рацион для своей собаки. Если не знаете сколько
            и какой – мы подскажем.</div>
          </div>
    
          <div className="faq__card">
           <div className="faq__figurwrap">
            <img src={phone} alt="phone" />
            <div className='faq__arrow'></div>
           </div>
           <div className="faq__undtitle">Подтвердите заказ</div>
           <div className="faq__descr">Мы свяжемся с вами для подтверждения заказа
            и уточнения деталей.</div>
          </div>

          
          <div className="faq__card">
           <div className="faq__figurwrap">
            <img src={clock} alt="clock" />
            <div className='faq__arrow'></div>
           </div>
           <div className="faq__undtitle">Ожидайте доставки</div>
           <div className="faq__descr">Привозим заказ на следующий день. По СПб – 350грн, при заказе от 3 500грн – бесплатно. Лен. область – по договоренности.</div>
          </div>

          
          <div className="faq__card">
           <div className="faq__figurwrap">
            <img src={vector} alt="vector" />
            <div className='faq__arrow faq__noarrow'></div>
           </div>
           <div className="faq__undtitle">Радуйте своего питомца</div>
           <div className="faq__descr">Просто разморозьте рацион: при комнатной температуре – 3 часа, в холодильнике – 12-15 часов.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Faq;