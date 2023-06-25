import { Box, Button, Flex, Heading, IconButton, Spacer, Text } from "@chakra-ui/react"
import {HamburgerIcon} from '@chakra-ui/icons'
export const Navbar = () =>{
    return (
        <>
           <Box bg="gray.800" px={4} py={3} position="sticky" top={0} zIndex="sticky">
                <Flex alignItems="center" maxW="1200px" mx="auto">
                    <Heading color="white" size="md">
                    Chandrapur
                    </Heading>
                    <Spacer />
                    <Box display={{ base: 'none', md: 'block' }}>
                        <Flex gap={5}>
                            <Button bg={'teal'} color={'white'}>Home</Button>
                            <Button bg={'teal'} color={'white'}>About City</Button>
                            <Button bg={'teal'} color={'white'}>Complaints</Button>
                            <Button bg={'teal'} color={'white'}>Contact</Button>
                        </Flex>
                    </Box>
                    <IconButton
                    display={{ base: 'block', md: 'none' }}
                    aria-label="Menu"
                    icon={<HamburgerIcon />}
                    colorScheme="teal"
                    />
                </Flex>
            </Box>
            
        </>
    )
}