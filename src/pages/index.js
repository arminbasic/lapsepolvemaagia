import React from 'react'
import Link from 'gatsby-link'


const IndexPage = () => (


  <div>

    <h1>Hi people</h1>

    

    <div style={{ color: 'white',
                backgroundColor: 'BlueViolet',
                width:200,
                height:50,
                textAlign:'center',
                paddingTop:10,
                borderStyle: 'double',
                fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif' ,
               

                
                }}
                
                onClick={() => alert('X1')}  >X1</div>
   
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
               }}  
               onClick={() => alert('X2')}  >XX2</div>
   
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
                }} 
                
                onClick={() => alert('XXX3')}  >XXX3</div>

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
                }}
                
                onClick={() => alert('XXXX4')}  >XXXX4</div>

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
              
                }} 
                
                onClick={() => alert('XXXXX5')}  >XXXXX5</div>

                 

    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

</div>
  

) 


export default IndexPage
