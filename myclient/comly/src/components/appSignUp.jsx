import React from 'react';
import { useContext } from 'react';
import { UsersContext } from './signup';
import { useFormik } from "formik";
import Card from 'react-bootstrap/Card';
import { width } from '@mui/system';



const AppSignUp =()=>{
    const {addNewUser, errorMsg, setErrorMsg} =useContext(UsersContext)
    console.log(errorMsg)
    const formik = useFormik({
        initialValues: {
        name : "",
        email : "",
        password :""
        },
        });
        const  handelsubmitUser=(e)=>{
            e.preventDefault();
            let newVal=formik.values
            addNewUser(newVal)
            setTimeout(() => {
                formik.handleReset()
            }, 3000);
            
        
          }


    
    return(
<div>

        <div id='d1' style={{display:'flex', justifyContent:'center'}}>
<Card style={{ display:'flex', justifyContent:'center', width:'60vh', marginTop:'5%', backgroundColor:'transparent' }}>
    {/* <Card.Img src={img1} style={{width:200 ,marginLeft:"30%"}}/> */}
      <Card.Body>
      <h1>Sign Up ✍💭</h1>
        <Card.Text>
        <form onSubmit={(e)=>{handelsubmitUser(e)}}>
<label htmlFor="">Name</label>
<input
    type="text"
    className="form-control"
    name="name"
    placeholder="Enter Name"
    value={formik.values.name}
    onChange={formik.handleChange}
    />
  <br />
     <label htmlFor="">E-mail</label>
<input
    type="email"
    className="form-control"
    name="email"
    placeholder="Enter E-mail"
    value={formik.values.email}
    onChange={formik.handleChange}
    />
  <br />
  
  <label htmlFor="">Password</label>
  <input
    type="password"
    className="form-control"
    name="password"
    placeholder="Enter Password"
    value={formik.values.password}
    onChange={formik.handleChange}
    />
    <br />
    <button type='submit' className='btn btn-dark' >submit</button>
    <br />
    <label htmlFor="">{errorMsg}</label>
</form>
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
    </div>


      





    
    {/* <div style={{backgroundColor:'#b49581'}}>
    <TableContainer  style={{height: 300, overflowX: 'hidden', overflowY: 'auto',display:'flex', justifyContent:'center'}}>
      <Table sx={{width:"50%"}} aria-label="simple table">
        <TableHead style={{backgroundColor:"#CBBEB3",position:'sticky', top:0}}>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell  align="right">email</TableCell>
            <TableCell  align="right">Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:"seashell"}}>
          {users.map((item) => (
            <TableRow
              key={item.id}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                transition: 'transform 0.3s','&:hover': {
                  transform: 'scale(1.03)',
               }
              }}
            
            >
              <TableCell component="th" scope="row">{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </div> */}


      
</div>


   

)
}
export default AppSignUp;