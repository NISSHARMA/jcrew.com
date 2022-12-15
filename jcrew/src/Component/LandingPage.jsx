
import React from "react"
import Navbar from "./Navbar"
import styles from "../Styles/LandingPage.module.css"
import Footer from "./Footer"
import { Box, Text, Button, HStack } from '@chakra-ui/react'
function LandingPage() {

  return (
    <>
      <Navbar />
      <div className={styles.topimage} >
        <img width="80%" src="https://www.jcrew.com/brand_creative/homepage2022/15-Dec4/2022dec2_1213_hp_w_img0.jpg" alt="" />
        <div>
          <img width="70%" src="secondimage.png" alt="" />
          <img width="70%" src="1stimage.png" alt="" />
        </div>

        <div style={{ display: "flex", width: "80%", margin: "auto" }}>
          <HStack spacing='50px' mt={10}>
            <Text fontSize='2xl'> Shop New Arrivals</Text>

            <Button
              size='md'
              height='40px'
              width='150px'
              border='2px'
              borderColor='black.500'
              color='black'
              zIndex="-200"
            >
              Shop Women
            </Button>
            <Button
              size='md'
              height='40px'
              width='150px'
              border='2px'
              borderColor='black.500'
              color='black'
              zIndex="-200"
            >
              Shop Men
            </Button>
            <Button
              size='md'
              height='40px'
              width='150px'
              border='2px'
              borderColor='black.500'
              color='black'
              zIndex="-200"
            >
              Shop Girls
            </Button>
            <Button
              size='md'
              height='40px'
              width='150px'
              border='2px'
              borderColor='black.500'
              color='black'
              zIndex="-200"
            >
              Shop Boys
            </Button>
          </HStack>
        </div>

        <div style={{ width: "40%", marginTop: "30px" }}>
          <img width="200px" src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic" alt="" />

        </div>

        <div className={styles.catagorydiv} >
          <div className={styles.subsection}>
            <img width="80%" src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_w_img12.jpg" alt="" />
            <Text fontSize='sm'>Creative Spirits Series</Text>
            <Text fontSize='xl'>Marie Marot X J.Crew</Text>
          </div>
          <div className={styles.subsection}>
            <img width="80%" src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img7.jpg" alt="" />
            <Text fontSize='sm'>That fall feeling</Text>
            <Text fontSize='xl'>Layer love with Marjon Carlos</Text>
          </div>
          <div className={styles.subsection}>
            <img width="80%" src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img8.jpg" alt="" />
            <Text fontSize='sm'>Heritage made modern</Text>
            <Text fontSize='xl'>A Cashmere Remix with Lucy Williams</Text>
          </div>
        </div>


        <div className={styles.morestoriesdiv}>
          <Text fontSize='3xl'>More Stories</Text>
        </div>

        <div className={styles.morestoriesdata}>
          <div className={styles.morestoriessubdata}>
            <img width="80%" src="https://www.jcrew.com/brand_creative/homepage2022/14-Dec3/gifcyb_w_agnetha.jpg" alt="" />
            <Text fontSize='xl'>Most wanted: limited-edition Barbour® X J.Crew Agnetha jacket</Text>
          </div>
          <div className={styles.morestoriessubdata}>
            <img width="80%" src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img9.jpg" alt="" />
            <Text fontSize='xl'>The edit: tartan time</Text>
          </div>
          <div className={styles.morestoriessubdata}>
            <img width="80%" src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_w_img10.jpg" alt="" />
            <Text fontSize='xl'>Olympia’s picks</Text>
          </div>
          <div className={styles.morestoriessubdata}>
            <img width="80%" src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img11.jpg" alt="" />
            <Text fontSize='xl'>Design Try-ons: the Holiday Collection</Text>
          </div>
        </div>

        <div className={styles.morestoriesdiv}>
          <Text fontSize='3xl'>You’ll Also Love</Text>
        </div>

        <div className={styles.youwilalsolovedata}>
          <div className={styles.youwilalsoloveimages}>
            <img width="100%" src="https://www.jcrew.com/s7-img-facade/BM964_WQ9208?wid=376" alt="" />
          </div>
          <div className={styles.youwilalsoloveimages}>
            <img width="100%" src="https://www.jcrew.com/s7-img-facade/BD802_WT0002_m?wid=376" alt="" />
          </div>
          <div className={styles.youwilalsoloveimages}>
            <img width="100%" src="https://www.jcrew.com/s7-img-facade/BA538_BK0001_m?wid=376" alt="" />
          </div>
          <div className={styles.youwilalsoloveimages}>
            <img width="100%" src="https://www.jcrew.com/s7-img-facade/BC473_GY5980_m?wid=376" alt="" />
          </div>
          <div className={styles.youwilalsoloveimages}>
            <img width="100%" src="https://www.jcrew.com/s7-img-facade/BD005_BK0001_m?wid=376" alt="" />
          </div>
          <div className={styles.youwilalsoloveimages}>
            <img width="100%" src="https://www.jcrew.com/s7-img-facade/AZ279_HT1033?wid=376" alt="" />
          </div>
        </div>


        <div className={styles.morestoriesdiv}>
          <Text fontSize='3xl'>Shop our Instagram</Text>
          <Text fontSize='m'>(and join the fun with #injcrew)</Text>
        </div>


        <div className={styles.slider}>

        </div>


        <div className={styles.morestoriesdiv}>
          <Text fontSize='3xl'>More you need to see</Text>
        </div>

        <div className={styles.moreyouneed}>
          <div className={styles.moreyouneedimages}>
            <img src="https://www.jcrew.com/s7-img-facade/BD613_RD6052_m?wid=416" alt="" />
            <Text fontSize='xs'>Shop Women's Sweaters</Text>
          </div>
          <div className={styles.moreyouneedimages}>
            <img src="https://www.jcrew.com/s7-img-facade/BN161_YD2172_m?wid=416" alt="" />
            <Text fontSize='xs'>Shop Women's Shirts & Tops</Text>
          </div>
          <div className={styles.moreyouneedimages}>
            <img src="https://www.jcrew.com/s7-img-facade/BM312_PT3361_m?wid=416" alt="" />
            <Text fontSize='xs'>Shop Women's T-shirts & Tank Tops</Text>
          </div>
          <div className={styles.moreyouneedimages}>
            <img src="https://www.jcrew.com/s7-img-facade/BM874_YD2455_m?wid=416" alt="" />
            <Text fontSize='xs'>Shop Women's Dresses & Jumpsuits</Text>
          </div>
          <div className={styles.moreyouneedimages}>
            <img src="https://www.jcrew.com/s7-img-facade/BM557_YD2455_m?wid=416" alt="" />
            <Text fontSize='xs'>Shop Women's Blazers</Text>
          </div>
          <div className={styles.moreyouneedimages}>
            <img src="https://www.jcrew.com/s7-img-facade/BM751_BK0001_m?wid=416" alt="" />
            <Text fontSize='xs'>Shop Women's Pants</Text>
          </div>
        </div>

      </div>
      <Footer/>
    </>
   

  )


}

export default LandingPage