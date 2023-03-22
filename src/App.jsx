import { Heading, Stack, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import { InputTask } from './modules/InputTask'
import { ListTasks } from './modules/ListTasks'
import { SelectTasks } from './modules/SelectTasks'
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
        <VStack p="10px">
          <InputTask tasks={tasks} setTasks={setTasks} />
        </VStack>
        <VStack p="10px">
          <SelectTasks />
          <ListTasks tasks={tasks} setTasks={setTasks}/>
        </VStack>
      </Stack>
    </VStack>
  );
}

export default App
