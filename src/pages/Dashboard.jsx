import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  HStack,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();

  return (
    <SimpleGrid spacing="10px" minChildWidth="250px">
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img}/>
                <Box>
                  <Heading as="h3" size="md">
                    {task.title}
                  </Heading>
                  <Text fontSize="sm">by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              {" "}
              <Text>{task.description}</Text>{" "}
            </CardBody>
            <Divider color="gray.200"/>
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={ <ViewIcon/>} > Watch</Button>
                <Button variant="ghost" leftIcon={ <EditIcon/>}> Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const getTask = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return await res.json();
};
