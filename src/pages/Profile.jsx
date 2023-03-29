import {
  EmailIcon,
  ChatIcon,
  StarIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email:mario@netninja.dev
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              autem explicabo iure repellendus eos ab eligendi numquam iste,
              voluptates, officia rerum dignissimos tempora possimus veritatis
              at sequi optio obcaecati excepturi.
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sequi labore natus! Commodi neque cumque corporis alias ipsam,
              dolorum eum harum, error nobis dolorem porro iure non blanditiis.
              Nemo, illum.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
