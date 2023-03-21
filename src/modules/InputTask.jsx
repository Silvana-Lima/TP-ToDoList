import { Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import { useState } from "react";
import { setLocalStorage } from "../utils/localStorage";
import { validateInput } from "../utils/validateInput";

export const InputTask = ({tasks, setTasks} ) => {

    const [value, setValue] = useState('')

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
          setLocalStorage('task', newTasks);
        } else {
          console.log("La tarea debe tener más de tres carácteres")
        }
      }

return (
          <FormControl>
            <FormLabel htmlFor="inputTask">Tarea</FormLabel>
            <Input
              type="text"
              id="inputTask"
              name="inputTask"
              bg="white"
              placeholder="Ingrese una nueva tarea"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {/* {!validateInput(value) && (
              <Alert status="error" mt={5}>
                <AlertIcon />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>
                La tarea debe tener más de tres carácteres
                </AlertDescription>
              </Alert>
            )} */}
            <Button bg="purple.500" mt={5} type="submit" onClick={handleTasks}>
              Agregar tarea
            </Button>
          </FormControl>

)
}