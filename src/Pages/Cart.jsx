import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import ProductSimple from "./CartCard";
import { Link } from "react-router-dom"

import {
    useColorModeValue,
    Text,
    Button
} from '@chakra-ui/react';



let data = JSON.parse(localStorage.getItem("cartproduct"))||[]

let totalprice;
if (data == null) {
    totalprice = 0
} else {
    totalprice = data.reduce((acc, el) => {
        return acc + el.price
    }, 0)
}


function Cart() {

    function HandleRemove() {
        // console.log(id)
        console.log("invoked")

    }




    return (
        <>
            <div>
                <div style={{ height: "80px" }}>
                    <Navbar />
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div style={{
                        width: "70%",
                        zIndex: "-2000",
                        display: "grid",
                        gridTemplateColumns: "repeat(3,1fr)",

                    }}>
                        
                        {data.map((elem) => (
                            <ProductSimple
                                key={elem.id}
                                name={elem.name}
                                catagory={elem.catagory}
                                price={elem.price}
                                imgUrl={elem.imgUrl}

                            />
                        ))}
                        


                        {/*<Button
                            px={8}
                            bg={useColorModeValue('#151f21', 'gray.900')}
                            color={'white'}
                            rounded={'md'}
                             >
                            Remove
                        </Button>*/}



                    </div>

                    <div style={{
                        width: "20%",
                        height: "400px",
                        marginTop: "150px"
                    }}>
                        <b><Text fontSize='md'>Item Subtotal : {totalprice}</Text></b>
                        <br />
                        <b><Text fontSize='s'>Estimated Subtotal : {totalprice}</Text></b>
                        <br />
                        <b><Text fontSize='s'>Total Item : {data.length}</Text></b>
                        <br />

                        <Link to="checkout">
                            <Button
                                px={8}
                                bg={useColorModeValue('#151f21', 'gray.900')}
                                color={'white'}
                                rounded={'md'}
                            >
                                CHECKOUT
                            </Button>
                        </Link>

                        <br />
                        <div style={{ width: "80%", margin: "auto" }}>
                            <Text fontSize='xs'>By clicking ‘Check Out Now’, you will be redirected to the ESW checkout page where payment will be taken and your order fulfilled by ESW, J.Crew's preferred partner for international sales.</Text>

                        </div>



                    </div>

                </div>





                <Footer />

            </div>

        </>
    )



}

export default Cart