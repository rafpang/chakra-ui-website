import Image from 'next/image'
import { Flex, Center, Square, Heading, Box, Text, Container, VStack, Stack, Card, CardBody, CardFooter, Button } from '@chakra-ui/react'

export default function Education() {
    // const edu_style = {display:"flex",
    //                     // flexDirection: "row",
    //                     justifyContent: "center",
    //                     flexWrap: "nowrap",
    //                     marginRight: "4%",
    //                     marginLeft: "4%",}
                        
    return(
    //   <Flex flexDirection={'row'} alignItems='center'  gap='1' px={4} W={"40vw"}>

    //     <Container className="ntu-logo-container reveal" px={2} width={"200px"}>
    //       <Image src="/assets/ntu.png" alt="ntulogo" id="ntu-logo" width={170} height={200} />
    //     </Container>
    //     <Container className="education-text-container reveal" px={2} width={"200px"}>
    //       <p><strong>Nanyang Technological University, Singapore</strong></p>
    //       <p>Bachelor of Engineering - Chemical & Biomolecular Engineering | Current CGPA: 4.60/5.00</p>
    //     </Container>
      
    //         </Flex>  
//     <Container id="Education" mt={50}>
//     <Heading
//           fontWeight={600}
//           fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
//           lineHeight={'110%'} textAlign={'center'} pt={10} pb={10}>
          
//           <Text as={'span'} color={'black.600'} textShadow='3px 3px #f4db7d' >
//             Education
//           </Text>
          
//           </Heading>
//     <Center mt={50}>
//      <Stack spacing={20} direction='row'>
//     <VStack minW='150' alignItems={'center'} justifyContent={'center'} mr={10}>
//         <Image src="/assets/ntu.png" alt="ntulogo" id="ntu-logo" width={150} height={200} />
//     </VStack>
//     {/* <Square bg='blue.500' size='150px'>
//         <Text>Box 2</Text>
//     </Square> */}
//     <Container bgColor={'red'} minW={'50vw'}>
    

//         <p><strong>Nanyang Technological University, Singapore</strong></p>
//         <p>Bachelor of Engineering - Chemical & Biomolecular Engineering | Current CGPA: 4.60/5.00</p>
    
//     </Container>
//      </Stack>
//     </Center> 
// </Container>
<div id="Education" style={{textAlign:"center",}} className="reveal">
 <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'} textAlign={'center'} pt={10} pb={10}>
          
          <Text as={'span'} color={'black.600'} textShadow='3px 3px #f4db7d' >
            Education
          </Text>
          </Heading>
<Center id="Education">          
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  maxW={"60vw"}
  alignItems={'center'}
  justifyContent={'center'}
  pt={5}
  pb={5}
  px={5}
>
    
  <Image
    // objectFit='cover'
    width={75}
    height={75}
    src='/assets/ntu.png'
    alt="ntu-logo"
  />

  <Stack>
    <CardBody fontSize={{base:'12px', md: '15px'}} textAlign="center">
      <Heading size='12px'>Nanyang Technological University, Singapore</Heading>

      <Text py='2'>
        Bachelor of Engineering - Chemical & Biomolecular Engineering | Current CGPA: 4.60/5.00
      </Text>
    </CardBody>
{/* 
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter> */}
  </Stack>
</Card>
      </Center>
      </div>)

}