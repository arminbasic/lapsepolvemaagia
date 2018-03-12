import React from 'react'
import Link from 'gatsby-link'

import HaapsaluMap from '../components/Map.js'
import TimeCounter from '../components/TimeCounter'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>

    <HaapsaluMap />

    <TimeCounter untill={new Date(2018,7,30)}/>
    
  </div>
)

export default IndexPage
