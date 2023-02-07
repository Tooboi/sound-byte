import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  Hide,
  Show,
  Avatar,
  AspectRatio,
  HStack,
  IconButton,
  Icon,
  Center,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Grid,
  Heading,
  Menu,
  Link,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useStyleConfig,
  Stack,
  Spacer,
  ButtonGroup,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, SettingsIcon, AddIcon, Search2Icon, InfoOutlineIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <Box
        width="100%"
        // minW="796px"
        bg="grey.900"
        className="header-box"
      >
        <Grid templateColumns="repeat(3, 1fr)">
          <Flex px="4" align="center" justify="start">
            <Link href={'/'}>
              <Icon viewBox="0 0 448 512" color="primary.400" boxSize="48px" pr="2">
                <path
                  fill="currentColor"
                  d="M192 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32zM82.7 207c-15.3 8.8-20.5 28.4-11.7 43.7l32 55.4c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.5-28.4 11.7-43.7l-32-55.4c-8.8-15.3-28.4-20.5-43.7-11.7L82.7 207zM288 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H288zm64 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H352zM160 384v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zM32 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H32z"
                />
              </Icon>
            </Link>
            <Stack direction="row" ps="8" mb="1">
              <Flex>
                <Link href="/feed" pe="4" style={{ textDecoration: 'none' }}>
                  Feed
                </Link>
              </Flex>
              <Flex>
                <Link href="/library" px="4" style={{ textDecoration: 'none' }}>
                  Library
                </Link>
              </Flex>
            </Stack>
            <Spacer></Spacer>
          </Flex>
          <Show breakpoint="(max-width: 776px)">
            <Spacer></Spacer>
          </Show>
          <Show breakpoint="(min-width: 777px)">
            <Flex m="2" align="center" basis="100%">
              <InputGroup>
                <Input placeholder="Search" size="md" bg="grey.900" />
                <InputRightElement children={<Search2Icon color="grey.700" />} />
              </InputGroup>
            </Flex>
          </Show>
          <Flex p="2" justify="end">
            <Stack direction="row" spacing={2}>
              <Flex>
                <Button
                  leftIcon={
                    <Icon viewBox="0 0 448 512">
                      <path
                        fill="currentColor"
                        d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
                      />
                    </Icon>
                  }
                  colorScheme="orange"
                  variant="ghost"
                >
                  Upload
                </Button>
              </Flex>
              <Flex>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                    <Wrap>
                      <WrapItem>
                        <Avatar size="sm" name={Auth.getProfile().data.username} src="https://source.boringavatars.com/pixel/32/username"></Avatar>
                      </WrapItem>
                    </Wrap>
                  </MenuButton>
                  <MenuList bg="grey.900">
                    <Link href={'/me'} style={{ textDecoration: 'none' }}>
                      <MenuItem bg="grey.900" _hover={{ bg: 'grey.800' }}>
                        Profile
                      </MenuItem>
                    </Link>
                    <MenuItem bg="grey.900" _hover={{ bg: 'grey.800' }}>
                      Likes
                    </MenuItem>
                    <MenuItem bg="grey.900" _hover={{ bg: 'grey.800' }}>
                      Playlists
                    </MenuItem>
                    <MenuItem bg="grey.900" _hover={{ bg: 'grey.800' }}>
                      Following
                    </MenuItem>
                    <MenuItem bg="grey.900" _hover={{ bg: 'grey.800' }}>
                      Tracks
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <Menu>
                <Box w="36px" h="36px">
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={
                      <Icon viewBox="0 0 448 512" boxSize="26px">
                        <path fill="currentColor" d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
                      </Icon>
                    }
                    variant="ghost"
                  ></MenuButton>
                </Box>
                <MenuList bg="grey.900">
                  <MenuItem icon={<InfoOutlineIcon />} bg="grey.900" _hover={{ bg: 'grey.800' }}>
                    About us
                  </MenuItem>
                  <MenuDivider />
                  <Link href={'/settings'} style={{ textDecoration: 'none' }}>
                    <MenuItem icon={<SettingsIcon />} bg="grey.900" _hover={{ bg: 'grey.800' }}>
                      Settings
                    </MenuItem>
                  </Link>
                  <MenuItem
                    bg="grey.900"
                    _hover={{ bg: 'grey.800' }}
                    icon={
                      <Icon viewBox="0 0 512 448">
                        <path
                          fill="currentColor"
                          d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
                        />
                      </Icon>
                    }
                    onClick={logout}
                  >
                    Sign out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box
        width="100%"
        // minW="796px"
        bg="grey.900"
        className="header-box"
      >
        <Grid templateColumns="repeat(3, 1fr)">
          <Flex px="4" align="center" justify="start">
            <Link href={'/'}>
              <Icon viewBox="0 0 448 512" color="primary.400" boxSize="48px" pr="2">
                <path
                  fill="currentColor"
                  d="M192 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32zM82.7 207c-15.3 8.8-20.5 28.4-11.7 43.7l32 55.4c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.5-28.4 11.7-43.7l-32-55.4c-8.8-15.3-28.4-20.5-43.7-11.7L82.7 207zM288 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H288zm64 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H352zM160 384v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zM32 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H32z"
                />
              </Icon>
            </Link>
            <Stack direction="row" ps="8" mb="1">
              <Flex>
                <Link href="/feed" style={{ textDecoration: 'none' }}>
                  Feed
                </Link>
              </Flex>
            </Stack>
            <Spacer></Spacer>
          </Flex>
          <Show breakpoint="(max-width: 552px)">
            <Spacer></Spacer>
          </Show>
          <Show breakpoint="(min-width: 553px)">
            <Flex m="2" align="center" basis="100%">
              <InputGroup>
                <Input placeholder="Search" size="md" bg="grey.900" />
                <InputRightElement children={<Search2Icon color="grey.700" />} />
              </InputGroup>
            </Flex>
          </Show>
          <Flex p="2" justify="end">
            <Stack direction="row" spacing={2}>
              <Flex>
                <Link href="/login" style={{ textDecoration: 'none' }}>
                  <Button colorScheme="grey" variant="ghost">
                    Login
                  </Button>
                </Link>
              </Flex>
            </Stack>
          </Flex>
        </Grid>
      </Box>
    );
  }

  // return (
  //   <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
  //     <div className="container flex-row justify-space-between-lg justify-center align-center">
  //       <div>
  //         <Link className="text-light" href={"/"}>
  //           <h1 className="m-0">Sound Byte</h1>
  //         </Link>
  //         {/* <p className="m-0">Get into the mind of a programmer.</p> */}
  //       </div>
  //       <div>
  //         {Auth.loggedIn() ? (
  //           <>
  //             <Link className="btn btn-lg btn-info m-2" href={"/me"}>
  //               {Auth.getProfile().data.username}'s profile
  //             </Link>

  //             <button className="btn btn-lg btn-light m-2" onClick={logout}>
  //               Logout
  //             </button>
  //             <ColorModeSwitcher justifySelf="flex-end" />
  //           </>
  //         ) : (
  //           <>
  //             <Link className="btn btn-lg btn-info m-2" href={"/login"}>
  //               Login
  //             </Link>
  //             <Link className="btn btn-lg btn-light m-2" href={"/signup"}>
  //               Signup
  //             </Link>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   </header>
  // );
};

export default Header;
