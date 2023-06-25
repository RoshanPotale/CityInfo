
import { Box, Button, Flex, Grid, GridItem, Image, Input, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import {FaHospitalSymbol} from 'react-icons/fa'
import {MdPeople} from 'react-icons/md'

const AreaDetails = () => {

    const handleClick=() => {
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude,longitude} = position.coords;
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`).then((res)=>res.json())
            .then((data) =>{
                // console.table(data.address)
                // console.log(data.display_name);
                // console.log("Lattitude : ",data.lat);
                // console.log("Longitude : ",data.lon);
                getLocation(data)

            })
            .catch((err) => console.log("Error loading location"))
        })
    }

    const getLocation = (data) =>{
        // console.log(data); 
        fetch('https://my-8wfy.onrender.com/users',{method:"POST",
        body:JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then((response)=>response.json())
    .then((res)=>console.log("Details : ",res))
    .catch((err)=>console.log("Error fetching data"))
    }

  return (
    <>
        <Box
            mt={'20px'}
            border={'1px solid'}
            height={'auto'}
        >
            <Flex justifyContent={'space-between'}>
                <Box border={'1px solid red'} width={'35%'} p   ={5}>
                    <Flex gap={10}>
                        <Text>Enter area</Text>
                        <Input placeholder='Enter area name here' width={'18rem'}/>
                        <Button>Search</Button>
                    </Flex>
                    
                    <Box>
                        <Text>Population</Text>
                        <Text>School</Text>
                        <Text>College</Text>
                        <Text>No. of Electric poles</Text>
                        <Text>Transformers</Text>
                    </Box>
                    <Box>
                        <Button onClick={handleClick}>Click</Button>
                    </Box>
                </Box>

                <Box border={'1px solid red'} width={'60%'}>
                    <Flex justifyContent={'space-between'}>
                        <Box width={'75%'}>
                        <Image src={'https://th.bing.com/th/id/R.4196991d602ef9557920a1a122c8e3ac?rik=ERum5soscWcicA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-hGSI6znFvh4%2fUEnZpjyJfeI%2fAAAAAAAAAgU%2fOQnYMOIKc6o%2fs640%2fmap.jpg&ehk=WWaCOhoTxLYzclS0sNYoHJwpofwFhDFr5DEX8A7S3lw%3d&risl=&pid=ImgRaw&r=0'} w={'100%'} h={'600px'}/>
                        </Box>
                        <Box w={'22%'} border={'1px solid'} p={5}>

                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                Hospital
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdPeople} color='green.500' />
                                School
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                College
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                Govt offices
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                Electric poles
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                Transformer
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                Drainage
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                Road
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                Flyover
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                UnderConstructionWork
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                Temple
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaHospitalSymbol} color='green.500' />
                                River / Lake
                            </ListItem>
                        </List>

                        </Box>
                    </Flex>
                    <Box border={'1px solid'} h={'100px'} mt={'20px'}>
                        <Text>Area Photos</Text>
                    </Box>
                </Box>
            </Flex>
        </Box> 
    </>
  )
}

export default AreaDetails
