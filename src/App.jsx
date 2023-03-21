import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { FormControl, FormLabel, Heading, HStack, IconButton, List, ListItem, Select, Stack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import { InputTask } from './modules/InputTask'
import { getLocalStorage } from './utils/localStorage'


function App() {

  const initialTask = getLocalStorage('task') || []
  const [tasks, setTasks] = useState(initialTask);


  return (
    <VStack
      w="100%"
      minHeight="100vh"
      bgGradient="linear(to-t, black, purple.500)"
    >
      <Heading as="h1" fontSize="5xl" color="white" mt={10}>
        To-do List
      </Heading>

      <Stack direction={["column", "row"]} spacing="24px" padding="15px">

        <InputTask tasks={tasks} setTasks={setTasks}  />


        <VStack p="10px">
          <FormControl mb={15}>
            <FormLabel htmlFor="selectTasks">Qué tareas desea ver?</FormLabel>
            <Select id="selectTasks" bg={"white"} name="selectTasks">
              <option value="todas">Todas</option>
              <option value="completas">Completas</option>
              <option value="incompletas">Incompletas</option>
            </Select>
          </FormControl>
          <List spacing={3}>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                bg={"white"}
                display="flex"
                justifyContent="space-between"
              >
                <Text>{task.task}</Text>
                <HStack>
                  <IconButton
                    aria-label="Complete task"
                    colorScheme="purple"
                    borderRadius="none"
                    id={task.id}
                    icon={<CheckIcon />}
                  />
                  <IconButton
                    aria-label="Delete task"
                    colorScheme="gray"
                    borderRadius="none"
                    id={task.id}
                    icon={<DeleteIcon />}
                  />
                </HStack>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Stack>
    </VStack>
  );
}

export default App
