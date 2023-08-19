import './loveZoov.scss';
import lan from '../../image/lan.webp';
import smile from '../../image/smile.webp';
import heartred from '../../image/heartred.webp';
import dogface from '../../image/dogface.webp';

const LoveZoov = () =>{
  return(
  <section className='lovezoov'>
    <div className="container">
      <div className="lovezoov__wrap">
        <div className="lovezoov__blockimg">
          <div className="lovezoov__wrapone">
            <img src={lan} alt="lan" />
          </div>
          
          <div className='lovezoov__heart'>
          <img src={heartred} alt="heartred" />
          </div>
          
          <div className="lovezoov__wraptwo">
            <img src={smile} alt="smile" />
          </div>

          <div className='lovezoov__facedog'>
            <img src={dogface} alt="dogface" />
          </div>
        </div>

        <div className="lovezoov__descr">
          <h1 className='lovezoov__title'>С заботой и любовью от Zooov</h1>
          <div className="lovezoov__text">
         <p>Мы сами владельцы собак и знаем, как важно правильное и качественное питание для долгой и счастливой жизни вашего питомца. Для нас ZOOOV это не просто бизнес, это наш вклад в повышение качества жизни всех собак. </p> 

         <p>Мы знаем, как правильно подобрать и переработать мясо, субпродукты, овощи и фрукты, чтобы питание вашего питомца было максимально сбалансированным и полезным. </p> 

         <p>Обычного сырого мяса из магазина будет недостаточно для полноценного питания собаки. ZOOOV — экономия времени, вам не придется искать необходимые составляющие для рациона.</p> 

         <p>Мы сами отбираем мясо, кости, легкие, печень и другие говяжьи, кроличьи и птичьи субпродукты у проверенных поставщиков. Закупаем органические овощи и используем разнообразные масла, такие как конопляное и льняное.</p> 

         <p>ZOOOV — это удобно, мы доставляем готовый рацион на две недели уже смешанным, расфасованным и упакованным в порционные лотки,готовыми к заморозке. За два часа до кормления достаточно переместить контейнер из морозилки в холодильник для ПРАВИЛЬНОЙ разморозки.</p> 
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
export default LoveZoov;