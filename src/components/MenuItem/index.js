import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'

const MenuItem = ({ children }) => {
  return (
    <div
      style={{
        color: 'white',
        backgroundColor: 'BlueViolet',
        width: 130,
        height: 50,
        textAlign: 'center',
        padding: '10 10 10 10',
        borderStyle: 'double',
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
      }}
    >
      <div
        style={{
          margin: '5 auto',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default MenuItem
