import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Modal, Typography } from "@mui/material";

function ResponsiveAppBar() {
  const [products, setProducts] = React.useState([]);
  const [ oneData,setOneData] = React.useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    // console.log(data)
  }
  //   getProducts()
  React.useEffect(() => {
    getProducts();
  }, []);

  const handleOnclickEvent = (item) => {
    const value = products.filter((product) => product.id === item.id);
    console.log(value);
    setOneData(value)
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 0 }}>Title</TableCell>
            <TableCell align="right" sx={{ border: 0 }}>
              Price
            </TableCell>
            <TableCell align="right" sx={{ border: 0 }}>
              Description
            </TableCell>
            <TableCell align="right" sx={{ border: 0 }}>
              Category
            </TableCell>
            <TableCell align="right" sx={{ border: 0 }}>
              Image
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ border: 0 }}>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ border: 0 }}
              onClick={() =>{handleOnclickEvent(product);handleOpen()}}
            >
  



              <TableCell component="th" scope="row" sx={{ border: 0 }}>
                {product.title}
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                {product.price}
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                {product.description}
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                {product.category}
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                <img src={product.image} width="20px" height="20px" alt="" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                <Modal
                open={open}
                onClick={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  
                {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{}}>
            <TableCell sx={{ border: 0 }}>Title</TableCell>
            <TableCell align="right" sx={{ border: 0 }}>
              Price
            </TableCell>
            <TableCell align="right" sx={{ border: 0 }}>
              Description
            </TableCell>
            <TableCell align="right" sx={{ border: 0 }}>
              Category(g)
            </TableCell>
            <TableCell align="right" sx={{ border: 0 }}>
              Image
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ border: 0 }}>
          {oneData.map((product) => (
            <TableRow
              key={product.id}
              sx={{ border: 0 }}
              onClick={() =>{handleOnclickEvent(product);handleOpen()}}
            >
  



              <TableCell component="th" scope="row" sx={{ border: 0 }}>
                {product.title}
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                {product.price}
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                {product.description}
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                {product.category}
              </TableCell>
              <TableCell align="right" sx={{ border: 0 }}>
                <img src={product.image} width="20px" height="20px" alt="" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    {
      oneData.map((product)=>
                <table key={product.id}>
                  <tr className="">
                    <th>Title</th>
                    <td>{product.title}</td>
                  </tr>
                  <tr className="">
                    <th>Price</th>
                    <td>{product.price}</td>
                  </tr>
                  <tr className="">
                    <th>Decription</th>
                    <td>{product.description}</td>
                  </tr>
                  <tr className="">
                    <th>Category</th>
                    <td>{product.category}</td>
                  </tr>
                  <tr className="">
                    <th>Image</th>
                    <td><img  src={product.image} width="50px" height ="50px"/></td>
                  </tr>
                </table>
      )
}
                </Box>
              </Modal>
</>        
  );
}
export default ResponsiveAppBar;
