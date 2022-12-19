
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Text, Input, Button, ButtonGroup
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import styles from "../Styles/Admin.module.css"





function Addproduct() {

    const [addproduct, setAddproduct] = useState({
        id: "",
        imgUrl: "",
        name: "",
        price: "",
        catagory: ""
    })


    function handleAddProduct(e){
        setAddproduct({...addproduct,[e.target.name]:e.target.value})
        console.log(addproduct)
    }
    

   async function postproduct(){
        let res = await fetch(`http://localhost:3004/arrayOfProducts`, {
        method: 'POST',
        body: JSON.stringify(addproduct),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let data = await res.json()
    console.log(data)

    }

    return (
        <>
          <ul>
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="/admin/addproduct">Add Product</Link></li>
                <li><Link to="/admin/deleteproduct"> Delete Product</Link></li>
            </ul>
            <b><Text fontSize='2xl'>Add Products</Text></b>
            <div style={{ width: "500px", margin: "auto", marginTop: "30px" }}>
                <FormControl>
                    <FormLabel>ID</FormLabel>
                    <Input type='number'
                        name="id"
                        onChange={handleAddProduct}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Image URL</FormLabel>
                    <Input type='text'
                        name="imgUrl"
                        onChange={handleAddProduct}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Name Of Product</FormLabel>
                    <Input type='text'
                        name="name"
                        onChange={handleAddProduct}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input type='number'
                        name="price"
                        onChange={handleAddProduct}

                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Catagory</FormLabel>
                    <Input type='text'
                        name="catagory"
                        onChange={handleAddProduct}

                    />
                </FormControl>
                <br />
                <Button onClick={postproduct} colorScheme='blue'>Add Product</Button>


            </div>

        </>
    )
}
export default Addproduct