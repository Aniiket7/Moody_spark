import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Toast,
    useToast,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';

export default function UserProfileEdit(): JSX.Element {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [size, setSize] = useState("");
    const [imageurl, setImageurl] = useState("");
    const [quantity, setQuantity] = useState("");


    const uploadimg = (pics) => {
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "moody spark");
            data.append("cloud_name", "messengerzzz");
            fetch("https://api.cloudinary.com/v1_1/messengerzzz/image/upload", {
                method: "post",
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    setImageurl(data.url.toString());
                    console.log(data.url.toString());
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }


    const toast = useToast()
    const update = async () => {

        if (name === "" || desc === "" || price === "" || category === "" || size === "" || imageurl === "" || quantity === "") {
            toast({
                title: "Error",
                description: "Please fill all the fields",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }

        const token = localStorage.getItem('token');
        const token2 = JSON.parse(token);
        const config = { headers: { Authorization: `Bearer ${token2}` } }
        const res = await axios.post(`api/products/add`, { name, desc, price, category, size, imageurl, quantity }, config)
        console.log(res);
        console.log(res.data);
        if(res.statusText === "Created"){
        toast({
            title: "Product Added",
            description: "Product has been added",
            status: "success",
            duration: 5000,
            isClosable: true,

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
                    Add Product
                </Heading>
                <FormControl id="text" isRequired>
                    <FormLabel>Tshirt Name</FormLabel>
                    <Input
                        placeholder="e.g Cotton Candy"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </FormControl>

                <FormControl id="text" isRequired>
                    <FormLabel>Tshirt Description</FormLabel>
                    <Input
                        placeholder="e.g A  navy blue pattren printed stylish tshirt"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        onChange={(e) => { setDesc(e.target.value) }}
                    />
                </FormControl>

                <FormControl id="text" isRequired>
                    <FormLabel>Price</FormLabel>
                    <Input
                        placeholder="e.g 599"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </FormControl>
                <FormControl id="text" isRequired>
                    <FormLabel>Category</FormLabel>
                    <Input
                        placeholder="e.g Lycra"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        onChange={(e) => { setCategory(e.target.value) }}
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




                <FormControl id="text" isRequired marginTop={4}>
                    <FormLabel>size</FormLabel>
                    <select id="cars" name="cars" onChange={(e) => { setSize(e.target.value) }}>
                        <option value="L">Select size</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="X">X</option>
                        <option value="XL">XL</option>
                    </select>
                </FormControl>
                <FormControl id="text" isRequired>
                    <FormLabel>image</FormLabel>
                    <Input
                        placeholder="e.g Surat"
                        _placeholder={{ color: 'gray.500' }}
                        type="file"
                        onChange={(e) => uploadimg(e.target.files[0])}
                    />
                </FormControl>
                <FormControl id="text" isRequired>
                    <FormLabel>Quantity</FormLabel>
                    <Input
                        placeholder="e.g Gujarat"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        onChange={(e) => { setQuantity(e.target.value) }}
                    />
                </FormControl>
                <FormControl id="text" isRequired>
                    <FormLabel>notes</FormLabel>
                    <Input
                        placeholder="e.g price might change slightly due to covid"
                        _placeholder={{ color: 'gray.500' }}
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