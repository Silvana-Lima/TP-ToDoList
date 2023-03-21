import { FormControl, FormLabel, Select } from "@chakra-ui/react"

export const SelectTasks = () => {
    return (
        
          <FormControl mb={15}>
            <FormLabel htmlFor="selectTasks">Qué tareas desea ver?</FormLabel>
            <Select id="selectTasks" bg={"white"} name="selectTasks">
              <option value="todas">Todas</option>
              <option value="completas">Completas</option>
              <option value="incompletas">Incompletas</option>
            </Select>
          </FormControl>
          
     
    )
}