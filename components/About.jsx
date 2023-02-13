import {
  Heading,
  Stack,
  Text,
  Container,
  Card,
  Center,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div id="About">
      <Container
        maxW={"80vw"}
        color={"black"}
        borderRadius={10}
        justifyContent={"center"}
        textAlign="justify"
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          lineHeight={"110%"}
          textAlign={"center"}
          pt={10}
          pb={10}
        >
          <Text as={"span"} color={"#FF8FB1"} textShadow="1px 2px #f4db7d">
            About Me
          </Text>
        </Heading>
        <Center>
          <Fade bottom duration={2700}>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              maxW={"60vw"}
              alignItems={"center"}
              justifyContent={"center"}
              pt={5}
              pb={5}
              px={5}
              bg={"#2e2f35"}
            >
              <Container
                fontSize={{ base: "12px", md: "17px" }}
                textAlign={{ base: "center", sm: "justify" }}
                color={"white"}
              >
                <p>
                  Chemical Engineering undergrad at NTU with a new-found
                  obsession with data, machine learning, and web development.
                  Interested in internship opportunities in the fields of Data
                  Science, Data Engineering, and Front End Development.
                </p>
              </Container>
            </Card>
          </Fade>
        </Center>
      </Container>
    </div>
  );
}
