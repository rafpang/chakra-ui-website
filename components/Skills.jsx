import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Skills() {
  const myStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div id="Skills">
      <Container my={3} maxW={"100vw"} bg={"grey.400"} color={"black"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            lineHeight={"110%"}
          >
            <Text as={"span"} color={"black.600"} textShadow="3px 3px #f4db7d">
              Skills
            </Text>
          </Heading>
          <Fade bottom duration={2200}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="inner-container reveal">
                    <Text as={"span"} color={"black.600"} fontWeight={"bold"}>
                      Data Science
                    </Text>
                    <br />
                    <br />
                    <div className="row justify-content-center">
                      <img
                        style={myStyle}
                        className="skill-icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        alt="Python-icon"
                      />
                      <img
                        style={myStyle}
                        src="assets/sklearn.svg"
                        alt=""
                        className="skill-icon"
                      />
                      <img
                        style={myStyle}
                        className="skill-icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                      />
                      <img
                        style={myStyle}
                        className="skill-icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                      />
                      <img
                        style={myStyle}
                        className="skill-icon"
                        src="assets/tableau-software.svg"
                      />
                      <img
                        style={myStyle}
                        className="skill-icon"
                        src="assets/plotly.svg"
                      />
                      <img
                        style={myStyle}
                        className="skill-icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg"
                        alt="pandas icon"
                      />
                      <img
                        style={myStyle}
                        className="skill-icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
                        alt="MATLAB icon"
                      />
                    </div>
                    <br />
                    <br />

                    <div className="inner-container reveal">
                      <Text as={"span"} color={"black.600"} fontWeight={"bold"}>
                        Web Development
                      </Text>
                      <br />
                      <br />
                      <div className="row justify-content-center">
                        <img
                          style={myStyle}
                          className="skill-icon"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        />
                        <img
                          style={myStyle}
                          className="skill-icon"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        />
                        <img
                          style={myStyle}
                          className="skill-icon"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        />
                        <img
                          style={myStyle}
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        />

                        <img
                          style={myStyle}
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        />
                        <img
                          style={myStyle}
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                        />
                        <img
                          style={myStyle}
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                        />
                        <img
                          style={{
                            width: "120px",
                            height: "100px",
                          }}
                          src="/assets/chakra.png"
                        />
                      </div>
                      <br />
                    </div>
                    <br />
                    <br />
                    <div className="inner-container reveal">
                      <Text as={"span"} color={"black.600"} fontWeight={"bold"}>
                        Data Engineering
                      </Text>
                      <br />
                      <br />
                      <div className="row justify-content-center">
                        <img
                          style={myStyle}
                          className="skill-icon"
                          src="assets/airflow.svg"
                        />
                        <img
                          style={myStyle}
                          className="skill-icon"
                          src="assets/hadoop.svg"
                        />
                        <img
                          style={myStyle}
                          className="skill-icon"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                        />
                        <img
                          style={myStyle}
                          className="skill-icon"
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                        />
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Stack>
      </Container>
    </div>
  );
}
