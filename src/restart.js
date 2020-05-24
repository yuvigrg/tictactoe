import React from 'react'
import { func } from 'prop-types'

const Restart = ({ onClick }) => (
  <button className="restart" onClick={ onClick }>Play Again</button>
)

Restart.propTypes = { onClick: func.isRequired }

export default Restart