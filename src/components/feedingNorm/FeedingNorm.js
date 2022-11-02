import './feedingNorm.scss';

const FeedingNorm = ()=>{

return(
  <div className="feeding">
    <div className="container">
     <div className="feeding__norm">Рекомендованные нормы кормления</div>
     <div className="feeding__divider"></div>
      <div className="feeding__wrapall">

       <div className="feeding__blockrec1">
      <div className="feeding__olddog">ДЛЯ ВЗРОСЛЫХ СОБАК</div>
      <div className="feeding__year">от 1 года</div>

      <div className="feeding__bigwrap">
        <div className="feeding__descrwrap1">
         
          <ul className="feeding__weightlist">
          <li>Вес собаки</li>
          <hr />
          <li>5кг</li>
          <hr />
          <li>7кг</li>
          <hr />
          <li>10кг</li>
          <hr />
          <li>12кг</li>
          <hr />
          </ul>
        
         
          <ul className="feeding__daylist">
          <li>Суточная норма</li>
          <hr />
          <li>100 - 150гр</li>
          <hr />
          <li>140 - 210гр</li>
          <hr />
          <li>200 - 300гр</li>
          <hr />
          <li>240 - 360гр</li>
          <hr />
          </ul>
         

        </div>

        <div className="feeding__descrwrap2">
         
         <ul className="feeding__weightlist">
         <li>Вес собаки</li>
         <hr />
         <li>15кг</li>
         <hr />
         <li>17кг</li>
         <hr />
         <li>20кг</li>
         <hr />
         <li>25кг</li>
         <hr />
         </ul>
       
        
         <ul className="feeding__daylist">
         <li>Суточная норма</li>
         <hr />
         <li>300 - 450гр</li>
         <hr />
         <li>340 - 510гр</li>
         <hr />
         <li>400 - 600гр</li>
         <hr />
         <li>500 - 750гр</li>
         <hr />
         </ul>
        

       </div>
      </div>
      <div className="feeding__recomend"><span>Суточная норма кормления</span> составляет <span>2-3%*</span> от <span>идеального веса собаки.</span> </div>
     </div>

     <div className="feeding__blockrec1">
      <div className="feeding__olddog">ДЛЯ ЩЕНКОВ</div>
      <div className="feeding__year">до 1 года</div>

      <div className="feeding__bigwrap">
        <div className="feeding__descrwrap1">
         
          <ul className="feeding__weightlist">
          <li>Вес собаки</li>
          <hr />
          <li>2кг</li>
          <hr />
          <li>5кг</li>
          <hr />
          <li>7кг</li>
          <hr />
          <li>10кг</li>
          <hr />
          </ul>
        
         
          <ul className="feeding__daylist">
          <li>Суточная норма</li>
          <hr />
          <li>100гр</li>
          <hr />
          <li>250гр</li>
          <hr />
          <li>350гр</li>
          <hr />
          <li>500гр</li>
          <hr />
          </ul>
         

        </div>

        <div className="feeding__descrwrap2">
         
         <ul className="feeding__weightlist">
         <li>Вес собаки</li>
         <hr />
         <li>12кг</li>
         <hr />
         <li>15кг</li>
         <hr />
         <li>17кг</li>
         <hr />
         <li>20кг</li>
         <hr />
         </ul>
       
        
         <ul className="feeding__daylist">
         <li>Суточная норма</li>
         <hr />
         <li>600гр</li>
         <hr />
         <li>750гр</li>
         <hr />
         <li>850гр</li>
         <hr />
         <li>1000гр</li>
         <hr />
         </ul>
        

       </div>
      </div>
      <div className="feeding__recomend"><span>Суточная норма кормления</span> составляет <span>5%*</span> от <span>идеального веса собаки.</span> </div>
     </div>
    </div>
   <div className="feeding__rec">*Общие рекомендации. Некоторым собакам нужен бОльший % в зависимости от их активности и индивидуальных особенностей организма.</div>
    </div>
  </div>
)
}
export default FeedingNorm;