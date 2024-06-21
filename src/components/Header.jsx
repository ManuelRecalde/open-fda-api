import { Container, Box, Typography, } from "@mui/material"
import logo from '../assets/LogoJaraxa.svg'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuPersonal from './MenuPersonal'


export default function Header() {

    const theme = useTheme()
    const responsive = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
        <Container maxWidth='100%' sx={{
            width:'100%',
            marginBottom:'48px',
            padding:0,
            '&.MuiContainer-root': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        }}>
            <Box
                 sx={{ width:'100%', display: 'flex', gap:4, justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#0b113a',padding:'0 24px 0 24px' }}
            >
                <Box
                    display={"flex"}
                    gap={4}
                >
                    <Box
                        component="img"
                        alt="Logo"
                        src={logo}
                        width='80px'
                    />

                    <Box padding={'32px 0' }>
                        <Typography variant="h6" component="h2" sx={{fontSize: responsive ? '14px' : '18px', fontWeight:600, color:'white'}}>
                            Desafío Jaraxa - Desarrollador Front End
                        </Typography>
                        
                    </Box>
                </Box>
                <MenuPersonal />
            </Box>

            
            <Typography variant="h5" component="h1" sx={{fontWeight: 600, fontSize: responsive ? '18px' : '24px', marginTop:'32px', textAlign:'center'}}>
                Buscador de Medicamentos - Open FDA API
            </Typography>
        </Container>
    
    </>
  )
}
