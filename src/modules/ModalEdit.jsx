import { EditIcon } from "@chakra-ui/icons"
import { Button, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { setLocalStorage } from "../utils/localStorage"

export function ModalEdit({id, setTasks, tasks}) {
    const initialValue = tasks.filter((task) => task.id === id)[0].task
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [inputValue, setInputValue] = useState(initialValue)

    const editTask = ()=> {
        setTasks(tasks.map((task) => {
           
          if (task.id === id) {
            task.task = inputValue;
            onClose()
          }
          return task;
        }));
  
        setLocalStorage("task", tasks);
       }

    return (
      <>
        <IconButton
        aria-label="Delete task"
        colorScheme="gray"
        borderRadius={"md"}
        icon={<EditIcon />}
        onClick={onOpen}/>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar Tarea</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            </ModalBody>
  
            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='purple'onClick={editTask} >Editar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }