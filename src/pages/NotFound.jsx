import { Container,Typography,Button  } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <Container maxWidth='100%' sx={{ width:'100%', height: '100vh', display: 'flex', flexDirection:'column', gap:4, justifyContent: 'center', alignItems: 'center', backgroundColor:'#eaeaea' }}>
        <Typography variant="h3" sx={{ textAlign: 'center'}}>Lo sentimos, página no encontrada.</Typography>
        <Typography variant="h5" sx={{ textAlign: 'center'}}>Puedes realizar una búsqueda en la página principal.</Typography>
        <Link to={'/'}>
            <Button variant="contained" startIcon={<ArrowBackIcon />} sx={{backgroundColor:'#0b113a'}}>
                Ir a la página principal
            </Button>
        </Link>
    </Container>
  )
}
