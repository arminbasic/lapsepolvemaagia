import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
<div>
<div>
    <h1>Hi from the second page</h1></div>


  <div style={{ color: 'white',
  backgroundColor: 'BlueViolet',
  width:200,
  height:50,
  textAlign:'center',
  paddingTop:10,
  borderStyle: 'double',
  fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif' ,
 

  
  }}>XXX1</div>

<div style={{ color: 'white',
  backgroundColor: 'BlueViolet',
  width:200,
  height:50,
  textAlign:'center',
  marginTop:-50,
  marginLeft:200,
  paddingTop:10,
  

  borderStyle: 'double',
  fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif' 
 }} >XXX2</div>

<div style={{ color: 'white',
  backgroundColor: 'BlueViolet',
  width:200,
  height:50,
  textAlign:'center',
  marginTop:-50,
  marginLeft:400,
  paddingTop:10,

  borderStyle: 'double',
  fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif' 
  }}>XXX3</div>

<div style={{ color: 'white',
  backgroundColor: 'BlueViolet',
  width:200,
  height:50,
  textAlign:'center',
  marginTop:-50,
  marginLeft:600,
  paddingTop:10,

  borderStyle: 'double',
  fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif' 
  }}>XXX4</div>

<div style={{ color: 'white',
  backgroundColor: 'BlueViolet',
  width:200,
  height:50,
  textAlign:'center',
  marginTop:-50,
  marginLeft:800,
  paddingTop:10,

  borderStyle: 'double',
  fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif' 

  }}>XXX5</div>

 <div>
    <p> Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>


</div>

)

export default SecondPage
