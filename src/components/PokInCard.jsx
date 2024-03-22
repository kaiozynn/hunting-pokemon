import propTypes from 'prop-types';
import Button from './Button';

function PokInCard(props){
  return (
    <>
      <img src={props.sprite} alt="" />
      <div>{props.name}</div>
      <Button />
    </>
  )
}
PokInCard.propTypes = {
  name: propTypes.string.isRequired,
  sprite: propTypes.string.isRequired
}

export default PokInCard;
