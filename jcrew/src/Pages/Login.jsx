import { useState,useContext } from 'react';

import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

const InitialUser = {
    email: "",
    password: ""
}





export default function Login() {

    
    const[logindata,setLogindata]=useState(InitialUser)  
    
    function handleLogin(e){
        setLogindata({ ...logindata, [e.target.name]: e.target.value });
        console.log(logindata)
    }
    
    const {email,password}=logindata

    async function LoginDataSubmit() {
        let data = await fetch(`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify(logindata),
            headers: { "Content-Type": "application/json" }
        })

        let res = await data.json()
        console.log(res)
        window.location.href = '/'
    }



    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Login</Heading>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email"
                         name="email"
                         value={email}
                         onChange={handleLogin}
                         required
                        
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" 
                        className="form-control"
                         name="password"
                         value={password}
                         onChange={handleLogin}
                         required
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Link color={'blue.500'}>Forgot password?</Link>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'}
                        onClick={LoginDataSubmit}
                        >
                            Login in
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    width="100%"
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        "https://t3.ftcdn.net/jpg/04/65/46/52/240_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
                    }
                />
            </Flex>
        </Stack>
    );
}