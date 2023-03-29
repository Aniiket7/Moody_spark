import { Box, Flex, Link, chakra } from '@chakra-ui/react'
import React from 'react'

const About_text = () => {
    return (
        <div>
            <Flex
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    bg="white"
                    _dark={{
                        bg: "gray.800",
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
                        w={{
                            lg: "50%",
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
                            style={{
                                backgroundImage:
                                    "url('https://images.bewakoof.com/uploads/campaign/our-story-1501569294.png')",
                            }}
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
                            lg: "50%",
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
                            Build Your New{" "}
                            <chakra.span
                                color="brand.600"
                                _dark={{
                                    color: "brand.400",
                                }}
                            >
                                Idea
                            </chakra.span>
                        </chakra.h2>
                        <chakra.p
                            mt={4}
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                            Establishment in 2018, Moody Spark is among one of the trustworthy business organizations thoroughly engages in the realm of trading, manufacturing, and exporting a broad collection of Garments which includes Men's Lycra Shorts, Men's Cotton Shorts, Men's Hoodies, Men's Sweatshirts, Lycra Mens Track Pants, Men's Lycra Lower, Men's Full Sleeve T-Shirts, Mens Plain T-Shirts, Mens Lycra T-Shirts, and Mens Polo T-Shirts, etc.


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
                            >
                                Start Now
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Flex>;
        </div>
    )
}

export default About_text
