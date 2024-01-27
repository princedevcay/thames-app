import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Heading,
  Icon,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image
} from '@chakra-ui/react';
import {
  FiMenu, FiHome, FiClipboard, FiTool , FiSettings, FiUser, FiLogOut, FiUsers
} from 'react-icons/fi';
import { HiOutlineMenuAlt3, HiOutlineMenuAlt1 } from 'react-icons/hi';
import Dashboard from './Dashboard';
import CustomerManagement from './CustomerManagement';
import EngineerManagement from './EngineerManagement';
import JobSheetForm from './JobSheetForm';
import ReplacementPartsManagement from './ReplacementPartsManagement';



const MainLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [isExpanded, setExpanded] = useState(true);
  

  const toggleDrawerSize = () => {
    setExpanded(!isExpanded);
  };


  // Sidebar content array for mapping, including submenus
  const sidebarContent = [
    { icon: FiHome, name: 'Dashboard', path: '/dashboard' },
    { icon: FiClipboard, name: 'Job Sheet', path: '/job-sheet' },
    { icon: FiTool, name: 'Engineer Management',  path: '/engineer-management' },
    { icon: FiUsers, name: 'Customer Management',  path: '/customer-management' },
    {  icon: FiSettings, name: 'Replacement Parts', path: '/replacement-parts-management' },

  ];

  // Function to render sidebar items
  const renderSidebarItems = (items) => {
    return items.map((item, index) => (
      item.children ? (
        <Menu key={index}>
          <MenuButton as={Button} color='white' w="100%" textAlign={"left"} variant="ghost"  leftIcon={<Icon as={item.icon} />} _hover={{ bg: 'gray.100', color: 'blue.500' }}>
            {item.name}
          </MenuButton>
          <MenuList>
            {item.children.map((child, childIndex) => (
              <MenuItem as={Link} to={child.path} key={childIndex} onClick={onClose}>
                {child.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <Link as={Link} to={item.path} key={index}>
          <Button w="100%" color="white" variant="ghost" justifyContent="flex-start" leftIcon={<Icon as={item.icon} />} _hover={{ bg: 'gray.100', color: 'blue.500' }} onClick={onClose}>
            {item.name}
          </Button>
        </Link>
      )
    ));
  };

  return (
    <Flex minHeight="100vh">
      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full" >
        <DrawerOverlay />
        <DrawerContent maxWidth="55%" bg="#0c4da2">
          <DrawerCloseButton />
          <Flex width="full" justify="center"> {/* Center the image */}
            <Image src="/logo.jpg" alt="TOR Logo" boxSize="100px" objectFit="contain" />
          </Flex>
          <DrawerHeader borderBottomWidth="1px" size="xl" mb={6} pl={3} justify="center" color={"white"}>Thames Business Solutions Ltd</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              {renderSidebarItems(sidebarContent)}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

       {/* Desktop Sidebar */}
       <Box
        display={{ base: 'none', md: 'block' }}
        width={isExpanded ? { md: '250px' } : { md: '80px' }}
        bg="#0c4da2"
        p={4}
        boxShadow="md"
        transition="width 0.3s"
      >
        <Flex justify="space-between" align="center" mb={4}>
          <IconButton
            aria-label="Toggle Menu"
            icon={<FiMenu />}
            onClick={onOpen}
            size="lg"
            m={2}
            display={{ base: 'flex', md: 'none' }}
          />
          <Flex align="center">
          </Flex>
        </Flex>
        <Flex width="full" justify="center">
          <Image src="/logo.jpg" alt="TOR Logo" bgColor={"white"} borderRadius={"50%"} padding={2} boxSize="100px" objectFit="contain" />
        </Flex>
        <Heading size="lg" mb={6} pl={3} justify="center" color={"white"}>Thames Business Solutions Ltd</Heading>
        <Box borderBottomWidth="1px"></Box>
        <VStack mt={6} align="stretch" spacing={4}>
          {renderSidebarItems(sidebarContent)}
        </VStack>
      </Box>

      {/* Main Content and Header */}
      <Box flex="1" p={4}>
        <Flex justify="space-between" align="center" mb={4}>
          <IconButton
            aria-label="Open Menu"
            icon={<FiMenu />}
            onClick={onOpen}
            size="lg"
            m={2}
            display={{ base: 'flex', md: 'none' }} // Only show on mobile
          />
          <Box flex="1" />
          <Menu>
          <MenuButton as={Button} colorScheme="teal" rounded="full" variant="link" cursor="pointer" minW={0} ml={5}>
               <Avatar size="sm" name="User" />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<FiUser />}>My Profile</MenuItem>
              <MenuItem icon={<FiSettings />}>Settings</MenuItem>
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Box as="main" p={4}>
          <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/job-sheet" element={<JobSheetForm />} />
          <Route path="/engineer-management" element={<EngineerManagement />} />
          <Route path="/customer-management" element={<CustomerManagement />} />
          <Route path="/replacement-parts-management" element={<ReplacementPartsManagement />} />
        </Routes>
        </Box>
      </Box>
    </Flex>
  );
};

export default MainLayout;
