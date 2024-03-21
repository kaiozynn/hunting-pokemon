import '../style/index.css'

function Hunting(poks, cl) {
  this.poks = poks;
  this.cl = cl;
}
Hunting.prototype.hunt = function() {
  if( this.cl.length > 0) this.cl.forEach(element => {
    element.classList.remove('hunting')
  })
  return this.poks.classList.add('hunting')
}

export default function Button() {
  const handleclick = (ev) => {
    const pokHunt = ev.target.parentNode;
    const hunting = document.querySelectorAll('.hunting');
    const pokemon= new Hunting(pokHunt, hunting);
    pokemon.hunt()
  }
  
  return (
    <>
      <button onClick={handleclick}>Hunting</button>
    </>
  )
}
