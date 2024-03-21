import propTypes from 'prop-types';
import '../style/index.css'
import Button from './Button';

function PokInCard(props){
  return (
    <div className='card'>
      <img src={props.sprite} alt="" />
      <div>{props.name}</div>
      <Button />
    </div>
  )
}
PokInCard.propTypes = {
  name: propTypes.string.isRequired,
  sprite: propTypes.string.isRequired
}

export default PokInCard;
