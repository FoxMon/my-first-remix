import { Form } from "@remix-run/react";

// chakra
import { Flex, Box, Input, Button, Heading } from "@chakra-ui/react";

import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();

  const username = body.get("username");
  const city = body.get("city");

  console.group("Form");
  console.log(username);
  console.log(city);

  return body;
};

export default function Login() {
  return (
    <Flex
      w="100%"
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>FORM</Heading>
      <Form method="post">
        <Box maxW="500px">
          <Input type="text" name="username" />
          <Input type="text" name="city" mt="20px" />
          <Button type="submit" mt="20px" width="100%">
            SUBMIT
          </Button>
        </Box>
      </Form>
    </Flex>
  );
}
