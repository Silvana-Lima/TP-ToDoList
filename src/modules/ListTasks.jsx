import { CheckIcon, DeleteIcon } from "@chakra-ui/icons"
import { HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react"

export const ListTasks = ({tasks} ) =>{
    return (
        <List spacing={3}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            bg={"white"}
            display="flex"
            justifyContent="space-between"
          >
            <Text>{task.task}</Text>
            <HStack>
              <IconButton
                aria-label="Complete task"
                colorScheme="purple"
                borderRadius="none"
                id={task.id}
                icon={<CheckIcon />}
              />
              <IconButton
                aria-label="Delete task"
                colorScheme="gray"
                borderRadius="none"
                id={task.id}
                icon={<DeleteIcon />}
              />
            </HStack>
          </ListItem>
        ))}
      </List>
    )
}