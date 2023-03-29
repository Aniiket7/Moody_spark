import React from 'react'
import { AspectRatio, Box, HStack, Stack, Text } from '@chakra-ui/react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <>
            <HStack spacing='24px'>
                <Box w='950px' h='450px' >
                    <AspectRatio maxW='820px' maxH='550px' my='25px' d='block' ml='100px' alignItems='center' justifyContent='center' ratio={1}>
                        <iframe d='flex' alignItems='center' justifyContent='center'
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.149921923814!2d72.8776327!3d21.2402743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61e336505136d474!2sMOODY%20SPARK!5e0!3m2!1sen!2sin!4v1659456247210!5m2!1sen!2sin"
                            allowFullScreen
                        />
                    </AspectRatio>
                </Box>
                <Box w='450px' h='450px' ml='px'>
                    <Stack direction='row' spacing='50px' my='44px'>
                        <i class="fas fa-map-marked-alt fa-5x" style={{ color: "red" }}></i>
                        <Text d='flex' alignItems='center' justifyContent='center'>
                            A 415 - Avalon Mall, Ambatalavdi , Surat
                        </Text>
                    </Stack>
                    <Stack direction='row'>
                        <Text color='red.400' my='-30px' mx='10px'>
                            Address
                        </Text>
                    </Stack>


                    <Stack direction='row' spacing='50px' my='44px'>
                        <i class="fa fa-user fa-6x" aria-hidden="true" style={{ color: "red" }}></i>
                        <Stack direction='column'>

                            <Text >
                                Aniket Movaliya - 8849729618
                            </Text><Text >
                                Bhavdip Maniya - 7778031900
                            </Text>

                            <Text >
                                Jay Nakrani - 9879127331
                            </Text>
                            <Text >
                                Preet Padariya - 9879024660
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack direction='row'>
                        <Text color='red.400' my='-30px' mx='10px'>
                            Owners
                        </Text>
                    </Stack>


                    <Stack direction='row' spacing='50px' my='44px'>
                        <i class="fas fa-envelope fa-5x" style={{ color: "red" }}></i>
                        <Text d='flex' alignItems='center' justifyContent='center'>
                            support@moodyspark.com
                        </Text>
                    </Stack>
                    <Stack direction='row'>
                        <Text color='red.400' my='-30px' mx='10px'>
                            Mail Us
                        </Text>
                    </Stack>
                </Box>

            </HStack>

            {/* contact form area */}
            <div id="form" style={{ marginTop: "200px" }}> </div>
            <ContactForm />

        </>
    )
}

export default Contact
