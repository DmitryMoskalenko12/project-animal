
const SetZoovCard = ({title, set, meats, weight, oldprice, newprice, picture, setModal}) => {

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

<button onClick={() => setModal(true)} className="sets__button">Заказать</button>

</div>
  </>
)
}
export default SetZoovCard;