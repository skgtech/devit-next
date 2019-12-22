import React from 'react'
import PropTypes from 'prop-types'

const Block = ({ css, id, children }) => {
  return (
    <div
      id={id}
      css={{
        paddingTop: '5.5em',
        paddingBottom: '5.5em',
        background: 'white',
        position: 'relative',
        ...css,
      }}
    >
      {children}
    </div>
  )
}

Block.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
}

export default Block
