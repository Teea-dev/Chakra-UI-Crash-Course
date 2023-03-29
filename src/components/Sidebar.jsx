import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon color="white" as={CalendarIcon}></ListIcon>
          Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon color="white" as={EditIcon} ></ListIcon>
          New Task</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon color="white" as={AtSignIcon}></ListIcon>
          Profile</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
