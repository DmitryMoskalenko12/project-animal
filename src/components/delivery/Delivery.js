import './delivery.scss';
import { useState } from 'react';

const Delivery = () =>{
  const[data, setData] = useState([
    {
      title:'Не опасны ли бактерии, которые находятся в сыром мясе?',
      body:'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
      trigger: '+',
      minus:'-',
      id: 1
    },
    {
      title:'Надо ли давать дополнительно витамины к рациону BARF?',
      body:'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
      trigger: '+',
      minus:'-',
      id: 2
    },
    {
      title:'А если моя собака уже давно питается промышленным кормом и у нее нет проблем со здоровьем?',
      body:'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
      trigger: '+',
      minus:'-',
      id: 3,
    },
    {
      title:'Можно ли смешивать натуральный корм и корм промышленного производства?',
      body:'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
      trigger: '+',
      minus:'-',
      id: 4
    },
    {
      title:'Могу ли я сам составить для своей собаки рацион по системе BARF?',
      body:'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
      trigger: '+',
      minus:'-',
      id: 5
    },
    {
      title:'Присутствует ли в ZOOOV рационах рыба?',
      body:'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
      trigger: '+',
      minus:'-',
      id: 6
    },
    {
      title:'Как перевести питомца на натуральное питание?',
      body:'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
      trigger: '+',
      minus:'-',
      id: 7
    },
    {
      title:'Как готовить рацион ZOOOV?',
      body:'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
      trigger: '+',
      minus:'-',
      id: 8
    },
    {
      title:'При переходе на рацион ZOOOV у собаки начались проблемы с ЖКТ. Это нормально?',
      body:'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
      trigger: '+',
      minus:'-',
      id: 9
    }
])
const [plus, setPlus] = useState(false);

const toogle = index => {
  if (plus === index) {
   return  setPlus(null)
  }
  setPlus(index)
}
  return (
    <section id='delivery' className="delivery">
      <div className="container">
      <div className="delivery__blockfaq">
        <div className="delivery__queask">Частые вопросы</div>
        <div className="delivery__wrapquest">

        {
          data.map(({title,body,trigger,minus,id})=>{
            return(
              <div key={id} className="delivery__wrapalldescr">
                  <div className="delivery__wrapfaqdescr">
                    <div className="delivery__pluswrap">

                    <button onClick={() => toogle(id)} className="delivery__titlequest">{title}</button>
                    <span /* data-num={id} */ onClick={(/* e */) => {
                     toogle(id)
                      /* setId(e.currentTarget.getAttribute('data-num')); 
                      setPlus(plus => !plus ) */ 
                      }}>{plus === id ? minus : trigger}</span>

                    </div>
                    <div className={/* id == ids && plus */ plus === id ? "delivery__descrquest activedescr": 'delivery__descrquest' }>{body}</div>
                </div>
                </div>
            )
          })
        }
    </div>
  </div>
</div>
</section>

)
}
export default Delivery;