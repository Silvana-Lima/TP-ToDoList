import { CheckCircleIcon } from "@chakra-ui/icons";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, FormControl, FormLabel, Input, useToast} from "@chakra-ui/react";
import { useState } from "react";
import { setLocalStorage } from "../utils/localStorage";
import { validateInput } from "../utils/validateInput";
// import { ToastCreateTask } from "./ToastCreateTask";

export const InputTask = ({tasks, setTasks, setfilterTasks} ) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const toast = useToast()

    const handleTasks = ()=>{
        const newTasks = [...tasks, 
          {
          task: value,
          id: uuid.v1(),
          complete: false
        }
      ] 
        if (validateInput(value)) {
          setTasks(newTasks);
          setfilterTasks(newTasks)
          toast({
            render: () => (
                <Box color='white' p={3} bg='purple.500' borderRadius={"md"}>
                  <CheckCircleIcon mr={2}/>
                   "Se ha agregado una nueva tarea."
                </Box>
              ),
            duration: 3000,
            isClosable: true,
          })
          setLocalStorage('task', newTasks);
          setError(false)
          setValue('')
        } else {
          setError(true)
        }
      }

return (
          <FormControl display={"flex"} flexDirection={"column"} >
            <FormLabel htmlFor="inputTask">Tarea</FormLabel>
            <Input
              type="text"
              id="inputTask"
              name="inputTask"
              bg="white"
              w={[300, 400]}
              placeholder="Ingrese una nueva tarea"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {error && (
              <Alert status="error" mt={5} borderRadius={"md"}>
                <AlertIcon />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>
                   Debe ingresar una tarea.
                </AlertDescription>
              </Alert>
            )}
            <Button bg="purple.500" mt={5} type="submit" onClick={handleTasks}>
              Agregar tarea
            </Button>
          </FormControl>

)
}