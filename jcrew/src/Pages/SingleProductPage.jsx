import { useParams, } from "react-router-dom";
import { useState, useEffect,useContext } from "react"
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import styles from "../Styles/SingleProductPage.module.css"
import { Heading, Select, Button } from "@chakra-ui/react"
import { CartContext } from "../Context/CartContext";




function SingleProductPage() {

    const{ cart,setIsCart ,Addtocart}=useContext(CartContext)
   // console.log(cart)

    const { id } = useParams();
    //console.log(id);

    const [productDetail, SetproductDetail] = useState([]);
    const [quantity, SetQuantity] = useState(1)

    useEffect(() => {
        const data = fetch(`http://localhost:3004/arrayOfProducts/${id}`)
            .then((res) => res.json())
            .then((res) => SetproductDetail(res))
            .catch((err) => console.log(err));
    }, [id]);

    const { imgUrl, name, price, category } = productDetail;

    function handleQuantity(changeBy) {
        SetQuantity(quantity + changeBy)
    }


    function AddProducttocart(){
       let cartdata=JSON.parse(localStorage.getItem('cartproduct'))||[]
       cartdata.push(productDetail)
       localStorage.setItem('cartproduct',JSON.stringify(cartdata))
    }

    return (
        <>


            <Navbar />
            <div>
                <img width="100%" src="../Singlepageimage.png" alt="Image" />
            </div>

            <div className={styles.mainproductdiv}>
                <div className={styles.imagediv}>
                    <b><p>Home/Women</p></b>
                    <img src={imgUrl} alt="Image" />
                </div>
                <div className={styles.infodiv}>
                    <Heading as='h2' size='xl'>
                        {name}
                    </Heading>

                    <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                        <b><label>Select Size :-</label></b>
                        <div style={{ width: "200px" }}>
                            <Select placeholder='Select option'>
                                <option value='option1'>S</option>
                                <option value='option2'>M</option>
                                <option value='option3'>L</option>
                                <option value='option1'>Xl</option>
                                <option value='option1'>XXl</option>
                            </Select>
                        </div>
                        <br />

                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", alignItems: "center", marginTop: "30px" }}>
                        <b><label>Quantity</label></b>
                        <Button colorScheme='teal' variant='outline' disabled={quantity == 1} onClick={() => handleQuantity(-1)}>
                            -
                        </Button>
                        <button style={{ width: "30px" }}>{quantity}</button>
                        <Button colorScheme='teal' variant='outline' disabled={quantity == 10} onClick={() => handleQuantity(1)}>
                            +
                        </Button>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", alignItems: "center", marginTop: "30px" }}>
                        <b><label>Price :- {quantity * price}</label></b>
                    </div>

                    <div style={{ marginTop: "10px", display:"block" }}>

                        <Button style={{width:"150px"}} bg="black" h={8} colorScheme='blue' onClick={()=>AddProducttocart()}>ADD TO CART</Button><br/><br/>
                        <Button style={{width:"150px"}} bg="black" h={8} colorScheme='blue'>CHECKOUT</Button>
                    </div>

                </div>




            </div>

            <Footer />
        </>
    )


}

export default SingleProductPage