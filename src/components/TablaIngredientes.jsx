import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Typography } from '@mui/material';

export default function TablaIngredientes({ingredients}) {
    return (
        <>
            <TableContainer component={Paper} sx={{maxWidth:'500px'}}>
                    <Table>
                    <TableHead>
                        <TableRow sx={{backgroundColor:'#eaeaea'}}>
                            <TableCell ><Typography variant="subtitle1">Nombre del Ingrediente</Typography></TableCell>
                            <TableCell><Typography variant="subtitle1">Cantidad</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ingredients.map((ingredient, index) => (
                        <TableRow key={index}>
                            <TableCell>{ingredient.name}</TableCell>
                            <TableCell>{ingredient.strength}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
        </>
    )
}
