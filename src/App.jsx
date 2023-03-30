import { Box, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import { InputTask } from './modules/InputTask'
import { ListTasks } from './modules/ListTasks'
import { SelectTasks } from './modules/SelectTasks'
import { getLocalStorage } from './utils/localStorage'
import imgAgenda from './assets/imgAgenda.svg' 

function App() {

  const initialTask = getLocalStorage('task') || []
  const [tasks, setTasks] = useState(initialTask);
  const [filterTasks, setfilterTasks] = useState([...tasks])


  return (
    <VStack
      w="100%"
      minHeight="100vh"
      bgGradient="linear(to-t, black, purple.500)"
    >
      <HStack mt={10} bg={"purple.400"} w={[340, 440, 440, 900]} borderRadius={"md"}>
        <Heading as="h1" fontSize="3xl" color="purple.900" m={5}  bgGradient='linear(to-b, purple.600, black)' bgClip='text'>
           TO-DO LIST 
        </Heading> 
      </HStack>
      <Stack direction={["column", "column", "column", "row"]} spacing="24px" padding="20px" >
        <VStack p="20px" bg={"purple.400"} borderRadius={"md"}>
          <InputTask tasks={tasks} setTasks={setTasks} setfilterTasks={setfilterTasks} />
          <Box w={[300, 400]} p={10} >
            <Image src={imgAgenda} alt="image to do list"/>
          </Box>
        </VStack>
        <VStack p="20px" bg={"purple.400"} borderRadius={"md"}>
          <SelectTasks tasks={tasks} setfilterTasks={setfilterTasks} />
          {!tasks.length && 
            <Box w={[300, 400]} p={10}>
               <Text fontWeight={"semibold"} fontSize={"xl"} textAlign={"center"} color={"white"}> "Aún no ha ingresado ninguna tarea" </Text>
            </Box>}
          <ListTasks tasks={tasks} setTasks={setTasks} filterTasks={filterTasks} setfilterTasks={setfilterTasks}/>
        </VStack>
      </Stack>
    </VStack>
  );
}

export default App
