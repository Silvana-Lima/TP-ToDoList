import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import { useState } from "react";
import { setLocalStorage } from "../utils/localStorage";
import { validateInput } from "../utils/validateInput";

export const InputTask = ({tasks, setTasks, setfilterTasks} ) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState(false)

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