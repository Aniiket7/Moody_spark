import { Box, Flex, SimpleGrid,Button,chakra, Image } from '@chakra-ui/react'
import React from 'react'

const Feature = () => {
    return (
        <div>
            <Flex
                bg="#blue.800"
                _dark={{
                    bg: "#gray.800",
                }}
                p={20}
                w="full"
                justifyContent="center"
                alignItems="center"
                pos="absolute"
            >
                <Box
                    shadow="xl"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    px={8}
                    py={20}
                    mx="auto"
                >
                    <SimpleGrid
                        alignItems="start"
                        columns={{
                            base: 1,
                            md: 2,
                        }}
                        mb={24}
                        spacingY={{
                            base: 10,
                            md: 32,
                        }}
                        spacingX={{
                            base: 10,
                            md: 24,
                        }}
                    >
                        <Box>
                            <chakra.h2
                                mb={4}
                                fontSize={{
                                    base: "2xl",
                                    md: "4xl",
                                }}
                                fontWeight="extrabold"
                                letterSpacing="tight"
                                textAlign={{
                                    base: "center",
                                    md: "left",
                                }}
                                color="gray.900"
                                _dark={{
                                    color: "gray.400",
                                }}
                                lineHeight={{
                                    md: "shorter",
                                }}
                                textShadow="2px 0 currentcolor"
                            >
                               unrivaled fashion house
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{
                                    base: "center",
                                    sm: "left",
                                }}
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                                fontSize={{
                                    md: "lg",
                                }}
                            >
                                very good quality products with best price in the market. try us and you will never regret. all fashion products are available with affordable price and best quality.peoples are loving our products since they are very good quality and affordable.customer satisfaction is our first priority.
                                dont miss the chance to buy our products. latest fashion products are available with us at best price in the market and best quality products.
                            </chakra.p>
                            <Button
                                w={{
                                    base: "full",
                                    sm: "auto",
                                }}
                                size="lg"
                                bg="gray.900"
                                _dark={{
                                    bg: "gray.700",
                                }}
                                _hover={{
                                    bg: "gray.700",
                                    _dark: {
                                        bg: "gray.600",
                                    },
                                }}
                                color="gray.100"
                                as="a"
                                href='/shop'
                            >
                                Learn More
                            </Button>
                        </Box>
                        <Box
                            w="500px"
                            h="500px"
                            bg="gray.200"
                            _dark={{
                                bg: "gray.700",
                            }}
                        >
                            <Image src='https://mrkstore.in/wp-content/uploads/2021/07/11-1.jpeg' alt='MOODY SPARK' />
                        </Box>
                    </SimpleGrid>
                    <SimpleGrid
                        alignItems="center"
                        columns={{
                            base: 1,
                            md: 2,
                        }}
                        flexDirection="column-reverse"
                        mb={24}
                        spacingY={{
                            base: 10,
                            md: 32,
                        }}
                        spacingX={{
                            base: 10,
                            md: 24,
                        }}
                    >
                        <Box
                            order={{
                                base: "initial",
                                md: 2,
                            }}
                        >
                            <chakra.h2
                                mb={4}
                                fontSize={{
                                    base: "2xl",
                                    md: "4xl",
                                }}
                                fontWeight="extrabold"
                                letterSpacing="tight"
                                textAlign={{
                                    base: "center",
                                    md: "left",
                                }}
                                color="gray.900"
                                _dark={{
                                    color: "gray.400",
                                }}
                                lineHeight={{
                                    md: "shorter",
                                }}
                            >
                                Be yourself by creating your own style
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{
                                    base: "center",
                                    sm: "left",
                                }}
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                                fontSize={{
                                    md: "lg",
                                }}
                            >
                                Create your own style by mixing and matching different products. look at the different styles and choose the one that suits you the best.
                            </chakra.p>
                            <Button
                                w={{
                                    base: "full",
                                    sm: "auto",
                                }}
                                size="lg"
                                bg="gray.900"
                                _dark={{
                                    bg: "gray.700",
                                }}
                                _hover={{
                                    bg: "gray.700",
                                    _dark: {
                                        bg: "gray.600",
                                    },
                                }}
                                color="gray.100"
                                as="a"
                                href='/shop'
                            >
                                Learn More
                            </Button>
                        </Box>
                        <Box
                            w="450px"
                            h="400px"
                            bg="gray.200"
                            _dark={{
                                bg: "gray.700",
                            }}
                        >
                              <Image src='https://images.prismic.io/rushordertees-web/0d4bbbe2-2678-4f38-9c7a-e7797be75ba0_Crewneck+Sweatshirts.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C1800&w=800' alt='MOODY SPARK' />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
            <div style={{paddingTop:"150px"}}></div>
        </div>
    )
}

export default Feature
