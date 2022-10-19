import dog1 from '../../image/dog1.png';
import dog3 from '../../image/dog3.png';

const SetZoovCard = ({title, set, meats, weight, oldprice, newprice, picture}) => {

return(
  <>
  <div className="sets__cardwrap">

<div className="sets__img">
  <div className="sets__imgtext">{title}</div>
  <img src={picture} alt="dog1" />
</div>

<div className="sets__set">{set}</div>

<div className="sets__num">
  {meats}<br />
 
</div>

<div className="sets__weight">{weight}</div>

<div className="sets__pricewrap">
  <div className="sets__oldprice">{oldprice}</div>
  <div className="sets__newprice">{newprice}</div>
</div>

<div className="sets__button">Заказать</div>

</div>
  </>
)
}
export default SetZoovCard;