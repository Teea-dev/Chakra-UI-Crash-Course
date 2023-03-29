import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task Name:</FormLabel>
          <Input type="text" name="text" />
          <FormHelperText>Enter a descriptive task name </FormHelperText>
        </FormControl>
        <FormControl mb='40px'>
          <FormLabel>Task description</FormLabel>
          <Textarea
            placeholder="Enter a detailed description of the task...."
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems='center'>
          <Checkbox name="isPriority" size="lg" colorScheme="purple" />
          <FormLabel mb="0" ml="10px">
            Make this a priority task.
          </FormLabel>
        </FormControl>


        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}


export const createTask = async ({request}) => {
  const data = await request.formData() // get the data from the form
  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ""
  }
  console.log(task)
  return redirect('/')
}