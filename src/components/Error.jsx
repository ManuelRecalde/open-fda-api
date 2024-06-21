import { Typography } from '@mui/material'
import { useAppContext } from '../context/context'

export default function Error() {

    const {error} = useAppContext()

    return (
        <>
            {error && (
                <p>
                {error.includes('No se encontraron resultados')
                    ? <Typography sx={{textAlign:'center'}}>No se encontraron resultados para la búsqueda. Intenta con otra palabra.</Typography>
                    : <Typography sx={{textAlign:'center'}}>Ocurrió un problema con el servidor. Intenta recargar la página.</Typography>}
                </p>
            )}
        </>
    )
}
