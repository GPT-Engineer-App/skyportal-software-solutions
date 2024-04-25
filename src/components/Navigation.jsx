import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" gap="4" p="4" bg="gray.100" align="center" justify="center">
      <Link to="/">
        <Button colorScheme="blue">Home</Button>
      </Link>
      <Link to="/about">
        <Button colorScheme="blue">About Us</Button>
        <Link to="/mission">
          <Button colorScheme="blue">Our Mission</Button>
        </Link>
      </Link>
    </Flex>
  );
};

export default Navigation;
