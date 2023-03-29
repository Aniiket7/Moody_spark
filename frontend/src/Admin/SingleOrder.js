import { Box, Flex, Link, chakra } from '@chakra-ui/react'
import React from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { Tooltip } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'



const OrderCard = (props) => {
    const toast = useToast()
    const config = { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` } }
    const approveOrder = () => {
        axios.post(`api/order/update/${props.id}`, { status: "Approved" }, config)

        // create a toast here
        toast({
            title: "Order Approved",
            description: "Order has been approved",
            status: "success",
            duration: 5000,
            isClosable: true,
        })

    }
    const deleteOrder = () => {
        axios.delete(`api/order/delete/${props.id}`, config)
        toast({
            title: "Order deleted",
            description: "Order has been deleted",
            status: "error",
            duration: 5000,
            isClosable: true,
        })
    }



    return (
        <div>
            <Flex
                bg="#edf3f8"
                _dark={{
                    bg: "#17192300",
                }}
                p={10}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    bg="white"
                    _dark={{
                        bg: "#7193d66b",
                    }}
                    mx={{
                        lg: 8,
                    }}
                    display={{
                        lg: "flex",
                    }}
                    maxW={{
                        lg: "5xl",
                    }}
                    shadow={{
                        lg: "lg",
                    }}
                    rounded={{
                        lg: "lg",
                    }}
                >
                    <Box
                        padding={15}
                        w={{
                            lg: "30%",

                        }}
                    >
                        <Box
                            h={{
                                base: 64,
                                lg: "full",
                            }}
                            rounded={{
                                lg: "lg",
                            }}
                            bgSize="cover"
                            backgroundImage={props.imageurl}
                        ></Box>
                    </Box>

                    <Box
                        py={12}
                        px={6}
                        maxW={{
                            base: "xl",
                            lg: "5xl",
                        }}
                        w={{
                            lg: "60%",
                        }}
                    >
                        <chakra.h2
                            fontSize={{
                                base: "2xl",
                                md: "3xl",
                            }}
                            color="gray.800"
                            _dark={{
                                color: "white",
                            }}
                            fontWeight="bold"
                        >
                            Name : {props.name}
                            <chakra.span
                                color="brand.600"
                                _dark={{
                                    color: "brand.400",
                                }}
                            >

                            </chakra.span>
                        </chakra.h2>
                        <chakra.p
                            mt={4}
                            color="gray.600"
                            width={7001}
                            _dark={{
                                color: "blue.100",
                            }}
                        >
                            Qty {props.qty} || Rs {props.price}
                        </chakra.p>
                        <chakra.p
                            mt={4}
                            color="gray.700"
                            width={700}
                            _dark={{
                                color: "blue.100",
                            }}
                        >
                            Delivery Address :   {props.address}
                        </chakra.p>

                        <Box mt={8}>
                            <Link
                                bg="gray.900"
                                color="gray.100"
                                px={5}
                                py={3}
                                fontWeight="semibold"
                                rounded="lg"
                                onClick={approveOrder}
                                _hover={{
                                    bg: "gray.800",



                                }}
                            >
                                
                            <Tooltip label="Approve it" aria-label='A tooltip'>
                                 {props.status}
                            </Tooltip>
                            </Link>
                        </Box>
                        <Box mt={-5} ml={450} width={500}>
                            <Link
                                bg="gray.900"
                                color="gray.100"
                                px={5}
                                py={3}
                                onClick={deleteOrder}
                                fontWeight="semibold"
                                rounded="lg"
                                _hover={{
                                    bg: "gray.800",
                                }}
                            >
                                Delete Order
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default OrderCard

