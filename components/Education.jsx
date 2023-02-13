import Image from "next/image";
import {
  Flex,
  Center,
  Square,
  Heading,
  Box,
  Text,
  Container,
  VStack,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
export default function Education() {
  return (
    <div id="Education" style={{ textAlign: "center" }} className="reveal">
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        lineHeight={"110%"}
        textAlign={"center"}
        pt={10}
        pb={10}
      >
        <Text as={"span"} color={"black.600"} textShadow="3px 3px #f4db7d">
          Education
        </Text>
      </Heading>
      <Center id="Education">
        <Fade bottom duration={2200}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            maxW={"60vw"}
            alignItems={"center"}
            justifyContent={"center"}
            pt={5}
            pb={5}
            px={5}
          >
            <Image
              // objectFit='cover'
              width={75}
              height={75}
              src="/assets/ntu.png"
              alt="ntu-logo"
            />

            <Stack>
              <CardBody
                fontSize={{ base: "12px", md: "15px" }}
                textAlign="center"
              >
                <Heading size="12px">
                  Nanyang Technological University, Singapore
                </Heading>

                <Text py="2">
                  Bachelor of Engineering - Chemical & Biomolecular Engineering
                  | Current CGPA: 4.60/5.00
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Fade>
      </Center>
    </div>
  );
}
