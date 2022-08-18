import React from 'react';
import {
  ChakraProvider, Stack, Skeleton, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
