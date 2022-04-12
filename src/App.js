import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import {TableRow, TableHead,TableContainer} from '@mui/material';
import Stack from '@mui/material/Stack';
import Man from "./assets/man.svg"
// import Woman from "./assets/woman.svg"
import Padlock from "./assets/padlock.svg"
import Phone from "./assets/phone.svg"
import Mail from "./assets/mail.svg"
import Map from "./assets/map.svg"
import GrowMan from "./assets/growing-up-man.svg"
// import GrowWoman from "./assets/growing-up-woman.svg"
import ButtonGroup from '@mui/material/ButtonGroup';
import CircularProgress from "@mui/material/CircularProgress";



function App() {

const [veri, setVeri] = useState("")
const [loading, setLoading] = useState(false)
const [newUserList, setNewUserList] = useState({
    name:"", email:"", phone:"",age:"" 
})
const {name,email,phone,age} = newUserList;

const handleMouseOver = (e) => {
  setNewUserList({...newUserList, [e.target.name] : e.target.value})
}

    const axiosData = async() => {
      const {data} = await axios.get("https://randomuser.me/api/");
      setVeri(data?.results[0])
    }

    useEffect(() => {
      axiosData();
    }, [])

    console.log(veri);

    function createData(name1, email1, phone1, age1) {
      return { name1, email1, phone1, age1 };
    }

    const rows = [
      createData("sasdasd" , 159, 6.0, 24, 4.0),
    ];

    // const addUser = () => {
    //   setUserList((prevUser) => [...prevUser, {firstname, email, phone, age}]);
    // }
    
  return (
      <div style={{ display:'flex', justifyContent:'center', marginTop:'6rem'}}>
        {loading ? (
          <CircularProgress />
        ) : (
            <Card sx={{ maxWidth: 648 }}>
                  <img
                    src={veri?.picture?.large}
                    alt="person_photo"
                  />
              <CardContent style={{textAlign:"center"}}>
                  <Typography variant="p" component="div">
                      {/* {veri?.name.first} */}
                  </Typography>
                  <Typography variant="p" component="div" style={{fontWeight: 'bold'}}>
                      {/* {veri?.dob.age} */}
                  </Typography>
              </CardContent>

              <CardContent>
              <Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"space-around",cursor:"pointer"}}>
                <Avatar alt="Remy Sharp" src={Man} sx={{ width: 35, height: 35 }}   onMouseOver={(e) =>  handleMouseOver(e) } />
                {/* <Avatar alt="Remy Sharp" src={Woman} sx={{ width: 35, height: 35 }}  onMouseOver={(e) => e.target.[e.target.value]} /> */}
                <Avatar alt="Travis Howard" src={Mail} sx={{ width: 35, height: 35 }}   onMouseOver={(e) => console.log(e)} />
                <Avatar alt="Cindy Baker" src={GrowMan} sx={{ width: 35, height: 35 }}  onMouseOver={(e) => console.log(e)}  />
                {/* <Avatar alt="Cindy Baker" src={GrowWoman} sx={{ width: 35, height: 35 }}  onMouseOver={(e) => e.target.value[e.target.value]}  /> */}
                <Avatar alt="Remy Sharp" src={Map}  sx={{ width: 35, height: 35 }}  onMouseOver={(e) => console.log(e)}/>
                <Avatar alt="Travis Howard" src={Phone} sx={{ width: 35, height: 35 }}  onMouseOver={(e) => console.log(e)} />
                <Avatar alt="Cindy Baker" src={Padlock} sx={{ width: 35, height: 35 }}  onMouseOver={(e) => console.log(e)} />
              </Stack>

              <ButtonGroup style={{display:"flex", justifyContent:"space-around", marginTop:"7%" }}>
                  <Button size="medium" color="error" variant="contained"  onClick={() => axiosData()}>NEW USER</Button>
                  <Button size="medium" color="error" variant="contained" /* onClick={() => addUser() }*/ >ADD USER</Button>
              </ButtonGroup>

              </CardContent>
              <TableContainer>
                  <Table sx={{ minWidth: 648 }} aria-label="simple table">
                      <TableHead>
                        <TableRow style={{border: "7px solid white"}}>
                          <TableCell align="center" style={{backgroundColor:"yellow",border: "3px solid white"}}>First Name</TableCell>
                          <TableCell align="center" style={{backgroundColor:"yellow" , border: "3px solid white"}}>Email</TableCell>
                          <TableCell align="center" style={{backgroundColor:"yellow", border: "3px solid white"}}>Phone</TableCell>
                          <TableCell align="center" style={{backgroundColor:"yellow" , border: "3px solid white"}}>Age</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row" align="center">
                              {row.name}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">{row.age}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>  
                </Table>
          </TableContainer>
        </Card> 
        )}
    </div>
  )
}

export default App;
