import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

const Nav = () => {
  const toasts = useToast();


  const showToast = () => {
    toasts({
      title: "Logged out",
      description: "You have been logged out",
      status: "info",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top-right",
      
    });
  }
    return (
    <Flex as="nav" alignItems='center' mb='40px'>
      <Heading as="h1">Dojo Task</Heading>

      <Spacer />
      <HStack spacing="20px">
      <Avatar src="/public/img/mario.png">
        <AvatarBadge width="1.3em"  bg="teal.500">
        <Text fontSize="xs" color="white">3</Text>
        </AvatarBadge>
        </Avatar>
        <Text>adetokunboogunnoiki28@gmail.com</Text>
        <Button colorScheme="purple" onClick={showToast}> Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Nav;
 