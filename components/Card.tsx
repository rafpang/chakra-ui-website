import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

interface Project {
    title: string;
    description: string;
    skills: string;
    projectLink: string
}

export default function Card({title, description, skills, projectLink}: Project) {


  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 #8f35d8', '6px 6px 0 #8f35d8')}>
        
        <Box p={4}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
        
          </Box>
          <Heading color={'black'} fontSize={'2xl'}>
            {title}
          </Heading>
          <Text color={'purple.500'} fontWeight={"semibold"}>
            {skills}
          </Text>
          <Text color={'black.500'} mt={4}>
            {description}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full"
            onClick={()=>window.open(projectLink)}>
            <Text fontSize={'md'} fontWeight={'semibold'}>
              GitHub
            </Text>
            <BsArrowUpRight />
          </Flex>
         
        </HStack>
      </Box>
    </Center>
  );
}