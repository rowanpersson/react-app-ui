import React from 'react';
import {
  ChakraProvider, Flex, Stack, Skeleton, theme } from '@chakra-ui/react';
import Buttons from './components/Header/buttons';
import SearchBar from './components/NavBars/SearchBar/SearchBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack>
          <Flex pl="1600px" pt="20px" >
          <SearchBar/>
          </Flex>
          <Buttons />
          <Skeleton height='800px' />
        <Skeleton height='50px' />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
