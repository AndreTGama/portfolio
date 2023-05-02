import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,
	max:            35,   
	perspective:    1000, 
	scale:          1.1,  
	speed:          1000, 
	transition:     true, 
	axis:           null, 
	reset:          true,  
	easing:         "cubic-bezier(.03,.98,.52,.99)",
}

export default function App() {
  return (
    <Tilt options={defaultOptions} style={{ height: 250, width: 250, background: 'black'}}>
      <div>👽</div>
    </Tilt>
  )
}