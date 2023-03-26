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

  export function ModalDelete({id, handleDeleteTask} ) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <IconButton
                aria-label="Delete task"
                colorScheme="gray"
                // borderRadius="none"
                borderRightRadius={"md"}
                // id={task.id}
                // value={task.id}
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
                <Button colorScheme='red' ml={3} id={id} value={id}  onClick={()=> handleDeleteTask(id) }>
                  Eliminar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }