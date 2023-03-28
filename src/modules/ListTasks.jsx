import { CheckIcon } from "@chakra-ui/icons"
import { HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react"
import { setLocalStorage } from "../utils/localStorage"
import { ModalDelete } from "./ModalDelete"

export const ListTasks = ({tasks, setTasks, filterTasks, setfilterTasks} ) =>{

     const handleCompleteTask = (id) => {

       setTasks(tasks.map((task) => {
         if (task.id === id) {
           task.complete = !task.complete;
         }
         return task;
       }));

       setLocalStorage("task", tasks);
     };

     const handleDeleteTask = (id) => {
      const newTask = tasks.filter((task) => task.id !== id)
       setTasks(newTask);
       console.log(newTask)
       setfilterTasks(newTask);
       setLocalStorage("task", newTask);
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
            <Text as={task.complete && 's'} fontWeight={"semibold"} >{task.task}</Text>
            <HStack>
              <IconButton
                aria-label="Complete task"
                colorScheme="purple"
                borderRadius="none"
                variant={task.complete ? 'outline' : 'solid'}
                id={task.id}
                icon={<CheckIcon />}
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