import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Nav from './Nav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const toast = useToast();
  const navigate = useNavigate();
  const signup = async() => {
    if(!email || !password || !firstName || !lastName) {
      toast ({
        title: "Error",
        description: "Please fill all the fields",
        status: "error",
        duration: 5000,
        isClosable: true,
        
      })
    }
    if(mobile.length !== 10) {
      toast ({
        title: "Error",
        description: "Please enter a valid mobile number",
        status: "error",
        duration: 5000,
        isClosable: true,
        
      })
    }

    const res = await axios.post('/api/user', {
      "email": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "mobile": mobile
    });
    
    if(res.data.message === "user already exists") {
      toast ({
        title: "Error",
        description: "User already exists",
        status: "error",
        duration: 5000,
        isClosable: true,
        
      })
      return;
    }

    toast ({
      title: "Success",
      description: "You have successfully signed up",
      status: "success",
      duration: 5000,
      isClosable: true,
    })

    navigate('/login');

  
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Nav />
      <Flex
        maxH={'90vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'xl'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={3}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" onChange={(e)=>{
                      setFirstName(e.target.value);
                    }} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" onChange={(e)=>{
                      setLastName(e.target.value);
                    }}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>{
                      setEmail(e.target.value);
                    }}/>
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile number</FormLabel>
                <Input type="text" onChange={(e)=>{
                      setMobile(e.target.value);
                    }} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>{
                    setPassword(e.target.value);
                  }} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
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
                  onClick={signup}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}