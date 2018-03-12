import React from 'react'
import Link from 'gatsby-link'

import Haapsalu from "../components/Map.js"

const IndexPage = () => (


  <div>

    <h1>Hi people</h1>

    <Haapsalu/>
    

    <Link to="/page-2/">Go to page 2</Link>

</div>
  

) 


export default IndexPage
