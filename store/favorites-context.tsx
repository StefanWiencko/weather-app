// import React, { createContext, useState } from 'react'

type Location = { location: string, id: string }

type Context = {
    favoriteLocations: Location[] | null
    addFavoriteLocation: (a: Location) => void
    removeFavoriteLocation: (a: string) => void
}

type Props = {
    children: React.ReactNode
}

// export const FavoritesContext = createContext<Context>({
//     ids: [],
//     addFavorite: (id: string) => { },
//     removeFavorite: (id: string) => { },
// })

// const FavoritesContextProvider = ({ children }: Props) => {
//     const [favoriteMealIds, setFavoriteMealIds] = useState<[] | string[]>([])

//     const addFavorite = (id: string) => {
//         setFavoriteMealIds((curr) => [...curr, id])
//     }

//     const removeFavorite = (id: string) => {
//         setFavoriteMealIds((curr) => curr.filter(mealId => mealId !== id))
//     }

//     const value = {
//         ids: favoriteMealIds,
//         addFavorite: addFavorite,
//         removeFavorite: removeFavorite
//     }
//     return <FavoritesContext.Provider value={value} >
//         {children}
//     </FavoritesContext.Provider>
// }

// export default FavoritesContextProvider

import { createContext, useMemo, useState, useContext } from 'react'
const ValueContext = createContext<Context | null>(null)

export const useValue = () => {
    const context = useContext(ValueContext)
    if (context === undefined) {
        throw new Error('useValue must be used within a ValueProvider')
    }
    return context
}

const ValueProvider = ({ children }: Props) => {
    const [favoriteLocations, setFavoriteLocations] = useState<Location[] | null>(null)

    const addFavoriteLocation = (location: Location) => {
        setFavoriteLocations((curr) => curr === null ? [location] : [...curr, location])
    }

    const removeFavoriteLocation = (id: string) => {
        setFavoriteLocations((curr) => curr === null ? null : curr.filter(location => location.id !== id))
    }
    const valueObject = useMemo(() => {
        return { favoriteLocations: favoriteLocations, addFavoriteLocation: addFavoriteLocation, removeFavoriteLocation: removeFavoriteLocation }
    }, [favoriteLocations, setFavoriteLocations, addFavoriteLocation, removeFavoriteLocation])
    return <ValueContext.Provider value={valueObject}>{children}  </ValueContext.Provider>
}
export default ValueProvider