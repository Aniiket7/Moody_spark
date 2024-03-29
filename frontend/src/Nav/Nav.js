import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon, AddIcon, ArrowRightIcon, MoonIcon, SunIcon, CalendarIcon } from '@chakra-ui/icons';

const Links = ['shop'];


const NavLink = ({ children }: { children: ReactNode }) => (
  <>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'/shop'}>
      {children}
    </Link>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'/about'}>
      About Us
    </Link>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'/contact'}>
      Contact Us
    </Link>
  </>
);

export default function Nav() {

  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstname');
    navigate('/login');
  }
  const firstname = JSON.parse(localStorage.getItem("firstname"));
  const signup = () => {
    // usenavigation.navigate('/signup');
    navigate('/signup');
  }
  const login = () => {
    // usenavigation.navigate('/signup');
    navigate('/login');
  }

  const cart = () => {
    navigate('/cart');
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div position='fixed'>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Moody Spark</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode} mr="10">
              {colorMode === 'light' ? <MoonIcon mr="3" /> : <SunIcon mr="3" />}
              Theme
            </Button>
            {firstname ?
              <Button onClick={cart} mr="10">
                {colorMode === 'light' ? <CalendarIcon mr="3" /> : <CalendarIcon mr="3" />}
                Cart
              </Button> : null}


            {firstname ? <text style={{ "margin-right": "30px" }}> hello , {firstname}  </text> :
              <><Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'sm'}
                mr={4}
                leftIcon={<AddIcon />}
                onClick={signup}>
                Sign Up
              </Button>
                <Button
                  variant={'solid'}
                  colorScheme={'teal'}
                  size={'sm'}
                  mr={4}
                  leftIcon={<ArrowRightIcon />}
                  onClick={login}>
                  Login
                </Button>
              </>}
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}

                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem onClick={
                  logout
                }>LogOut</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}