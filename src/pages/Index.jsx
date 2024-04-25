import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCloud, FaConnectdevelop, FaInfoCircle, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" my={10}>
        <Heading as="h1" size="2xl" mb={2}>
          Cloudscape
        </Heading>
        <Text fontSize="xl" mb={4}>
          Innovative Software Solutions
        </Text>
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0MDA1ODc5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cloud Technology" boxSize="200px" objectFit="cover" />
      </Flex>

      <VStack spacing={8}>
        <Button as={Link} to="/about" colorScheme="blue">
          About Us
        </Button>

        <Section icon={<FaRocket />} title="Our Mission" text="Our mission is to empower businesses by providing cutting-edge software solutions that enhance operational efficiency and drive growth. We strive to be leaders in innovation and customer satisfaction." />

        <Section icon={<FaConnectdevelop />} title="Services" text="We specialize in a wide range of services including web development, mobile applications, cloud solutions, and more. Our tailored solutions are designed to meet the unique needs of each client." />

        <Section icon={<FaCloud />} title="Contact Us" text="Ready to take your business to the next level? Contact us today to discuss how we can support your digital transformation. Email us at contact@cloudscape.com or call us at (123) 456-7890." />
      </VStack>
    </Container>
  );
};

const Section = ({ icon, title, text }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Heading size="md" my={2} display="flex" alignItems="center">
        {icon} <Text ml={2}>{title}</Text>
      </Heading>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};

export default Index;
