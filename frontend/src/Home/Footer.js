import { Box, Divider, Flex, HStack, Icon, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Footer = (props) => {
    return (
        <div>
            <Box
                marginTop={props.mt}
                bg="white"
                bottom="0"
                _dark={{
                    bg: "gray.600",
                }}
            >
                <Stack
                    direction={{
                        base: "column",
                        lg: "row",
                    }}
                    w="full"
                    justify="space-between"
                    p={10}
                >
                    <Flex justify="center">
                        <Image
                            src="https://catalog.wlimg.com/1/9908178/other-images/12577-inner-comp-image.png"
                            alt="Company Logo"
                            rounded="lg"
                            width={{
                                base: "0px",
                                lg: "290px",
                            }}
                            height={{
                                base: "75px",
                                lg: "100px",
                            }}
                            my={{
                                base: 2,
                                lg: 0,
                            }}
                        />
                    </Flex>
                    <HStack
                        alignItems="start"
                        flex={1}
                        justify="space-around"
                        fontSize={{
                            base: "12px",
                            md: "16px",
                        }}
                        color="gray.800"
                        _dark={{
                            color: "white",
                        }}
                        textAlign={{
                            base: "center",
                            md: "left",
                        }}
                    >
                        <Flex justify="start" direction="column">
                            <Link textTransform="uppercase" to='/ok'>FAQS</Link>
                            <Link textTransform="uppercase">Send messages to us</Link>
                        </Flex>
                        
                    </HStack>
                    <HStack
                        alignItems="start"
                        flex={1}
                        justify="space-around"
                        fontSize={{
                            base: "12px",
                            md: "16px",
                        }}
                        color="gray.800"
                        _dark={{
                            color: "white",
                        }}
                        textAlign={{
                            base: "center",
                            md: "left",
                        }}
                    >
                        
                        <Flex justify="start" direction="column">
                            <Link textTransform="uppercase">About Us</Link>
                            <Link textTransform="uppercase">Contact Us</Link>
                            <Link textTransform="uppercase">shop</Link>
                        </Flex>
                    </HStack>
                </Stack>
                <Divider
                    w="95%"
                    mx="auto"
                    color="gray.600"
                    _dark={{
                        color: "#F9FAFB",
                    }}
                    h="3.5px"
                />
                <VStack py={3}>
                    <HStack justify="center">
                        <Link>
                            <Icon
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                h="20px"
                                w="20px"
                            // as={FaFacebookF}
                            />
                        </Link>
                        <Link>
                            <Icon
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                h="20px"
                                w="20px"
                            // as={FiTwitter}
                            />
                        </Link>
                        <Link>
                            <Icon
                                _dark={{
                                    color: "white",
                                }}
                                h="20px"
                                w="20px"
                            // as={GrInstagram}
                            />
                        </Link>
                        <Link>
                            <Icon
                                _dark={{
                                    color: "white",
                                }}
                                h="20px"
                                w="20px"
                            // as={FaLinkedinIn}
                            />
                        </Link>
                    </HStack>

                    <Text
                        textAlign="center"
                        fontSize="smaller"
                        _dark={{
                            color: "white",
                        }}
                    >
                        &copy;Copyright. All rights reserved.
                    </Text>
                </VStack>
            </Box>
        </div>
    )
}


Footer.defaulPprops = {
    mt: '50px'
}