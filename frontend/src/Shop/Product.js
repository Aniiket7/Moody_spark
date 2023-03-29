import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";




function ProductAddToCart(props) {

  const id = props.id;
  const navigate = useNavigate();
  const display_item = () => {
    navigate('/item/' + id);
  }

  return (
    <Flex style={{padding:'55px',display:'inline-block'}}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        maxW="sm"
        borderWidth="4px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {true && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.900"
          />
        )}

        <Image
          src={props.url}
          alt={`Picture of ${props.name}`}
          roundedTop="lg"
          height={400}
          width={400}
          cursor={'pointer'}
          onClick={display_item}
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {true && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {props.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                Rs 
              </Box>
              {"  "+props.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex >
  );
}

export default ProductAddToCart;