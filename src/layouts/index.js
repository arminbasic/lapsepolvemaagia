import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import MenuItem from '../components/MenuItem'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Lapsepolvemaagia"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: 'wrap', 
          alignContent: 'space-between'
        }}
      >
        <MenuItem>Avaleht</MenuItem>

        <MenuItem>Ajakava</MenuItem>
        
        <MenuItem>Kauplejale</MenuItem>
        
        <MenuItem>Sipsiku ümbermaailmareis</MenuItem>
        <MenuItem>Arhiiv</MenuItem>
        <MenuItem>Mis on sinu vanavanemate nimed?</MenuItem>
        <MenuItem>Toetajad</MenuItem>

      </div>

      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
