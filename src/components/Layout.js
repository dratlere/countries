import React, { createContext, useEffect, useState } from 'react'
import Header from './Header'
import Main from './Main'
import Popup from './Popup'



export const MasterContext = createContext()


export default function Layout() {
    const [countriesList, setCountriesList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [inputVal, setInputVal] = useState("")
    console.log("🚀 ~ file: Layout.js ~ line 14 ~ Layout ~ filteredList", filteredList)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => {
                setCountriesList(data)
                setFilteredList(data)
            })


    }, [])



    useEffect(() => {
        setFilteredList(countriesList.filter((country) => country.name.common.toLowerCase().startsWith(inputVal)))

    }, [inputVal])

    if (countriesList.length === 0) {
        return <h1>loading...</h1>
    }




    return (
        <div>
            <MasterContext.Provider value={{ filteredList, setInputVal }}>
                <Header />
                <Main />
            </MasterContext.Provider>

        </div>
    )
}