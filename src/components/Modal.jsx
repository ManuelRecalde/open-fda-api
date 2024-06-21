import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useAppContext } from '../context/context';
import { useEffect } from 'react';

export default function Modal() {

    const {open, setOpen} = useAppContext()

    const handleClose = () => {
        setOpen(false)
        sessionStorage.setItem('modalMostrado', 'true')
    }
    
    useEffect(() => {
        const modalMostrado = sessionStorage.getItem('modalMostrado')

        if (!modalMostrado) {
            
            const timer = setTimeout(() => {
            setOpen(true);
            }, 2000);

           
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="disclaimer-title"
                aria-describedby="disclaimer-description"
            >
                <DialogTitle id="disclaimer-title">ATENCIÓN - Advertencia de OpenFDA</DialogTitle>
                <DialogContent>
                    <DialogContentText id="disclaimer-description">
                        No confíe en openFDA para tomar decisiones relacionadas con la atención médica. Si bien hacemos todo lo posible para garantizar que los datos sean precisos, debe asumir que todos los resultados no están validados.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained'>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>

        </>

    )
}
