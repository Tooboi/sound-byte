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
        bgGradient="linear(to-r, grey.800, grey.800)"
        className="header-box"
      >
        <Grid templateColumns="repeat(3, 1fr)">
          <Flex px="4" align="center">
            <Link href={'/'}>
              <Icon viewBox="0 0 576 512" color="primary.400" boxSize="48px" pr="2">
                <path
                  fill="currentColor"
                  d="M288 32c159.1 0 288 48 288 128V352c0 80-128.9 128-288 128S0 432 0 352V160C0 80 128.9 32 288 32zM528 160c0-9.9-8-29.9-55-49.8c-18.6-7.9-40.9-14.4-66-19.4l-27.8 43.6c-7.3 11.5-11.2 24.8-11.2 38.4c0 17.5 6.4 34.4 18.1 47.5l9.8 11c29.8-5.2 55.9-12.5 77.2-21.5c47.1-19.9 55-39.9 55-49.8zM349.2 237.3c-8-26.2-32.4-45.3-61.2-45.3s-53.3 19.1-61.2 45.3c19.4 1.7 39.9 2.7 61.2 2.7s41.8-.9 61.2-2.7zM169 90.8c-25.2 5-47.4 11.6-66 19.4C56 130.1 48 150.1 48 160s8 29.9 55 49.8c21.3 9 47.4 16.3 77.2 21.5l9.8-11c11.6-13.1 18.1-30 18.1-47.5c0-13.6-3.9-26.9-11.2-38.4L169 90.8zm56.3-8C224.5 87 224 91.5 224 96c0 35.3 28.7 64 64 64s64-28.7 64-64c0-4.5-.5-9-1.4-13.2C330.8 81 309.8 80 288 80s-42.8 1-62.6 2.8z"
                />
              </Icon>
            </Link>
            <Spacer></Spacer>
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
              <Flex>
                <Link href="/feed" px="1">
                  Feed
                </Link>
              </Flex>
              <Flex>
                <Link href="/library" px="1">
                  Library
                </Link>
              </Flex>
            </Grid>
            <Spacer></Spacer>
          </Flex>
            <Flex m="2" align="center" basis="100%" >
              <InputGroup>
                <Input placeholder="Search" size="md" bg="grey.900" />
                <InputRightElement children={<Search2Icon color="grey.700" />} />
              </InputGroup>
            </Flex>
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
                  variant="solid"
                >
                  Upload
                </Button>
              </Flex>
              <Flex>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    <Wrap>
                      <WrapItem>
                        <Avatar size="sm" name="oest" src="https://source.boringavatars.com/pixel/32/username"></Avatar>
                      </WrapItem>
                    </Wrap>
                  </MenuButton>
                  <MenuList>
                    <Link href={'/me'}><MenuItem>Profile</MenuItem></Link>
                    <MenuItem>Likes</MenuItem>
                    <MenuItem>Playlists</MenuItem>
                    <MenuItem>Following</MenuItem>
                    <MenuItem>Tracks</MenuItem>
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
                    variant="outline"
                  />
                </Box>
                <MenuList>
                  <MenuItem icon={<InfoOutlineIcon />}>About us</MenuItem>
                  <MenuDivider />
                  <Link href={'/settings'}><MenuItem icon={<SettingsIcon />}>Settings</MenuItem></Link>
                  <MenuItem
                    icon={
                      <Icon viewBox="0 0 512 448">
                        <path
                          fill="currentColor"
                          d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
                        />
                      </Icon>
                    } onClick={logout}
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
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Sound Byte</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
      </Flex>
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
