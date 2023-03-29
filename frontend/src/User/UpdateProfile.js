import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    useToast,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchUser } from '../Logics/Logic';

export default function UserProfileEdit(): JSX.Element {

    const toast = useToast();





    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [zip, setZip] = useState()

    useEffect(() => {


        fetchUser().then((data) => {
            console.log(data);
            setFname(data.firstName)
            setLname(data.lastName)
            setEmail(data.email)
            setPhone(data.mobile)
            setAddress(data.address)
            setCity(data.city)
            setState(data.state)
            setZip(data.pincode)
        })
    }, [])

    const update = async () => {
        const token = localStorage.getItem('token');
        const token2 = JSON.parse(token);
        const config = { headers: { Authorization: `Bearer ${token2}` } };
        const res = await axios.post('/api/user/update/'+token2, { firstName:fname, lastName:lname, email, mobile:phone, address, city, state, pincode: zip }, config);
        if (res.status === 200) {
            toast({
                title: "Profile Updated",
                description: "Your profile has been updated",
                status: "success",
                duration: 5000,
                isClosable: true
            })
        }

    }



    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                p={7}
                borderLeft='4px solid red'
            >

                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    User Profile Edit
                </Heading>
                <FormControl id="text" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                        placeholder="e.g Rahul"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={(e) => setFname(e.target.value)}
                        value={fname}
                        type="email"
                    />
                </FormControl>

                <FormControl id="text" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        placeholder="e.g Patel"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={(e) => setLname(e.target.value)}
                        value={lname}
                        type="email"
                    />
                </FormControl>

                <FormControl id="text" isRequired>
                    <FormLabel>email</FormLabel>
                    <Input
                        placeholder="e.g you@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                    />
                </FormControl>
                <FormControl id="text" isRequired>
                    <FormLabel>Number</FormLabel>
                    <Input
                        placeholder="e.g 8889997777"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="email"
                    />
                </FormControl>
            </Stack>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                p={6}
                my={12}>




                <FormControl id="text" isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input
                        placeholder="e.g 401,Atlantis Skyview"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        type="text"
                    />
                </FormControl>
                <FormControl id="text" isRequired>
                    <FormLabel>city</FormLabel>
                    <Input
                        placeholder="e.g Surat"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        type="text"
                    />
                </FormControl>
                <FormControl id="text" isRequired>
                    <FormLabel>state</FormLabel>
                    <Input
                        placeholder="e.g Gujarat"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        type="text"
                    />
                </FormControl>
                <FormControl id="text" isRequired>
                    <FormLabel>pincode</FormLabel>
                    <Input
                        placeholder="e.g 388451"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={(e) => setZip(e.target.value)}
                        value={zip}
                        type="text"
                    />
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                    <Button
                        bg={'red.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'red.500',
                        }}>
                        Cancel
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        onClick={update}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}