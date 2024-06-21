import { Button, CircularProgress, Typography, Container, Box, useMediaQuery,  } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppContext } from "../context/context"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Header from "../components/Header"
import Error from "../components/Error"
import TablaIngredientes from "../components/TablaIngredientes"
import { useTheme } from '@mui/material/styles'



export default function Detalles() {

    const apiKey = import.meta.env.VITE_API_KEY

    const {isLoading, setIsLoading, setError} = useAppContext()

    const [infoDrug, setInfoDrug] = useState([])

    const { application_number } = useParams();

    const buscarInfoDrug = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(`https://api.fda.gov/drug/drugsfda.json?api_key=${apiKey}&search=${application_number}`);

            if (!response.ok) {
                if (response.status === 404) {
                throw new Error('No se encontraron resultados')
                } else {
                throw new Error('Hubo un problema con la solicitud')
                }
            }

            const results = await response.json()
            const data = results.results
            setInfoDrug(data)

        } catch (error) {
          setError(error.message)
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        buscarInfoDrug()
    }, [])

    const ingredients = infoDrug[0]?.products[0]?.active_ingredients || []
    
    const theme= useTheme()

    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

    const handleClick = () => {
      setError(null)
    }

  return (
    <>  
        <Header />
        <Container maxWidth="lg" sx={{paddingBottom: '48px', display:'flex', flexDirection:'column', gap:2}}>

            <Button onClick={handleClick} component={Link} to='/' variant="outlined" startIcon={<ArrowBackIcon />} sx={{color:'#0b113a', borderColor:'#0b113a', maxWidth:'300px'}}>
                Regresar a la búsqueda
            </Button>

            {isLoading && <Box display='flex' justifyContent='center'><CircularProgress /></Box> }

            <Error />

            {infoDrug.length > 0 && (
                <>
                    <Box 
                        maxWidth="lg" 
                        display='flex'
                        justifyContent='space-between'
                        alignItems={isMediumScreen ? 'flex-start' : 'center'}
                        flexDirection={isMediumScreen ? 'column' : 'row'}
                        gap={4}
                    >
                        <Box display='flex' flexDirection='column' gap={2} justifyContent='space-between'>
                            <Typography variant="body2">ID: {application_number}</Typography>
                            <Typography variant="h5" sx={{backgroundColor:'#0b113a', padding:'4px', color:'white'}}>{infoDrug[0].products[0].brand_name}</Typography>
                            <Typography variant="h6">Sponsor: {infoDrug[0].sponsor_name}</Typography>
                            <Typography variant="body1">dosage_form: {infoDrug[0].products[0].dosage_form}</Typography>
                            <Typography variant="body1">route: {infoDrug[0].products[0].route}</Typography>
                            <Typography variant="body1">marketing_status: {infoDrug[0].products[0].marketing_status}</Typography>

                        </Box>

                        <TablaIngredientes ingredients={ingredients}/>
                    </Box>

                </>
            )}
        </Container>
        

    </>
  )
}
