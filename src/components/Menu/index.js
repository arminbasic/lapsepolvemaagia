import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import MenuItem from './menu-item'

const MenuLink = (props) => (
    <Link to={props.to}>
        <MenuItem>
            {props.children}
        </MenuItem>
    </Link>
)

export default (props) => 
    <div
        className={css({
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          //alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          borderBottom: '5px solid lightblue'
        })}
      >
      
        <MenuLink to="/" >Avaleht</MenuLink>
        <MenuLink to="/ajakava" >Ajakava</MenuLink>
        <MenuLink to="/kauplejale" >Kauplejale</MenuLink>
        <MenuLink to="/sipsik" >Sipsiku ümbermaailmareis</MenuLink>
        <MenuLink to="/arhiiv" >Arhiiv</MenuLink>
        <MenuLink to="/vanavanemad" >Mis on sinu vanavanemate nimed?</MenuLink>
        <MenuLink to="/toetajad" >Toetajad</MenuLink>
      </div>

