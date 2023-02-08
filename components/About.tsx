import {
  
  Heading,
  Stack,
  Text,Container
  
} from '@chakra-ui/react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {

    return(<Container maxW={'80vw'} color={'black'} borderRadius={10} justifyContent={'center'} textAlign="justify">
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'} textAlign={'center'} pt={10} pb={10}>
          
          <Text as={'span'} color={'black.600'} textShadow='3px 3px #f4db7d' >
            About Me
          </Text>
          
          </Heading>
            <div className="col-12 inner-container text-justify">
      
              <p>
                Chemical Engineering undergrad at NTU with a new-found obsession with data and machine learning, 
                primarily looking for internship opportunities in a data-related role.
              </p>
              
              <p>
                Before university, I was a highly competitive student. 
                In addition to having the desire to be the best student in my school, 
                I even participated in various academic olympiads. Soon after entering university, 
                the world of data and machine learning consumed me.
                I found myself coding and data-crunching much more often than studying for my assessments.
                This new-found obsession of mine has rendered me to believe that I want to belong in the data-driven world of today and tomorrow.
              </p>
            </div>
          </Container >
        )

}