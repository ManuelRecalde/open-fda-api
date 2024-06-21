import { TextField, Button, Box, Typography} from '@mui/material';
import { useAppContext } from '../context/context';
import { useState } from 'react';


export default function Form() {

    const {setData, search, setSearch, setIsLoading, setError, setMostrarResultados} = useAppContext()

    const apiKey = import.meta.env.VITE_API_KEY

    const buscar = async () => {
        setData([])
        setIsLoading(true)
        setError(null)
        setMostrarResultados(9)

        try {
            const response = await fetch(`https://api.fda.gov/drug/drugsfda.json?api_key=${apiKey}&search=${search}&limit=1000`);

            if (!response.ok) {
                if (response.status === 404) {
                throw new Error('No se encontraron resultados')
                } else {
                throw new Error('Hubo un problema con la solicitud')
                }
            }

            const results = await response.json()
            const data = results.results
            setData(data)

        } catch (error) {
          setError(error.message)
        }
        setIsLoading(false)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const [isValid, setIsValid] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([])
        setError(null)
        if(search===''){
            setIsValid(false)
            setTimeout(() => setIsValid(true), 2000)
        } else {
            buscar(e)
        }
    }

    return (
        <>
            <form  onSubmit={handleSubmit}>
                <Box display="flex" justifyContent='center' alignItems="stretch" gap={2} padding={'0 0 32px 0'}>
                    <TextField error={!isValid} id="outlined-basic" label="Nombre del medicamento" variant="outlined"
                        sx={{minWidth:"60%",
                            '& .MuiOutlinedInput-root.Mui-focused': {
                            borderColor: '#0b113a',
                            },
                            '& .MuiInputLabel-outlined.Mui-focused': {
                            color: '#0b113a',
                            },
                        }}
                        value={search}
                        onChange={handleChange}
                    />

                    <Button
                        variant="contained"
                        type='submit'
                        sx={{backgroundColor:'#0b113a'}}
                    
                    >Buscar</Button>
                </Box>
            </form>

            {!isValid && <Box margin="auto" display='flex' justifyContent='center' bgcolor='#8B0000' color='white' padding={2}><Typography>Ingresa alguna palabra para buscar.</Typography></Box>}

            
         </>
    )
}
