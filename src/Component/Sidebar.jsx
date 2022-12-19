
import styles from "../Styles/Sidebar.module.css"
import Footer from "../Component/Footer"
import { useState,useEffect } from "react"
import {
    Checkbox, CheckboxGroup, Text, Select, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"




function Sidebar() {






 

   
   
    return (
        <>
            <div className={styles.sidebar}>
                <div>
                    <b><Text fontSize='xl'>Catagory</Text></b>
                    <div style={{ marginTop: "20px" }}>

                        <Checkbox >Accesories & More</Checkbox><br />
                        <Checkbox >Active </Checkbox><br />
                        <Checkbox >Blazers</Checkbox><br />
                        <Checkbox >Coats & Jackets</Checkbox><br />
                        <Checkbox >Denims</Checkbox><br />
                        <Checkbox >Jackets and Jumpsuit</Checkbox><br />
                        <Checkbox >Matching Sets</Checkbox><br />
                    </div>
                    <hr />

                </div>


                <div >
                    <div style={{ marginTop: "20px" }}>
                        <b><Text fontSize='xl'>Sorting</Text></b>
                        <div className={styles.selecttags}>

                            <Select placeholder='Sort By Price' >
                                <option value='option1'>High to low</option>
                                <option value='option2'>Low to high</option>
                            </Select>
                        </div>


                        <div className={styles.selecttags}>
                            <Select placeholder='color'>
                                <option value='option1'>Red</option>
                                <option value='option2'>Blue</option>
                                <option value='option3'>Green</option>
                            </Select>
                        </div>

                        <div className={styles.selecttags}>
                            <Select placeholder='Discount'>
                                <option value='option1'>20%</option>
                                <option value='option2'>30%</option>
                                <option value='option3'>40%</option>
                            </Select>
                        </div>

                        <div className={styles.selecttags}>
                            <Select placeholder='Brand'>
                                <option value='option1'>Barbour</option>
                                <option value='option2'>Liberty</option>
                                <option value='option3'>Maria Marot</option>
                            </Select>
                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}

export default Sidebar