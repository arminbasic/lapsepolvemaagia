import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import HaapsaluMap from '../components/Map.js'
import TimeCounter from '../components/TimeCounter'

const IndexPage = () => (
  <div className={ css(`
    display: grid;
    grid-gap: 2vmax;
    padding: 1vmax;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "box"
      "map";

    @media (min-width: 500px) {
      grid-template-columns: repeat(3,minmax(20vw, auto));
      grid-template-rows: minmax(20vw, auto);
      grid-template-areas:
        "box map map";
      
    }
  `
    )}>
    <TimeCounter className={css( `grid-area: box` )}
      untill={new Date(2018,8,11)}
    />
    <HaapsaluMap className={css(`
      grid-area: map;
      height: 200px;
      @media (min-width: 500px) {
        height: 100%;
      }
    `)}/>
    
  </div>
)

export default IndexPage
