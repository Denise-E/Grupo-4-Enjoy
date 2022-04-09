import * as React from 'react';
import {useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'name', label: 'Nombre', minWidth: 170 },
  {
    id: 'category',
    label: 'Categoría',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'description',
    label: 'Descripción',
    minWidth: 170,
    align: 'left',
    
  },
  
];

function createData(id, name, category, description) {
  
  return { id, name, category, description };
}




export default function ProductsTable() {
    const [products,setState] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:3000/api/products/')
        .then(res => res.json())
        .then( data => setState(data.products))        
        console.log('Inicia')
    },[])

    useEffect(() => {
        fetch('http://localhost:3000/api/products/')
        .then(res => res.json())
        .then( data => setState(data.products))        
        console.log('Actualiza')
    },[])

    const rows = products.map(products => createData(products.id,products.name,products.category,products.description))    

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}