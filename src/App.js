import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import {TableRow, TableHead,TableContainer} from '@mui/material';
// import Paper from '@mui/material/Paper';



function App() {

const [veri, setVeri] = useState("")




    const getData = async() => {
      const {data} = await axios.get("https://randomuser.me/api/");
      setVeri(data?.results[0])
    }

    useEffect(() => {
      getData();
    }, [])
    
    console.log(veri);

    function createData(name, email, phone, age) {
      return { name, email, phone, age };
    }

    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    ];
    
  return (
      <div>
      <Card sx={{ maxWidth: 667 }}>
        <Avatar alt="person_photo" src={veri?.picture?.large} sx={{ width: 80, height: 80 }}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                My name is
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                My name is
            </Typography>
        </CardContent>

        <CardContent>

        </CardContent>
        <CardActions className='buttons'>
            <Button size="medium">NEW USER</Button>
            <Button size="medium">ADD USER</Button>
        </CardActions>
        <TableContainer>
            <Table sx={{ minWidth: 667 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Age</TableCell>
                  </TableRow>
                </TableHead>
                 <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.phone}</TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                    </TableRow>
                  ))}
                </TableBody> 
          </Table>
    </TableContainer>
   </Card>
  </div>
  );
}

export default App;
