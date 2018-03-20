import React from 'react'
import { css } from 'emotion'

const Toetaja = (props) => (

    <a href={props.leht}>
        <div
            className={css({
                boxShadow: '0px 8px 5px -5px #888888',
                //onmouseover:{background:'##edf7ff'}
            })}
        >
            <br/>
            <h3>
                {props.firmanimi}
            </h3>
            <div>
                {props.logo}
            </div>

            <br/>

        </div>
    </a>
)
export default Toetaja
