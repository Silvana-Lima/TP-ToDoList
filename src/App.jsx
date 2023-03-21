import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, Heading, HStack, IconButton, Input, List, ListItem, Select, Stack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { validateInput } from './utils/validateInput'


function App() {
  const initialTask = getLocalStorage('task') || []
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState(initialTask);

  const handleTasks = ()=>{
    const newTasks = [...tasks, 
      {
      task: value,
      complete: false
    }
  ] 

    if (validateInput(value)) {
      setTasks(newTasks);
      setLocalStorage('task', newTasks);
    } else {
      console.log("La tarea debe tener más de tres carácteres")
    }
  }

  return (
    <VStack w="100%" minHeight='100vh' bgGradient="linear(to-t, black, purple.500)">
      <Heading as="h1" fontSize="5xl" color="white" mt={10}>
        To-do List
      </Heading>

      <Stack direction={["column", "row"]} spacing="24px" padding="15px">
        <VStack p='10px'>
          <FormControl>
            <FormLabel htmlFor="task">Tarea</FormLabel>
            <Input
              type="text"
              id="task"
              name="task"
              bg="white"
              placeholder="Ingrese una nueva tarea"
              value={value}
              onChange={(e)=>setValue(e.target.value)}

            />
            <Button bg="purple.500" mt={5} type='submit' onClick={handleTasks}>
              Agregar tarea
            </Button>
          </FormControl>

        </VStack>

        <VStack p='10px'>
          <FormControl mb={15}>
            <FormLabel htmlFor="select">
              Qué tareas desea ver?
            </FormLabel>
            <Select id="select" bg={"white"} name="select">
              <option value="todas">Todas</option>
              <option value="completas">Completas</option>
              <option value="incompletas">Incompletas</option>
            </Select>
          </FormControl>
          <List spacing={3}>
            {tasks.map((task)=>(
               <ListItem
               key={task.task}
               bg={"white"}      
               display="flex"
               justifyContent="space-between"
             >
               <Text>
                 {task.task}
               </Text>
               <HStack>
                 <IconButton
                   aria-label="Complete task"
                   colorScheme="purple"
                   borderRadius="none"
                   icon={<CheckIcon />}
                 />
                 <IconButton
                   aria-label="Delete task"
                   colorScheme="gray"
                   borderRadius="none"
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
