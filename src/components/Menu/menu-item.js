import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import { css } from 'emotion'

const MenuItem = ({ children }) => {
  return (

      <h3 className={css({
        padding: '0 1em',
        borderRight: '3px solid tomato', // just for you, Ida
        // ':last-child': {
        //   borderRight: '3px solid tomato',
        // }
      })}>
        {children}
      </h3>

  )
}

export default MenuItem
