import { Typography, Button,Box, Card, CardContent, Container, CircularProgress, CardActions, } from '@mui/material';
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './context/context';
import Header from './components/Header';
import Error from './components/Error';
import Modal from './components/Modal';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function App() {

  const {data, isLoading, mostrarResultados, setMostrarResultados} = useAppContext()

  const navigate = useNavigate()

  const handleMasInfo = (application_number) => {
    navigate(`/detalles/${application_number}`)
  }

  const mostrarMas = () => {
    setMostrarResultados(prev => prev + 9)
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{paddingBottom: '48px'}}>

        <Modal />
        <Form />

        {isLoading && <Box display='flex' justifyContent='center'><CircularProgress /></Box> }

        <Error />

        <Box display='flex' justifyContent='center' gap={4} flexWrap='wrap'>

          { data.length > 0 && data.slice(0, mostrarResultados).map((result) => (

              <Card key={result.application_number} sx={{width: '350px', display: 'flex column', alignItems:'stretch'}}>
                <CardContent>
                  <Typography variant="body1">{result.sponsor_name}</Typography>
                  <Typography variant="h6">{result.products[0].brand_name}</Typography>
                  <Typography variant="body2">{result.application_number}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>handleMasInfo(result.application_number)} variant='outlined' sx={{color:'#0b113a', borderColor:'#0b113a'}}>Más Info</Button>
                  
                </CardActions>
              </Card>

            ))
          }
        </Box>
        {mostrarResultados < data.length && (
          <Box mt={4} display="flex" justifyContent="center">
            <Button variant="contained" onClick={mostrarMas} endIcon={<KeyboardArrowDownIcon />} sx={{backgroundColor:'#0b113a'}}>Mostrar más resultados</Button>
          </Box>
        )}

      </Container>
    </>
  )
}

export default App