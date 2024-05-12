import { Location } from '@/types'

type Context = {
    favoriteLocations: Location[] | null
    addFavoriteLocation: (a: Location) => void
    removeFavoriteLocation: (a: number) => void
}

type Props = {
    children: React.ReactNode
}

import { createContext, useMemo, useState, useContext } from 'react'
const FavoriteLocationsContext = createContext<Context | null>(null)

export const useFavoriteLocation = () => {
    const context = useContext(FavoriteLocationsContext)
    if (context === undefined) {
        throw new Error('useFavoriteLocation must be used within a FavoriteLocationProvider')
    }
    if (context === null) {
        throw new Error('FavoriteLocationsContext is not initialized')
    }
    return context
}

const FavoriteLocationsProvider = ({ children }: Props) => {
    const [favoriteLocations, setFavoriteLocations] = useState<Location[] | null>(null)

    const addFavoriteLocation = (location: Location) => {
        setFavoriteLocations((curr) => curr === null ? [location] : [...curr, location])
    }

    const removeFavoriteLocation = (id: number) => {
        setFavoriteLocations((curr) => curr === null ? null : curr.filter(location => location.id !== id))
    }
    const valueObject = useMemo(() => {
        return { favoriteLocations: favoriteLocations, addFavoriteLocation: addFavoriteLocation, removeFavoriteLocation: removeFavoriteLocation }
    }, [favoriteLocations, setFavoriteLocations, addFavoriteLocation, removeFavoriteLocation])
    return <FavoriteLocationsContext.Provider value={valueObject}>{children}</FavoriteLocationsContext.Provider>
}
export default FavoriteLocationsProvider