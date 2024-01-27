import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Text,
  Icon,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaWrench, FaUsers, FaClipboardList, FaCogs, FaBars } from 'react-icons/fa';

const MainLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const menuItems = [
    { label: 'Dashboard', icon: FaHome, link: '/dashboard' },
    { label: 'Job Sheet', icon: FaClipboardList, link: '/job-sheet' },
    { label: 'Engineer Management', icon: FaWrench, link: '/engineer-management' },
    { label: 'Customer Management', icon: FaUsers, link: '/customer-management' },
    { label: 'Replacement Parts', icon: FaCogs, link: '/replacement-parts-management' },
  ];

  const SideMenu = () => (
    <VStack align="start" spacing={4} py={2}>
      {menuItems.map(item => (
        <Link as={RouterLink} to={item.link} key={item.label}>
          <Flex align="center">
            <Icon as={item.icon} boxSize={6} />
            <Text ml={2}>{item.label}</Text>
          </Flex>
        </Link>
      ))}
    </VStack>
  );

  return (
    <Box>
      {/* Navbar/Header */}
      <Flex p={4} bg="blue.500" color="white">
        {/* Logo and Company Name */}
        <VStack align="start">
          <Text fontSize="xl" fontWeight="bold">
            Thames Ghana LTD
          </Text>
          <Text fontSize="md">Your Company Slogan</Text>
        </VStack>
        {/* Menu Button */}
        {isMobile ? (
          <IconButton
            icon={<FaBars />}
            aria-label="Open Menu"
            variant="ghost"
            color="white"
            onClick={onOpen}
            display={{ md: 'none' }}
          />
        ) : (
          <SideMenu />
        )}
      </Flex>

      {/* Drawer or SideMenu */}
      {isMobile && (
        <Drawer
          placement="left"
          onClose={onClose}
          isOpen={isOpen}
          size="xs"
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader>
                <Text fontSize="xl" fontWeight="bold">
                  Thames Ghana LTD
                </Text>
              </DrawerHeader>
              <DrawerBody>
                <SideMenu />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}

      {/* Main Content */}
      <Box p={4}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
