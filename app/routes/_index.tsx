import type { MetaFunction } from "@remix-run/node";

// chakra
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Box>
      <Flex
        minH="100vh"
        w="100%"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Heading>Hello Remix</Heading>
        </Box>
        <Box pt="20px">
          <Link to="/about">ABOUT</Link>
        </Box>
        <Box pt="20px">
          <Link to="/login">FORM</Link>
        </Box>
      </Flex>
    </Box>
  );
}
