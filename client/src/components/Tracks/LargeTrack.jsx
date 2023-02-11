import React from 'react';
import {
    Grid,
    GridItem,
    Hide,
} from '@chakra-ui/react'
function LargeTrack({ post, user }) {
  return (
    <Grid h="100%" templateRows="156px 50px 1fr" templateColumns="2fr 0.8fr" gap={1}>
      
      <GridItem colSpan={2} rowSpan={1} bg="orange">hero</GridItem>
      <GridItem colSpan={2} rowSpan={1} bg="maroon">tabs</GridItem>
      <Hide below="md">
      <GridItem colSpan={1} rowSpan={1} rowStart={3} rowEnd={4} colStart={2} colEnd={3} minW="30%" bg="royalblue">stats</GridItem>
      </Hide>
      <GridItem rowSpan={1} colSpan={[2, 2, 1, 1]} rowStart={3} rowEnd={4} bg="tomato">body</GridItem>
    </Grid>
  );
}

export default LargeTrack;
