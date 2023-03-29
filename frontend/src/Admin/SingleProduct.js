import { Box, Flex, Link, chakra, useToast,useDisclosure, Button, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalFooter, ModalContent, ModalBody } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import UpdateProduct from './UpdateProduct'

const OrderCard = (props) => {
    const Navigate = useNavigate();
    const rateRedirect = () => {
        Navigate('/rate/' + props.id)
    }

    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const editproduct = () => {
        Navigate('/admin/update/' + props.id)
    }
    const deleteprod = async () => {
        const token = localStorage.getItem('token');
        const token2 = JSON.parse(token);
        const config = { headers: { Authorization: `Bearer ${token2}` } }
        const res = await axios.post(`/api/products/delete/${props.id}`,config)
        if (res.statusText === "Created") {
            toast({
                title: "Product Updated",
                description: "Product has been added",
                status: "success",
                duration: 5000,
                isClosable: true,

            })
        }
        window.location.reload();
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
                            {props.name}
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
                                color: "gray.400",
                            }}
                        >
                            Rs {props.price}
                        </chakra.p>
                        <chakra.p
                            mt={4}
                            color="gray.700"
                            width={700}
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                            {props.desc}
                        </chakra.p>

                        <Box mt={8}>
                            <Link
                                bg="gray.900"
                                color="gray.100"
                                px={5}
                                py={3}
                                fontWeight="semibold"
                                rounded="lg"
                                _hover={{
                                    bg: "gray.800",
                                }}
                                onClick={editproduct}
                            >
                                Edit Product
                            </Link>
                        </Box>
                        <Box mt={-5} ml={450} width={500}>
                            <Link
                                bg="gray.900"
                                color="gray.100"
                                px={5}
                                py={3}
                                onClick={onOpen}
                                fontWeight="semibold"
                                rounded="lg"
                                _hover={{
                                    bg: "gray.800",
                                }}
                            >
                                Delete Product
                            </Link>
                            <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Confirm Delete</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button variant='ghost' onClick={deleteprod}>Delete</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Box>
            </Box>
        </Flex>
        </div >
    )
}

export default OrderCard
