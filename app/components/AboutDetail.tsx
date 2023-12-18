import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

interface AboutDetailProps {
  avatar: string;

  email: string;

  first_name: string;

  last_name: string;
}

export const AboutDetail = ({
  avatar,
  email,
  first_name,
  last_name,
}: AboutDetailProps) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={avatar}
          alt={first_name}
          minW="144px"
          w="100%"
          minH="184px"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{first_name}</Heading>
          <Text>{last_name}</Text>
          <Text>{email}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="1">
          <Button colorScheme="teal">Detail</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
