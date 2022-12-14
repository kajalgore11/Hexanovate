import React from 'react'
import styles from './nav.module.css'
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
  Stack,Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Navbar=()=>{
  const Links = ['Services','Products', 'Portfolio','Pricing','Blogs','About', 'Contact Us'];

const NavLink = ({ children, children: ReactNode }) => (
  <Link className={styles.link}
    // px={2}
    // py={1}
    // rounded={'md'}
    // _hover={{
    //   textDecoration: 'none',
    //   bg: useColorModeValue('gray.200', 'gray.700'),
    // }}
    href={'#'}>
    {children}
  </Link>
);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    {/* <div className={styles.bg_color} > */}
      <Box className={styles.all_box1}>
        <div className={styles.mobile_div} py={5}>
        <Box className={styles.mobile_no} py={5}> +91 9404102425</Box>
        </div>
        <Flex className={styles.icon_btn} h={16} py={10} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton className={styles.open_btn}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack className={styles.menu_mobile} spacing={8} alignItems={'center'}>
            {/* <Image src="h-logo.png" alt='h' /> */}
            <Image src="logo-blue.svg" alt='h' />
            {/* <Box>Logo</Box> */}
            <HStack className={styles.menu_mobile}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Sign In
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
             </MenuButton>
              {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
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

      <Box p={4}>Main Content Here</Box>
      {/* </div> */}
    </>
  );
}
export default Navbar;
