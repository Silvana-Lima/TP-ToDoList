import { CheckIcon } from "@chakra-ui/icons"
import { HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react"
import { setLocalStorage } from "../utils/localStorage"
import { ModalDelete } from "./ModalDelete"
import { ModalEdit } from "./ModalEdit"

export const ListTasks = ({tasks, setTasks, filterTasks, setfilterTasks} ) =>{

     const completeTask = (id) => {

       setTasks(tasks.map((task) => {
         if (task.id === id) {
           task.complete = !task.complete;
         }
         return task;
       }));

       setLocalStorage("task", tasks);
     };

     const deleteTask = (id) => {
      const newTasks = tasks.filter((task) => task.id !== id)
       setTasks(newTasks);
       setfilterTasks(newTasks);
       setLocalStorage("task", newTasks);
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
            p={1}
          >
            <Text as={task.complete && 's'} fontWeight={"semibold"} overflow={"hidden"} >{task.task}</Text>
            <HStack>
              <IconButton
                aria-label="Complete task"
                colorScheme="purple"
                borderRadius={"md"}
                variant={task.complete ? 'outline' : 'solid'}
                id={task.id}
                icon={<CheckIcon />}
                onClick={()=> completeTask(task.id) }
              />
              <ModalEdit id={task.id} setTasks={setTasks} tasks={tasks} />
              <ModalDelete id={task.id} deleteTask={deleteTask} />
            </HStack>
          </ListItem>
        ))}
      </List>
    )
}