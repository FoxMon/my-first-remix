import { Form } from "@remix-run/react";

// chakra
import { Flex, Box, Input, Button, Heading } from "@chakra-ui/react";

import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();

  const name = body.get("name");
  const job = body.get("job");

  const res = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      job: job,
    }),
  });

  const data = await res.json();

  return data;
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
          <Input type="text" name="name" />
          <Input type="text" name="job" mt="20px" />
          <Button type="submit" mt="20px" width="100%">
            SUBMIT
          </Button>
        </Box>
      </Form>
    </Flex>
  );
}
