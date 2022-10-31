const RationsCard = ({picture, type, chick, descr, weight, id, setModal, setButId }) =>{
  return(
    <>
     <div className="rations__card">
      <div className="rations__pictwrap">
        <img src={picture} alt={type} />
      </div>
      <div className="rations__typedog">{type}</div>
      <div className="rations__gar">{chick}</div>
      <div className="rations__carddescr">{descr}</div>
      <div className="rations__weight">{weight}</div>
      <button data-id ={id} onClick={(e) => {setModal(true); setButId(e.currentTarget.getAttribute('data-id'))}} className="rations__but">Заказать</button>
    </div>
    </>
  )
}
export default RationsCard;