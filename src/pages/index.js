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
      "map"
      "ab"
      "ab2";

    @media (min-width: 500px) {
      grid-template-columns: repeat(3,minmax(20vw, auto));
      grid-template-rows: minmax(20vw, auto);
      grid-template-areas:
        "ab map map"
        "box ab2 ab2";
      
    }
  `
    )}>
    <TimeCounter className={css( `grid-area: box` )}
      untill={new Date(2018,8,11)}
    />
    <HaapsaluMap className={css(`
      grid-area: map;
      height: 300px;
      @media (min-width: 600px) {
        height: 100%;
      }
    `)}/>
      <div className={css({
          gridArea: 'ab',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontWeight: '600',
          lineHeight: '1.8'
      })}
      >
          <p>
          Lapsepõlvemaagia keskendub pärimusele ning Läänemaa tavadele, vanavanemate ja lastelaste lugudele ning koostegemisele.
          <br/> Tahame festivaliga näidata, et tähtis ei ole tehnoloogiline vidin, vaid koosveedetud aeg ning 
              kuulatud tarkuseterad, mis on peidetud festivali melusse. <br/> Esinevad Läänemaa andekad lapsed ning toimuvad töötoad, 
              kus õpitakse päristöid.
          </p>
      </div>
      <div className={css({
          gridArea: 'ab2',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontWeight: '600',
          lineHeight: '1.8'
      })}
      >
          <p>
          Festivali sihtgrupiks on lapsed, nende vanemad ja vanavanemad. <br/> Festival viiakse läbi kultuurifestivalina, 
              mille eesmärgiks on luua kontakt erinevate põlvkondade lapsepõlve mängude, muusika, tegevuste, reaalsete 
              igapäevaelu tööde vahel. <br/> Ühest küljest on see tänaste laste LAPSEPÕLVEMAA ja teisalt kui jalutuskäik 
              minevikku, et meenutada ja edasi anda pärandit. <br/> Suur roll on kohaidentiteedil – Läänemaa.
          Lapsepõlvemaagia on Haapsalu ja Läänemaa laste kultuurifestival, kus kohtuvad laul, tants, pillimäng, kunst ja 
              töötoad. <br/> See on laste ja perede pidu.
          </p>
      </div>
    
  </div>
)

export default IndexPage
