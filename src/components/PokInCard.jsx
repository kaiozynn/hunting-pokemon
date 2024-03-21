import PropTypes from 'prop-types';
import '../style/index.css'

export default function PokInCard(props){
  return (
    <div className='card'>
      <img src={props.sprite} alt="" />
      <div>{props.name}</div>
    </div>
  )
}
PokInCard.PropTypes = {
  name: PropTypes.string.isRequired,
  sprite: PropTypes.string.isRequired
}
