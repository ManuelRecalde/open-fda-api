import { createContext, useContext, useState } from "react";


const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [open, setOpen] = useState(false)
    const [mostrarResultados, setMostrarResultados] = useState(9)

    return (
        <AppContext.Provider value= {{
            data,
            setData,
            search,
            setSearch,
            isLoading,
            setIsLoading,
            error,
            setError,
            open,
            setOpen,
            mostrarResultados,
            setMostrarResultados
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)