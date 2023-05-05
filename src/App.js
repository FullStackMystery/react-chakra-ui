import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Layout from './components/Layout'

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Box textAlign="center" >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
