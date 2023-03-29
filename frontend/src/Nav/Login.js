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
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import Nav from './Nav';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [mobile, setmobile] = useState('');
    const [pass, setPass] = useState('');
    const toast = useToast();
    let navigate = useNavigate();

    const onlogin = async () => {


        if (!mobile || !pass) {
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        try {
            const { data } = await axios.post('/api/user/login', { mobile, pass })
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("firstname", JSON.stringify(data.name));
            console.log(data);
            console.log("this is data.mobile");
            console.log(data.mobile);
            if (data.email === 'sagarghetiya@gmail.com') {
                navigate('/admin')

            }
            else {
                navigate('/shop')   

            }
        }
        catch (error) {
            toast({
                title: "Error Occured!",
                description: "mobile number or password wrong!",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }

    }
    return (
        <>
            <Nav />
            <Flex
                minH={'90vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="mobile">
                                <FormLabel>mobile address</FormLabel>
                                <Input type="number" onChange={(e) => { setmobile(e.target.value) }} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onChange={(e) => { setPass(e.target.value) }} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    onClick={onlogin}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}