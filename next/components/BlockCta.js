import React from 'react'
import Link from 'next/link';
import PropTypes from 'prop-types'

const BlockCTA = ({ to, children }) => {
  return (
    <Link
      href={to}
      css={{
        borderRadius: '36px',
        backgroundColor: '#00629E',
        textTransform: 'uppercase',
        fontSize: '1.33em',
        fontWeight: '900',
        lineHeight: '1em',
        color: 'white',
        padding: '1em 1.33em',
        marginTop: '1.77em',
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: '#003E73',
        },
        '&:active': {
          textDecoration: 'none',
          backgroundColor: '#003E73',
        },
        '&:focus': {
          textDecoration: 'none',
          backgroundColor: '#003E73',
        },
      }}
    >
      {children}
    </Link>
  )
}

BlockCTA.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
}

export default BlockCTA
