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
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          alignContent: 'space-between',
        }}
      >
        <MenuItem>
          {' '}
          <a style={{ color: 'white' }} href="/">
            {' '}
            Avaleht
          </a>
        </MenuItem>

        <MenuItem>
          {' '}
          <a style={{ color: 'white' }} href="/Ajakava/">
            {' '}
            Ajakava{' '}
          </a>
        </MenuItem>

        <MenuItem>
          {' '}
          <a style={{ color: 'white' }} href="/Kauplejale/">
            {' '}
            Kauplejale{' '}
          </a>
        </MenuItem>

        <MenuItem>
          <a style={{ color: 'white' }} href="/Sipsiku/">
            {' '}
            Sipsiku ümbermaailmareis{' '}
          </a>
        </MenuItem>
        <MenuItem>
          {' '}
          <a style={{ color: 'white' }} href="/Arhiiv/">
            {' '}
            Arhiiv
          </a>
        </MenuItem>
        <MenuItem>
          <a style={{ color: 'white' }} href="/MisOnSinu/">
            {' '}
            Mis on sinu vanavanemate nimed?
          </a>
        </MenuItem>
        <MenuItem>
          {' '}
          <a style={{ color: 'white' }} href="/Toetajad/">
            {' '}
            Toetajad
          </a>
        </MenuItem>
      </div>

      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
