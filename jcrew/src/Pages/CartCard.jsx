import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react';
import { redirect } from 'react-router-dom';
  
 
  
  export default function ProductSimple({id,name,catagory,imgUrl,price}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}      
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}          
            pos={'relative'}
            height={'230px'}
            zIndex={-2000}
            _after={{
              transition: 'all .3s ease',
              content: '""',              
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${imgUrl})`,
              filter: 'blur(15px)',
              zIndex: -2000,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              paddingTop={6}
              width={150}
              objectFit={'cover'}
              src={imgUrl}
              zIndex="-2000"
            />
          </Box>
          <Stack mt={-10}  align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {catagory}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                Price : Rs {price}
              </Text>              
            </Stack>

        <Button       
        px={8}
        bg={useColorModeValue('#151f21', 'gray.900')}
        color={'white'}
        rounded={'md'}       
       >
        Remove
      </Button>
          </Stack>
        </Box>
      </Center>
    );
  }