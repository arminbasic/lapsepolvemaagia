import React from 'react'
import Link from 'gatsby-link'

import Haapsalu from '../components/Map.js'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>

    <Haapsalu />

    <Link to="/page-2/">Go to page 2</Link>

    <div
      id={'daysleft'}
      style={{
        color: 'blue',
        width: 350,
        height: 200,
        textAlign: 'center',
        padding: '10 10 10 10',
        borderStyle: 'double',
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
        fontSize: 150,
      }}
    />
    <div
      id={'dl'}
      style={{
        color: 'blue',
        width: 350,
        height: 20,
        textAlign: 'center',
        padding: '10 10 10 10',
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
        fontSize: 40,
      }}
    >
      {' '}
      days left
    </div>
  </div>
)

window.onload = function what() {
  var d = getDaysLeft()
  document.getElementById('daysleft').innerHTML = d
}

function getDaysLeft() {
  var oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  var firstDate = new Date(2018, 7, 11)
  var secondDate = new Date()

  var diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  )

  return diffDays
}

export default IndexPage
