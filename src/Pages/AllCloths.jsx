
import { useState, useEffect } from "react"
import Navbar from "../Component/Navbar"
import Sidebar from "../Component/Sidebar"
import Footer from "../Component/Footer"
import DataAppend from "./DataAppend"
import { Grid } from "@chakra-ui/react"

function AllCloths() {

    const [product, SetProduct] = useState([])

    async function getData() {
        return fetch(` http://localhost:3004/arrayOfProducts`)
    }

    async function fetchAndUpdateData() {
        const response = await getData()
        const res = response.json()
            .then(function (res) {
                SetProduct(res)
            })
    }
    // console.log(allproduct)

    useEffect((data) => {
        fetchAndUpdateData()

    },[])

//console.log(product)
    return (
        <>
            <div>
                <Navbar />
                <img width="95%" style={{ margin: "auto" }} src="./womenAllCloth.png" alt="" />

                <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
                    <Sidebar />


                    <div style={{ width: "70%" }}>
                        <Grid templateColumns='repeat(3, 1fr)' gap={2}>
                            {product.map((elem) => (
                                <DataAppend
                                    id={elem.id}
                                    name={elem.name}
                                    imgUrl={elem.imgUrl}
                                    price={elem.price}
                                />
                            ))}
                        </Grid>

                    </div>

                </div>

                <div style={{ marginTop: "80px" }}>
                    <Footer />
                </div>

            </div>
        </>
    )
}

export default AllCloths