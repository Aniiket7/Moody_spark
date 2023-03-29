import {
    Avatar,
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom'
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import React, { useState } from "react";
import Addproduct from './Addproduct'
import Updateproduct from './UpdateProduct'
import ShowProducts from "./ShowProducts";
import ManageOrder from './ManageOrders'

export default function App() {
    const sidebar = useDisclosure();
    const Navigate = useNavigate();
    let params = useParams()
    // const queryParams = new URLSearchParams(window.location.search);
    // const id = queryParams.get('id');
    
    const [ap, setAp] = useState(0) // add prod
    const [up, setUp] = useState(1) // update prod
    const [mo, setMo] = useState(0) // manage orders
    const [sp, setSp] = useState(0) // show products
    
    // console.log(id);
    const aps = () => // add prod state
    {
        setSp(0);
        setMo(0);
        setUp(0);
        setAp(1);
    }
    const ups = () => // update prod state
    {

        setSp(0);
        setUp(1);
        setMo(0);
        setAp(0);
    }
    const sps = () => // show prod state
    {
        Navigate('/admin')
    }
    const mos = () => // manage orders state   
    {
        setUp(0);
        setAp(0);
        setSp(0);
        setMo(1);
    }

    const NavItem = (props) => {
        const { icon, children, ...rest } = props;
        return (
            <Flex
                align="center"
                px="4"
                mx="2"
                rounded="md"
                py="3"
                cursor="pointer"
                color="whiteAlpha.700"
                _hover={{
                    bg: "blackAlpha.300",
                    color: "whiteAlpha.900",
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="2"
                        boxSize="4"
                        _groupHover={{
                            color: "gray.300",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        );
    };

    const SidebarContent = (props) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="brand.600"
            borderColor="blackAlpha.300"
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
                    Admin Dashbord
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <NavItem icon={MdHome} onClick={sps} >Products</NavItem>
                <NavItem icon={MdHome} onClick={aps}>Add product</NavItem>
                <NavItem icon={FaRss} onClick={ups}>Update Product</NavItem>
                <NavItem icon={HiCollection}>delete product</NavItem>
                <NavItem icon={FaClipboardCheck} onClick={mos}>Manage Orders</NavItem>
                {/* <NavItem icon={HiCode}>Integrations</NavItem>
                <NavItem icon={AiFillGift}>Changelog</NavItem> */}
                {/* <NavItem icon={BsGearFill}>Settings</NavItem> */}
            </Flex>
        </Box>
    );
    return (
        <Box as="section" bg="gray.50" _dark={{ bg: "gray.700" }} minH="100vh">
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer
            isOpen={sidebar.isOpen}
            onClose={sidebar.onClose}
            placement="left"
        >
            <DrawerOverlay />
            <DrawerContent>
                <SidebarContent w="full" borderRight="none" />
            </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
            

        <Box as="main" p="1">
                    {/* Add content here, remove div below  */}
                    {sp === 1 ? <ShowProducts /> : console.log("sp")}
                    {ap === 1 ? <Addproduct /> : console.log("ap")}
                    {up=== 1? <Updateproduct /> : console.log("up")}
                    {mo === 1 ? <ManageOrder /> : console.log(1)}

                </Box>
        </Box>
    </Box>
    );
};
