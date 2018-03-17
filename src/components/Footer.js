import React from 'react'
import { css } from 'emotion'

function Footer() {
    return (
        <p className={css({
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '100px',
            paddingRight: '100px',
            fontSize: '14',
            color: '#bee0f7',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            background: '#103c6b',
            borderTop: '5px solid lightblue',
            borderBottom: '5px solid lightblue'
        })}>
            <p>
                Korraldaja: MTÜ Lugu<br/>
                Reg.nr. 80395538<br/>
                IBAN EE741700017003849060<br/>
                E-mail: haapsalulastefest@mail.ee<br/>
                Tel. +372 52 14210
            </p>
            <p>
                Siseveeb
            </p>
        </p>

    )
}
export default Footer

/*<p>
           <br/>
           Korraldaja: MTÜ Lugu
           <br/>
           Reg.nr. 80395538
       </p>*/