import React from 'react'
import Link from 'gatsby-link'
import banner from './banner.jpg'

console.log(banner);

function Header(){
    return <img src={banner} alt={"Logo"}/>;
}
export default Header
