import {Box, Text} from '@chakra-ui/react';
import './App.css';
import { Navbar } from './Sections/Navbar';
import { Banner } from './Sections/Banner';
import AreaDetails from './Sections/AreaDetails';


function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <AreaDetails/>
    </>
  );
}

export default App;
