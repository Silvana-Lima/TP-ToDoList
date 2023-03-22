import { CheckIcon, DeleteIcon } from "@chakra-ui/icons"
import { HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react"
import { useState } from "react"
import { setLocalStorage } from "../utils/localStorage"

export const ListTasks = ({tasks, setTasks} ) =>{
    

     const [completeTask, setCompleteTask] = useState(false);
    //  const [deleteTask, setDeleteTaks] = useState(false);

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
       setLocalStorage("task", tasks);
     };

    return (
        <List spacing={3}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            bg={"white"}
            display="flex"
            justifyContent="space-between"
          >
            <Text textDecoration={task.complete ? 'line-through': null}>{task.task}</Text>
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
              />
              <IconButton
                aria-label="Delete task"
                colorScheme="gray"
                borderRadius="none"
                id={task.id}
                value={task.id}
                icon={<DeleteIcon />}
                onClick={()=> handleDeleteTask(task.id) }
              />
            </HStack>
          </ListItem>
        ))}
      </List>
    )
}