import { QuantityPicker } from 'react-qty-picker';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useToast,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { fetchUser } from '../Logics/Logic'
import Rating from 'react-rating';
import Testim from './Testim';

export default function Simple(props) {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState('');
  const [size, setSize] = useState("S");
  const navigate = useNavigate();
  const toast = useToast();
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchProduct = async () => {
    await axios.get('/api/products/get/' + id).then((Response) => {
      setProduct(Response.data.products);
      // console.log(product);
    })
  };

  useEffect(() => {
    fetchProduct();

    // console.log(product);
  }, []);

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_A5nfFb3qV9GdGB",
      amount: 1000,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log("error");
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };




  // console.log(id);


  const addtocart = async () => {
    // await product.push({ qtyx: qty, sizex: size });
    product.qtyx = qty;
    product.sizex = size;
    sessionStorage.setItem("cart" + product._id, JSON.stringify(product));
    toast({
      title: "Item added to cart",
      description: "We've added the item to your cart",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    navigate('/cart');
  }


  const buy = async () => {

  };



  const [review, setReview] = useState({});
  useEffect(() => {
    const reviewsx = async () => {
      await axios.get('/api/review/get/' + id).then((Response) => {
        setReview(Response.data.review);
        if (review) {

          console.log(review);
        }
      })
    };
    reviewsx();
  }, [])

  const [rating, setRating] = useState(0);
  const getrating = async () => {
    let sum = 0;
    let count = 0;
    review?.map((x) => {
      sum += x.rating;
      count += 1;
    })
    let x = sum / count;
    let q = parseFloat(x).toFixed(0);
    setRating(q);
  }
  const [inrating, setInRating] = useState(0);
  const [inreview, setInreview] = useState("");

  const rate = async () => {
    if (inreview === "") {
      toast({
        title: "Review is empty",
        description: "Please write a review",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      return;
    }

    if (rating === 0) {
      toast({
        title: "Rating is empty",
        description: "Please give a rating",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      return;
    }

    const res = await axios.post('/api/review/create/' + id, {
      rating: rating,
      text: inreview
    }, config).then((Response) => {
      console.log(Response.data.review)
    })
    console.log(res);

    toast({
      title: "Review added",
      description: "Thank you for your review",
      status: "success",
      duration: 5000,
      isClosable: true,
    })

  }
  const sizechart = () => {
    navigate('/sizechart')
  }


  useEffect(() => {
    getrating();
  }, [review])
  return (
    <Container maxW={'7xl'}
      overflow={'hidden'}>
      <SimpleGrid
        columns={2}
        spacing={{ base: 1, md: 20 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            marginTop={'50'}
            src={
              product.imageurl
            }
            fit={'cover'}
            align={'center'}

            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>


        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {product.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={700}
              fontSize={'2xl'}>
              ₹{product.price} INR
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>

            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'400'}>
                {product.desc}
              </Text>

            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Shifted seams</ListItem>
                  <ListItem>Articuled Arms</ListItem>{' '}
                  <ListItem>Perfect Length</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Reinforced seams</ListItem>
                  <ListItem>Round neck</ListItem>
                  <ListItem>Extra soft</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    name
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    fabric:
                  </Text>{' '}
                  lycra
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Sleeve Length :
                  </Text>{' '}
                  Short
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    pattern type:
                  </Text>{' '}
                  solid
                </ListItem>

                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <div>
            <QuantityPicker min={1} value={1} onChange={(value) => {
              setQty(value);
            }} />
            <Button marginLeft={30} onChange={(e) => { setSize(e.target.value) }}>
              <select name="cars" id="cars">
                <option value="S">S</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>
                <option value="5XL">5XL</option>
              </select>
            </Button>
          </div>
          <div marginTop={100}>

          </div>
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            onClick={addtocart}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            onClick={buy}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Buy now
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text cursor="pointer" onClick={sizechart}> please refer sizechart here</Text>
          </Stack>
        </Stack>

        <Flex mt={-400} mb={-200} >
          <Text marginRight={7} fontSize='2xl'>Rating :</Text>
          <Rating
            placeholderRating={rating ? rating : 5}
            emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-grey.png" height={50} width={40} className="icon" />}
            placeholderSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-yellow.png" height={50} width={40} className="icon" />}
            fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-yellow.png" height={50} width={40} className="icon" />}
            // onClick={(value) => { setInRating(value) }}
            onChange={(value) => { setRating(value) }}
          />
          <Text marginLeft={7} fontSize='2xl'>{rating ? rating : 2}</Text>
          <Text marginLeft={7} fontSize='2xl'></Text>
          <Button onClick={rate} marginTop={200} colorScheme='blue'>Rate and Review</Button>
        </Flex>
        <Input onChange={(e) => setInreview(e.target.value)} marginTop={-300} marginLeft={-560} width={430} placeholder='medium size' size='md' />
        <Text mt={-370}>Write Review</Text>
      </SimpleGrid>

      <Testim name1={review[0]?.user.firstName} text1={review[0]?.text} name2={review[1]?.user.firstName} text2={review[1]?.text} name3={review[2]?.user.firstName} text3={review[2]?.text} />

    </Container>
  );
}
