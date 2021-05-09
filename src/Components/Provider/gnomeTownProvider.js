import React, { createContext, useState, useEffect } from 'react'
import { apiGet } from '../../http'
import { useLoadingProvider } from './loadingProvider'

export const TownContext = createContext({})

export const TownProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const { setLoading } = useLoadingProvider()
    const [filteredItems, setFilteredItems] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [professionFilter, setProfessionFilter] = useState('')
    useEffect(() => {

        async function fetchData() {
            const response = await apiGet('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
            setItems(response.Brastlewark)
            setFilteredItems(response.Brastlewark)
            setLoading(false)
        }
        fetchData()
    }, [])

    const clearSelection = () => {
        setFilteredItems(filteredItems)
    }

    useEffect(() => {
        console.log('filter')
        let searchByName = []
        if (searchTerm !== '') {
            searchByName = [...items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))]
        } else {
            searchByName = [...items]
        }
        if (professionFilter !== '') {
            setFilteredItems([searchByName.filter(gnome => gnome.professions && gnome.professions.includes(professionFilter))])
        } else {
            setFilteredItems(searchByName)
        }
    }, [searchTerm, professionFilter])

    const value = {
        filteredItems,
        setSearchTerm,
        setProfessionFilter
    }
    return (
        <TownContext.Provider value={value}>
            {children}
        </TownContext.Provider>
    )
}

export function useTownProvider() {
    const context = React.useContext(TownContext)

    if (context === undefined) {
        throw new Error(
            '`TownContext` hook must be used within a `TownContext` component'
        )
    }

    return context
}
