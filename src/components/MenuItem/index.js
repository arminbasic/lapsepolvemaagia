import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'

const MenuItem = ({ children }) => {
    return (
        <Link to="/">
            <div style={{ color: 'white',
                backgroundColor: 'BlueViolet',
                width:200,
                height:50,
                textAlign:'center',
                padding: '10 10 10 10',
                border: '2px, solid black',
                fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif'                 
                }}
            >
                <div style= {{
                    
                    margin: '5 auto',
                }}>
                    {children}
                </div>
               
            </div>
        </Link>
    );
}



export default MenuItem
