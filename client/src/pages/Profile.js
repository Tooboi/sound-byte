import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Grid, GridItem, Hide, Image, Flex, Heading, Link, Spacer, Button, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

import MyTracks from '../components/Profile/MyTracks';
import MyAlbums from '../components/Profile/MyAlbums';
import MyLikes from '../components/Profile/MyLikes';

import { QUERY_ME, QUERY_POSTS } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { loading: loadingPosts, error: errorPosts, data: dataPosts } = useQuery(QUERY_POSTS);
  const posts = dataPosts?.allPosts || [];

  const { username: userParam } = useParams();

  const { loading, error, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || {};
  const profileURL = `https://source.boringavatars.com/beam/128/${user.username}`;
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.user === userParam) {
    return (
      <Grid h="100%" templateRows="156px 50px 1fr" templateColumns="2fr 1fr">
        <GridItem colSpan={2} rowSpan={1} overflow="hidden">
          <Flex h="100%" alignItems="center">
            <Image src={profileURL} h="128px" px={3}></Image>
            <Flex direction="column">
              <Heading as="h1" size="xl">
                {user.username}
              </Heading>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem colSpan={2} rowSpan={1} className="tab-container">
          <Flex h="100%" alignItems="center">
            {/* <Flex onClick={() => toggleTab(1)} className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} px={6} h="100%" alignItems="center">All</Flex> */}
            <Flex onClick={() => toggleTab(2)} className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} px={6} h="100%" alignItems="center">Tracks</Flex>
            <Flex onClick={() => toggleTab(3)} className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} px={6} h="100%" alignItems="center">Albums</Flex>
            <Flex onClick={() => toggleTab(4)} className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} px={6} h="100%" alignItems="center">Likes</Flex>
            <Spacer></Spacer>
            <Link href={'/me/edit'} style={{ textDecoration: 'none' }}>
            <Button leftIcon={<EditIcon />} colorScheme='grey' variant='ghost' mx={3}>
              Edit
            </Button>
            </Link>
          </Flex>
        </GridItem>
        <Hide below="md">
          <GridItem colSpan={1} rowSpan={1} rowStart={3} rowEnd={4} colStart={2} colEnd={3} minW="248px" h="100vh" className='stats'>
            <Flex py={2} h="64px" className='border-bottom'>
            <Spacer></Spacer>
              <Flex direction={'column'} align="center" px={4}>
                <Text fontSize='sm'>Followers</Text>
                <Text fontSize='lg'>{user.followerCount}</Text>
              </Flex>
              {/* <Spacer></Spacer> */}
              <Flex direction={'column'} align="center" px={4}>
                <Text fontSize='sm'>Following</Text>
                <Text fontSize='lg'>{user.followingCount}</Text>
              </Flex>
              {/* <Spacer></Spacer> */}
              <Flex direction={'column'} align="center" px={4}>
                <Text fontSize='sm'>Likes</Text>
                <Text fontSize='lg'>{user.userLikes.length}</Text>
              </Flex>
              <Spacer></Spacer>
            </Flex>
          </GridItem>
        </Hide>
        <GridItem rowSpan={1} colSpan={[2, 2, 1, 1]} rowStart={3} rowEnd={4}>
        {/* <div className={toggleState === 1 ? 'content content-active justify-content-center' : 'content justify-content-center'}>All Tracks</div> */}
        <div className={toggleState === 2 ? 'content content-active justify-content-center' : 'content justify-content-center'}> <MyTracks user={user} posts={posts} /> </div>
        <div className={toggleState === 3 ? 'content content-active justify-content-center' : 'content justify-content-center'}> <MyAlbums user={user} posts={posts} /> </div>
        <div className={toggleState === 4 ? 'content content-active justify-content-center' : 'content justify-content-center'}> <MyLikes user={user} posts={posts} /> </div>
        </GridItem>
      </Grid>
    );
  }
};

export default Profile;
