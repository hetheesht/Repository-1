import React from 'react'
import Corporation from './Corporation'
import AndhraBank from './AndhraBank'

function UnionBank() {
    return (
        <div>
            <h1>UnionBank</h1>
            <AndhraBank location="Vijayawada" />
            <Corporation  location="Tirupati"/>
        </div>
    )
}

export default UnionBank
