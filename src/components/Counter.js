import React, { useContext } from 'react'
import { MasterContext } from './Layout'

export default function Counter() {
    const { filteredList } = useContext(MasterContext)

    return (
        <div>
            <h3>numbers of countries: <span>{filteredList.length}</span></h3>
        </div>
    )
}