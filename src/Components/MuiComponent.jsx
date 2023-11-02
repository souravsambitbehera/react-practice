import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// In your component file or a separate CSS file
// import './styles.css';  // Import as a module
import styles from './styles.module.css'; 
import '.'; // Import global styles

// ...your component code



function ResponsiveAppBar() {
  

  const [products,setProducts]= React.useState([])


  async function getProducts(){
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    setProducts(data)
    // console.log(data)
  }
//   getProducts()
React.useEffect(()=>{
    getProducts()
},[])

  return (
    
    
     
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Category(g)</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          products.map(product=> 
        
            <TableRow
            key ={product.id}
            sx={{border:0}}
            >
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.description}</TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right"><img src={product.image} width="20px" height="20px" alt="" /></TableCell>
            </TableRow>
      
          )}
        </TableBody>
      </Table>
    </TableContainer>
    
    
  );
}
export default ResponsiveAppBar;
