import React from 'react'

import { Box, Typography } from '@/components'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home: React.FC = () => (
  <Box alignItems="center" as={SafeAreaView} bg="#000" flex={1} justifyContent="center">
    <Typography color="#fff" fontSize="14px" mb="16px">
      Open up src/App.tsx to start working on your app!
    </Typography>
  </Box>
)

export default Home
