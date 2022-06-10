import React, { useState } from "react";
import './loginsignup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import  sendData  from '../config/routing/firebase/firbasedatabase';
function Signup(){

   
   
    const navigate = useNavigate();
    const [userObj, setUserObj] = useState({});


    const signupUser = () => {

        if(!userObj.email){
            return alert("Email is required ! ") ;
        }
        if(!userObj.password || userObj.password.length < 6 ){
            return alert ( "Pasword is required ! and it should more than 6 characters ! ");
        }
     
      
            // console.log(userObj);
            signupUser(userObj). 
            then ((res) => {
              
                console.log(res);
                sendData(userObj , "users" , res.user.uid) 
                . then (()=>{
                  console.log("Data saved ! ");
                })
                alert("Successfully signup ! ")
                navigate(`/login`);
            }) .catch((err)=>{
              
                console.log(err);
                console.log("Error occur");
        
            }) ;
         };
    return(
        <> 
        <div className="outer-container signup">
       <div className="inner-container">
           <div className="loginTop">
               <div className="custom"></div>
               <Typography variant="h4" color="black">Sign Up</Typography>
           </div>
           <div className="container">
           <div className="inp">
           <TextField
           color="warning"
            id="standard-basic" 
            label="Username or Email" 
            type="email"
            variant="standard"
            required={true}
            onChange={(e) =>
                setUserObj({ ...userObj, email: e.target.value })}
             />
            
           <TextField
           color="warning"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          required={true}
          onChange={(e) =>
            setUserObj({ ...userObj, password: e.target.value })
          }
        />
           <TextField
           color="warning"
          id="standard-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          required={true}
        
        />
           </div>
           <div className="forget typography">  <Typography color="gray" variant="caption">By signing up, you agree to our 
           <strong> <a href="">Terms, Data Policy and Cookie Policy.</a></strong></Typography></div>
           <div className="button">
           <Button className="btn" variant="contained" onClick={signupUser}>Sign Up</Button>
           </div>
           <div className="loginBottom typography">
               <Typography color="gray" variant="caption">Already have an account? <a onClick={signupUser}>Login</a></Typography>
               
               </div>
               </div>
       </div>
       </div>
        </>
    )
}
export default Signup;