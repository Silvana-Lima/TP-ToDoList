import { FormControl, FormLabel, Select } from "@chakra-ui/react"
import { useState } from "react"



export const SelectTasks = ({tasks, setfilterTasks}) => {
   const [selectValue, setSelectValue] = useState("all");

   const handleSelectValue = (e) => {
     setSelectValue(e.target.value);

     setfilterTasks(
       tasks.filter((task) => {
         if (e.target.value === "complete") {
           return task.complete;
         };
         if (e.target.value === "incomplete") {
           return !task.complete;
         };
         return task;
       })
     );
   };
    return (
        
          <FormControl mb={15}>
            <FormLabel htmlFor="selectTasks" fontSize='lg'>Qué tareas desea ver?</FormLabel>
            <Select id="selectTasks" bg={"white"} name="selectTasks" tabIndex={5} value={selectValue} onChange={(e)=>handleSelectValue(e)}  w={[300, 400]}>
              <option value="all">Todas</option>
              <option value="complete">Completas</option>
              <option value="incomplete">Incompletas</option>
            </Select>
          </FormControl>
          
     
    )

    }