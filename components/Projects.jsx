import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import Card from "@/components/Card";
import { SimpleGrid } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

const projectsDict = [
  {
    title: "wheel-boost",
    description:
      "Wheelchair accessibility prediction using XGBoost and Scikit-Learn",
    skills: "Machine Learning, Classificiation",
    projectLink: "https://github.com/rafpang/wheelchair-xgboost",
  },
  {
    title: "country-happiness",
    description:
      "A near full-stack data analytics project about OECD's country happiness index",
    skills: "ETL, Dashboarding, AWS",
    projectLink: "https://github.com/rafpang/full-stack-happiness",
  },

  {
    title: "earthquake-magnitude",
    description:
      "Earthquake magnitude prediction using latitude, longitude, and time series data of Indonesian earthquakes.",
    skills: "Regression, Bayesian Optimization",
    projectLink: "https://github.com/rafpang/earthquakes-series",
  },

  {
    title: "old-pesonal-website",
    description: "Older version of my personal website",
    skills: "HTML, CSS, VanillaJS",
    projectLink: "https://github.com/rafpang/rafpang.github.io",
  },

  {
    title: "this-website",
    description: "Source code for this website",
    skills: "HTML, CSS, TypeScript, React, Nextjs 13, ChakraUI, Bootstrap",
    projectLink: "https://github.com/rafpang/chakra-ui-website",
  },
];

export default function Projects() {
  return (
    <div id="Projects">
      <Center>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={"#FF8FB1"} textShadow="1px 2px #f4db7d">
            Projects
          </Text>
        </Heading>
      </Center>
      <Fade bottom duration={2200}>
        <SimpleGrid
          columns={{ lg: 3, md: 2, sm: 1, base: 1 }}
          spacing={{ md: 2 }}
        >
          {projectsDict.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              skills={project.skills}
              projectLink={project.projectLink}
            />
          ))}
        </SimpleGrid>
      </Fade>
    </div>
  );
}
