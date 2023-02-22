
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import validate from "./validate";


export default function Loggin(props){
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) =>{
        event.preventDefault()
        setErrors(validate(userData))
        const tieneerrores = errors
        if(tieneerrores.length === 0){
          alert="informacion errornea"
        }else{
          props.login(userData)   
        }       
    }

    const handleInputChange = (event) =>{    
      setUserData({...userData, [event.target.name]: event.target.value  });
      setErrors(validate({...userData, [event.target.name]: event.target.value }));
  };

    
  // const handleInputChange = (event) =>{    
    //    const { name, value } = event.target;
    //    setUserData({ ...userData, [name]: value });
    //    setErrors({ ...errors, [name]: null });
    //};

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Ussername</label>
                    <input type="text" name="username" value={userData.username} onChange={handleInputChange}></input>
                    <span>{errors.username}</span>
                    <label>Password</label>
                    <input type="text" name="password" value={userData.password} onChange={handleInputChange}></input>
                    <span>{errors.password}</span>
                    <button type="submit">ENTRAR</button>
                </form>
            </div>

            )
}

//setUserData({
//    ...userData,
//    [event.target.username]: event.target.value,
//    [event.target.password]: event.target.value
//})
//setErrors({
//    ...errors,
//    [event.target.username]: event.target.value,
//    [event.target.password]: event.target.value,
//})