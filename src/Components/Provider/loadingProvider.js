import React, { createContext, useState } from 'react'

export const LoadingContext = createContext({})

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
  
    const value = {
        loading,
        setLoading
    }
    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}

export function useLoadingProvider() {
    const context = React.useContext(LoadingContext)

    if (context === undefined) {
        throw new Error(
            '`LoadingContext` hook must be used within a `LoadingContext` component'
        )
    }

    return context
}
