import { FormControl, FormLabel, Select } from "@chakra-ui/react"
import { useState } from "react"



export const SelectTasks = ({tasks, filterTasks, setfilterTasks}) => {
   const [selectValue, setSelectValue] = useState("todas");

   const handleSelectValue = (e) => {
     setSelectValue(e.target.value);

     setfilterTasks(
       tasks.filter((task) => {
         console.log(filterTasks);
         if (e.target.value === "todas") {
           return task;
         }
         if (e.target.value === "completas") {
           return task.complete;
         }
         if (e.target.value === "incompletas") {
           return !task.complete;
         }
       })
     );
   };
    return (
        
          <FormControl mb={15}>
            <FormLabel htmlFor="selectTasks">Qué tareas desea ver?</FormLabel>
            <Select id="selectTasks" bg={"white"} name="selectTasks" value={selectValue} onChange={(e)=>handleSelectValue(e)}>
              <option value="todas">Todas</option>
              <option value="completas">Completas</option>
              <option value="incompletas">Incompletas</option>
            </Select>
          </FormControl>
          
     
    )

    }