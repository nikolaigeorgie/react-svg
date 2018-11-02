import React from 'react'
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'

ReactDOM.render(
  <ReactSVG fallback={<span>Error!</span>} src="svg.svg" />,
  document.getElementById('root')
)
