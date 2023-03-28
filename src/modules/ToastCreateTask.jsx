import { CheckCircleIcon } from "@chakra-ui/icons"
import { Box, Button, useToast } from "@chakra-ui/react"

export function ToastCreateTask({handleTasks, error}) {
    const toast = useToast()
    return (
      <Button
        bg="purple.500"
        mt={5}
        onClick={() => {
            handleTasks();
           {!error && toast({
                render: () => (
                    <Box color='white' p={3} bg='purple.500' borderRadius={"md"}>
                      <CheckCircleIcon mr={2}/>
                       "Se ha agregado una nueva tarea."
                    </Box>
                  ),
                duration: 3000,
                isClosable: true,
              })};
             
        }
     
        }
      >
        Agregar tarea
      </Button>
    )
  }