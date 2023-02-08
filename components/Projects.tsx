import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';
import Link from 'next/link';
import Card from '@/components/Card';
import { SimpleGrid } from '@chakra-ui/react'

const projectsDict =[
    {title:"Full Stack Happiness", description:"React App", skills:"HTML CSS", projectLink:'https://github.com/rafpang/full-stack-happiness'},
    {title:"Full Stack Happiness", description:"React App", skills:"HTML CSS", projectLink:'https://github.com/rafpang/full-stack-happiness'},
    {title:"Full Stack Happiness", description:"React App", skills:"HTML CSS", projectLink:'https://github.com/rafpang/full-stack-happiness'},

    {title:"Full Stack Happiness", description:"React App", skills:"HTML CSS", projectLink:'https://github.com/rafpang/full-stack-happiness'},

    {title:"Full Stack Happiness", description:"React App", skills:"HTML CSS", projectLink:'https://github.com/rafpang/full-stack-happiness'},




]


export default function Projects(){
    return(
    <div id="Projects">

      <SimpleGrid columns={{md:3,sm:2}} spacing={{md:2}}>
      {projectsDict.map(project => <Card key={project.title} title={project.title} description={project.description} skills={project.skills} projectLink={project.projectLink}/>)}
      </SimpleGrid>  
    </div>)}
