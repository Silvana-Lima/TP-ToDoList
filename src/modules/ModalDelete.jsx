import { DeleteIcon } from '@chakra-ui/icons'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    IconButton,
  } from '@chakra-ui/react'
import React from 'react'
import { setLocalStorage } from '../utils/localStorage'

  export function ModalDelete({id, setTasks, tasks, setfilterTasks} ) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const deleteTask = (id) => {
      const newTasks = tasks.filter((task) => task.id !== id)
       setTasks(newTasks);
       setfilterTasks(newTasks);
       setLocalStorage("task", newTasks);
     };
  
    return (
      <>
        <IconButton
                aria-label="Eliminar tarea"
                colorScheme="gray"
                borderRadius={"md"}
                icon={<DeleteIcon />}
                onClick={onOpen}
              />
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Eliminar tarea
              </AlertDialogHeader>
  
              <AlertDialogBody>
                ¿Está segur@? No puede deshacer esta acción después.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme='red' ml={3} id={id} value={id}  onClick={()=> deleteTask(id) }>
                  Eliminar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }