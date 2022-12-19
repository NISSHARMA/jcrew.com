import { useState } from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Text, Input, Button, ButtonGroup
} from '@chakra-ui/react'
import { Link } from "react-router-dom"
import styles from "../Styles/Admin.module.css"


function Deleteproduct() {
    
    const[id,setId]=useState({id:""})
  
    function handleDeleteProduct(e){
      
     let   val=e.target.value
     //console.log(val)
        setId({...id,[e.target.name]:val})
       
    }

    async function Deletethisproduct(){
        let res = await fetch(`http://localhost:3004/arrayOfProducts/${id.id}`, {

        method: 'DELETE'

    })
    }


    return (
        <>
          <ul>
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="/admin/addproduct">Add Product</Link></li>
                <li><Link to="/admin/deleteproduct"> Delete Product</Link></li>
            </ul>
            <b><Text fontSize='2xl'>Delete Products</Text></b>
            <div style={{ width: "500px", margin: "auto", marginTop: "30px" }}>
                <FormControl>
                    <FormLabel>ID</FormLabel>
                    <Input type='text'
                        name="id"
                        onChange={handleDeleteProduct}
                    />
                </FormControl>

               <br/>
                <Button onClick={Deletethisproduct} colorScheme='blue'>Delete Product</Button>

            </div>
        </>
    )
}

export default Deleteproduct