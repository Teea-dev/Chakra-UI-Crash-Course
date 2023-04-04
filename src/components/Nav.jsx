import {
  Avatar,
  AvatarBadge,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import "../index.scss";
import logo from "../assets/images/logo.svg";
const Nav = () => {
  return (
    <Flex className="nav" justifyContent='space-between'  as="nav" alignItems="center" >
      <img src={logo} alt="" srcset="" />
    
      <HStack spacing="20px">
        <Avatar src="/public/img/mario.png">
         
        </Avatar>
        <Text>Martinez George</Text>
      </HStack>
    </Flex>
  );
};

export default Nav;
