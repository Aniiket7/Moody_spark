import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles(props) {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} mt={-140}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Reviews</Heading>
        </Stack>    
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                {props.text1}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://p.kindpng.com/picc/s/24-248253_user-profile-default-image-png-clipart-png-download.png'
              }
              name={props.name1}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
             {props.text2}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://p.kindpng.com/picc/s/24-248253_user-profile-default-image-png-clipart-png-download.png'
              }
              name={props.name2}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                {props.text3}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://p.kindpng.com/picc/s/24-248253_user-profile-default-image-png-clipart-png-download.png'
              }
              name={props.name3}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}

WithSpeechBubbles.defaultProps = {
  name1:"Kavya Sharma",
  text1:"I love the product. Anyway, I’ve just placed an order for 6 t-shirts and I very much hope to see this business continue to grow. ",
  name2:"Rahul shah",
  text2:"Thank you. Your service was excellent, and the t-shirts are great.",
  name3:"Neha Patel",
  text3:"I bought this tee as a gift for a friend for Christmas. He loves these t-shirts and says that he loves the quality "
}