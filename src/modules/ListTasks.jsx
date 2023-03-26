import { CheckIcon, DeleteIcon } from "@chakra-ui/icons"
import { HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react"
import { useState } from "react"
import { setLocalStorage } from "../utils/localStorage"
import { ModalDelete } from "./ModalDelete"

export const ListTasks = ({tasks, setTasks, filterTasks, setfilterTasks} ) =>{
    
     const [completeTask, setCompleteTask] = useState(false);

     const handleCompleteTask = (id) => {
       setCompleteTask(!completeTask);

       tasks.map((task) => {
         if (task.id === id) {
           task.complete = completeTask;
         }
       });

       setLocalStorage("task", tasks);
     };

     const handleDeleteTask = (id) => {
       setTasks((prev) => prev.filter((task) => task.id !== id));
       setfilterTasks(tasks);
       setLocalStorage("task", tasks);
     };

    return (
        <List spacing={3}>
        {filterTasks.map((task) => (
          <ListItem
            key={task.id}
            bg={"white"}
            display="flex"
            justifyContent="space-between"
            alignItems={"center"}
            borderRadius={"md"}
            w={[300, 400]}
            pl={1}
          >
            <Text textDecoration={task.complete ? 'line-through': null} fontWeight={"semibold"} >{task.task}</Text>
            <HStack>
              <IconButton
                aria-label="Complete task"
                colorScheme="purple"
                borderRadius="none"
                variant={task.complete ? 'outline' : 'solid'}
                id={task.id}
                icon={<CheckIcon />}
                value={completeTask}
                onClick={()=> handleCompleteTask(task.id) }
                m={"-2"}
              />
              <ModalDelete id={task.id} handleDeleteTask={handleDeleteTask} />
            </HStack>
          </ListItem>
        ))}
      </List>
    )
}