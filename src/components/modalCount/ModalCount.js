import './modalCount.scss';

const ModalCount = (props) =>{
  return(
    <div className = {props.modalCount ? 'modalcount active': 'modalcount'}>
    <div className="modalcount__content" onClick={(e) => e.stopPropagation()}>
      <div className="modalcount__close" onClick={() => props.setModalCount(false)}>&times;</div>
    </div>
    </div>
  )
}
export default ModalCount;