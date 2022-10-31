import './modalRationForm.scss';

const ModalRationForm = (props) =>{
  return(
    <div className='modalrationform'>
      <div className="modalrationform__wrapall">
          <div className="modalrationform__imgwrap">
                <img src={props.data[props.id - 1].picture} alt={props.data[props.id - 1].type}/>
          </div>

              <div className="modalrationform__wrapcontent">
              <div className="modalrationform__title">{props.data[props.id - 1].type} </div>
              <div className="modalrationform__meat">{props.data[props.id - 1].chick}</div>

              <div className="modalrationform__form">
              <input type="text" className="modalrationform__name" />
              <input type="text" className="modalrationform__phone" />
              <input type="text" className="modalrationform__addr" />

              <select name="" id="" className="modalrationform__weight">
                <option value="">700 г</option>
                <option value="">500 г</option>
                <option value="">300 г</option>
                <option value="">150 г</option>
                <option value="">100 г</option>
              </select>
              </div>
              </div>
      </div>

    </div>
  )
}
export default ModalRationForm;