import styles from "../Styles/Navbar.module.css"
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Button,
    Input,
    useColorModeValue
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from '@chakra-ui/icons'
import {Link} from "react-router-dom"

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            < div className={styles.Navdiv} >


                <div >
                    <img src="../Fashion.jpg" className={styles.navlogo} alt="" />

                    <div className={styles.firstmenu}>
                        <Menu >
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Gifts
                            </MenuButton>
                            <MenuList>
                                <MenuItem>For Women</MenuItem>
                                <MenuItem>For Men</MenuItem>
                                <MenuItem>For Girls</MenuItem>
                                <MenuItem>For Boys</MenuItem>
                                <MenuItem>For the Home</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>




                    <div className={styles.secondmenu}>
                        <Menu >
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                New
                            </MenuButton>
                            <MenuList style={{ display: "flex" }}>
                            <b> <h5 > Shop New Arrivals</h5></b>
                                <div>
                                    
                                    <MenuItem>For Women</MenuItem>
                                    <MenuItem>For Men</MenuItem>
                                    <MenuItem>For Girls</MenuItem>
                                    <MenuItem>For Boys</MenuItem>
                                </div>

                                <div style={{ marginLeft: "10px" }}>
                                    <b><h5 >  What to Shop Now</h5></b>
                                    <MenuItem> WOMEN</MenuItem>
                                    <MenuItem> The Gift Guide</MenuItem>
                                    <MenuItem>Olympia’s Picks</MenuItem>
                                    <MenuItem> Marie Marot X J.Crew</MenuItem>
                                    <MenuItem>The Sun Shop</MenuItem>
                                    <MenuItem>The Ski Shop</MenuItem>
                                    <MenuItem> The Holiday Party Shop</MenuItem>
                                    <MenuItem>Statement Coats</MenuItem>
                                    <MenuItem>Tartan Everything</MenuItem>
                                </div>

                                <div style={{ marginLeft: "10px" }}>

                                    <MenuItem> MEN</MenuItem>
                                    <MenuItem> Peak Sweater Season</MenuItem>
                                    <MenuItem>The Holiday Party Shop</MenuItem>
                                    <MenuItem> Heavyweight Chamois Workshirts</MenuItem>
                                    <MenuItem>New Parkas & Topcoats</MenuItem>
                                    <MenuItem>Source Materials</MenuItem>
                                    <MenuItem> Heritage 14 Oz. Fleece</MenuItem>
                                </div>

                                <div>
                                    <h3>Bookmark these</h3>
                                    <div style={{ display: "flex" }}>
                                        <img width="200px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1206_flyouts_new_img0_new.jpg" alt="" />
                                        <img style={{ marginLeft: "10px" }} width="200px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1206_flyouts_new_img1.jpg" alt="" />
                                    </div>

                                </div>
                            </MenuList>
                        </Menu>
                    </div>


                    <div className={styles.thirdmenu}>
                        <Menu >
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Women
                            </MenuButton>
                            <MenuList style={{ display: "flex" }}>
                                <div>
                                    <b><h5>New Arrivals</h5></b>
                                    <MenuItem className={styles.MenuItem}>Best Sellers</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Top Rated</MenuItem>
                                    <MenuItem className={styles.MenuItem}>The Re-Imagined Shop</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Shop All</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Sale</MenuItem>
                                    <br />
                                    <b><h5>Shoes & Boots</h5></b>
                                    <MenuItem className={styles.MenuItem}>All Shoes & Boots</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Winter Boots</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Boots</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Slippers</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Birkenstocks</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Flats</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Heels </MenuItem>
                                    <MenuItem className={styles.MenuItem}>Sneakers</MenuItem>

                                </div>

                                <div style={{ marginLeft: "10px" }}>

                                    <b><h5 >  What to Shop Now</h5></b>
                                    <MenuItem className={styles.MenuItem}> WOMEN</MenuItem>
                                    <MenuItem className={styles.MenuItem}> The Gift Guide</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Olympia’s Picks</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Marie Marot X J.Crew</MenuItem>
                                    <MenuItem className={styles.MenuItem}>The Sun Shop</MenuItem>
                                    <MenuItem className={styles.MenuItem}>The Ski Shop</MenuItem>
                                    <MenuItem className={styles.MenuItem}> The Holiday Party Shop</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Statement Coats</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Tartan Everything</MenuItem>
                                </div>

                                <div style={{ marginLeft: "10px" }}>

                                    <b><h5 >Clothing</h5></b>
                                    <Link to="/women">
                                    <MenuItem className={styles.MenuItem}> All Clothing</MenuItem>
                                    </Link>
                                    <MenuItem className={styles.MenuItem}>Sweaters</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Shirts & Tops</MenuItem>
                                    <MenuItem className={styles.MenuItem}>T-Shirts & Tank Tops</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Dresses & Jumpsuits</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Blazers</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Pants</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Denim</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Coats & Jackets</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Skirts</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Swimwear</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Sweatshirts & Sweatpants</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Active</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Matching Sets</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Shorts</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Pajamas & Intimates</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Suiting</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Maternity</MenuItem>
                                </div>

                                <div>
                                    <h3>Bookmark these</h3>
                                    <div style={{ display: "flex" }}>
                                        <img width="150px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img0.jpg" alt="" />
                                        <img style={{ marginLeft: "10px" }} width="200px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img2.jpg" alt="" />
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <img width="100px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img3.jpg" alt="" />
                                        <img style={{ marginLeft: "10px" }} width="100px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img4.jpg" alt="" />
                                        <img style={{ marginLeft: "10px" }} width="100px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img3.jpg" alt="" />

                                    </div>
                                </div>
                            </MenuList>
                        </Menu>
                    </div>




                    <div className={styles.forthmenu}>
                        <Menu >
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Men
                            </MenuButton>
                            <MenuList style={{ display: "flex" }}>


                                <div style={{ marginLeft: "10px",marginTop:"30px" }}>

                                    <b><h5 style={{ marginLeft: "20px"}} >Clothing</h5></b>
                                    <MenuItem className={styles.MenuItem}> All Clothing</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Sweaters</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Shirts & Tops</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Coats & Jackets</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Casual Shirts</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Dress Shirts</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Pants & Chinos</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Denim</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Suits & Tuxedos</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Blazers</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Sweatshirts & Sweatpants</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Polos & Rugby</MenuItem>
                                    <MenuItem className={styles.MenuItem}> T-Shirts</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Pajamas & Loungewear</MenuItem>
                                    <MenuItem className={styles.MenuItem}> Swim</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Underwear & Boxers</MenuItem>

                                </div>

                                <div>
                                    <b><h5>Shoes & Sneakers</h5></b>
                                    <MenuItem className={styles.MenuItem}>All Shoes & Sneakers</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Sneakers</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Boots</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Dress Shoes</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Slippers</MenuItem>
                                    <br />
                                    <b><h5>Accessories</h5></b>
                                    <MenuItem className={styles.MenuItem}>All Accessories</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Scarves, Hats & Gloves</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Socks</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Belts</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Watches & Jewelry</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Bags & Wallets</MenuItem>
                                    <MenuItem className={styles.MenuItem}>Sunglasses & Eyewear </MenuItem>
                                    <MenuItem className={styles.MenuItem}>Candles, Grooming & Home</MenuItem>

                                </div>



                                <div>
                                    <h3>Shops, stories & more</h3>
                                    <div style={{ display: "flex" }}>
                                        <img width="150px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img0.jpg" alt="" />
                                        <img style={{ marginLeft: "10px" }} width="200px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img1.jpg" alt="" />
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <img width="100px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img2.jpg" alt="" />
                                        <img style={{ marginLeft: "10px" }} width="100px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img3.jpg" alt="" />
                                        <img style={{ marginLeft: "10px" }} width="100px" src="https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_m_img4.jpg" alt="" />

                                    </div>
                                </div>
                            </MenuList>
                        </Menu>

                    </div>

                    <div className={styles.fifthmenu}>
                        <Button>
                            Home
                        </Button>
                    </div>


                    <div className={styles.sixthmenu}>
                        <Button>
                            Stories
                        </Button>
                    </div>


                    <div className={styles.seventhmenu}>
                        <Button>
                            Sale
                        </Button>
                    </div>
                </div>



                <div className={styles.rightnav}>
                    <Input style={{ width: "250px" }} placeholder='Fashion Trends' />
                    <Link to="/signup">
                    <Button>Sign up</Button>
                    </Link>

                    <Link to="/cart">
                    <img width="50px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAB7CAMAAACfDCSHAAAAY1BMVEX///8AAABcXFzNzc23t7eurq78/Pz09PRAQECnp6fT09MGBgazs7N3d3fe3t7i4uIQEBCcnJzCwsLs7OyJiYlpaWkgICCTk5NkZGQnJyc6OjqDg4M1NTVNTU1ubm5ISEgZGRno5KgIAAADqElEQVRoge2Z2XbqIBSGoRAoGBMZFK3j+z/l2Rsy2LSnNivouTh8F3YXXfyBPTCEkEKhUCgUCoVCoVAo/FcIW/ewF0l6OlIT8QrJ9zvJt1cIEqLoKgGSB/kazUYncIbneXOxF1qQDLMUF0uKw8ucObCmdPU2g61bLMnpTJbPSTtPcEXPiyUJOHP13nGCTk/J3IGZrA9MpNE8LpcEZ260TOgbpUqgJbC5a6RDYwWmXS6Jzqw628HY/PgkybKjzhHMpeEDSSahm3UvCTO7n0ri0HS05BWmeKFiBBz00dU8cab0OpU0w9DaTRZXEhKGURCyh/CZSuJsJuveB4tgGB5kENq5z5JiCyE9ii+vBIDcjfmNk9hOJGGyu1wEa5dDMc7mTkWqNVb5aEH3m9QIiXut0DC3MdAWYmZUnyyuJETPkGzySEqsc5thlzAYny2KxinXDgJicmPjJoGB4/a4Y2jAwZto4LRXaFnIym0mxZhvPJnnPnqHiFUwxhjE9i6ZFtOuYlXBLcYblCLxSRKS8Ran09+VjMUIrJ1pT7PuBZKkiA8RPSjehh/lwKdYFKn6uVESgMc5o5LbZd0l2SHj6j4RekkBVf/y+TdZaHf9osX6xbGXdIdu9TA5XZn8RDVjTEN8Ug+WxiSBBlZDaK2x4ZwxK5Hwq9KTLSsR9itJk1FR4AL2kEOT9Vi4xdJS/UybUY/EsvY4HkXWUTZ02E7+qJkR+YF7u5ec4AdwC/Ki43QPLmAGq8Hf0Nmn4PEJ7LGr5/L+SPKWZQt7j3okuc8fXJb/iH1xcD0Ntz4f26/JaffnuM16Qtam5eTLxRNmLD09o0oI3HJ803m3rplnDLLPzEl171bvp9xH9ZKTY0d3SNo/xZfX2Pf7pLU7JGXc3A0IomEzRw9fVs04zKzbnlGStOZovln6mT/WT1rWUrfT209x91koFAqFQqFQKBQKhcK/RYwXgOLuxOriVXa6zRYi4602dCTi24fG2a7TNp7WhZqKVA2p21q5wFlwSrWBWS9NRfjcd7UyNEfDNPfqYpWxRsEnNxosLoSyYHoTnNDwDLo1zHBuQI87+M8bedZKm7kvoiRnRgfoyqnGWyUZZ9rIiyVrRVolvAxcWUYszENzDLU9ytYHzRsLozPk2vBLmPvmVBpbNcwHVldWVVbCsBQPGjqvmTMVmBYeAj3gPWla1rhgebAXU61r6x3oNTNH+eugGK5GloZRikmk6y0a3V+Rvh+i9a6pi+Hu67/wByPXK3jKswkzAAAAAElFTkSuQmCC" alt="" />
                    </Link>
                </div>












            </div >
        </>







    )
}

export default Navbar