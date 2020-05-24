import React from 'react'
import { func, string } from 'prop-types'

const Square = ({ value, onClick }) => (
  <button className="square" onClick={ onClick }> { value }</button>
)

Square.propTypes = {
  onClick: func.isRequired,
  value: string,
}

Square.defaultProps = { value: '' }

export default Square
