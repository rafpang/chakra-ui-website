import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiMenu,
  FiStar,
  FiBook,
  FiInfo
} from 'react-icons/fi';
import Image from 'next/image'
import { IconType } from 'react-icons';
import { BiCode } from "react-icons/bi";


interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, to:"hero" },
  { name: 'About', icon: FiInfo, to:"About" },
  { name: 'Education', icon:  FiBook, to:"Education"},

  { name: 'Skills', icon: FiStar, to:"Skills" },

   { name: 'Projects', icon: BiCode, to:"Projects" },
  
//   { name: 'Settings', icon: FiSettings },
];

export default function Navbar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('#212226', 'gray.200')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={"#2e2f35"}
      borderRight="1px gray.600"
      borderRightColor={useColorModeValue('gray.200', 'gray.200')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between" flexDirection={"row"}>
        
            <Text fontSize="20" fontFamily="monospace" fontWeight="bold" color={'white'}>
              Rafi Pangestu
            </Text>
            {/* <Text fontSize="20" fontWeight="bold" color={"black"} textShadow="1px 2px #f4db7d">
            Rafi Pangestu
          </Text> */}
          
       
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} bg={'purple.400'} _hover={{bg:"purple.400"}}/>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} to={link.to} onClick={onClose}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
  to: String;
}
const NavItem = ({ icon, children, to , ...rest }: NavItemProps) => {
  return (
    <Link href={`#${to}`} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'purple.400',
          color: 'white',
        }}
        color={"white"}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
  
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Box zIndex={9999} sx={{ position: 'sticky', top: '0', }}>
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={"#2e2f35"}
      borderBottomWidth="1px"
      borderBottomColor={"purple.400"}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        border = {"none"}
        _hover={{bg:"purple.400"}}
        bg={'purple.400'}
        //width={"px"}
        //height={"15px"}
        
        
      />

      <Text fontSize={"15px"} ml="8" fontFamily="monospace" fontWeight="bold" color="white">
        Rafi Pangestu
      </Text>
    </Flex>
    </Box>
  );
};
