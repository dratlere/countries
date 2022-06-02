import React, { useContext } from 'react'
import { MasterContext } from './Layout'

export default function Search() {

    const { setInputVal } = useContext(MasterContext)


    return (
        <input onChange={(e) => setInputVal(e.target.value)} />
    )
}