import { useEffect,useState } from "react"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,HStack,InputGroup,InputRightElement
} from '@chakra-ui/react';
import  {ViewIcon} from "@chakra-ui/icons"
import { Navigate,useNavigate } from "react-router-dom";



const InitialUser = {
    email:"",
    password :""     
}

function SignUp() {



   const[signupdata,setSignupdata]=useState(InitialUser)       

    async function handlesignupsubmit(e){

        let data = await fetch(`https://reqres.in/api/register`, {
            method: "POST",
            body: JSON.stringify(signupdata),
            headers: { "Content-Type": "application/json" }
        })

        let res = await data.json()
        console.log(res.token)
        
        alert("Token:" + " "+res.token)

    }
    function handlesignup(e){
        setSignupdata({ ...signupdata, [e.target.name]: e.target.value });
        console.log(signupdata)
    }
    const navigate1 = useNavigate();
    function navigate(){
        navigate1("/login")
    }
    
    const {email,password}=signupdata
    return (
        <>
            <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our fashion trends ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" 
              name="email"
              value={email}
              onChange={handlesignup}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type='password' 
                 name="password"
                 value={password}
                 onChange={handlesignup}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    >
                    
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handlesignupsubmit}
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} onClick={navigate}>
                Already a user? <Link   color={'blue.400'}>Login</Link>
              </Text>
             
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </>
    )


}

export default SignUp