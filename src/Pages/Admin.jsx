import styles from "../Styles/Admin.module.css"
import { Link } from "react-router-dom"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Text, Input, Button, ButtonGroup
} from '@chakra-ui/react'
import { useState } from "react"
function Admin() {

        const[admindata,setAdmindata]=useState({
            email:"",
            password:""
        })


    function handleAdminlogin(){
        alert("Loginedin Successfully")
         window.location.href = '/admin/addproduct'

    }

    function handleAdminchange(e){
       

         setAdmindata({...admindata,[e.target.name]:e.target.value})
    }



    return (
        <>
            <ul>
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="/admin/addproduct">Add Product</Link></li>
                <li><Link to="/admin/deleteproduct"> Delete Product</Link></li>

                </ul>
                <br/> <br/>
                <b><Text fontSize='2xl'>Admin Login</Text></b>
        <div style={{ width: "500px", margin: "auto", marginTop: "30px" }}>
        <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='text'
                        name="id"
                        placeholder="Email"
                        onChange={handleAdminchange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='password'
                        name="imgUrl"
                        placeholder="Password"
                        onChange={handleAdminchange}
                        required
                    />
                </FormControl>
                <br/> <br/>
                <Button onClick={handleAdminlogin} colorScheme='blue'>Sign In</Button>


        </div>
                

            
        </>
    )
}

export default Admin