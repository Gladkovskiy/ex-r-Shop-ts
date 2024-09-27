import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import {FC, useRef} from 'react'

interface IAppAlertDialog {
  isOpen: boolean
  onClose: () => void
  bodyText: string
  headerText: string
  confirmText: string
  cancelText: string
  onConfirm: () => void
  loadingText?: string
  isLoading?: boolean
}

const AppAlertDialog: FC<IAppAlertDialog> = ({
  bodyText,
  headerText,
  cancelText,
  confirmText,
  onConfirm,
  isLoading = false,
  loadingText = '',
  ...props
}) => {
  const cancelRef = useRef(null)

  return (
    <>
      <AlertDialog {...props} leastDestructiveRef={cancelRef}>
        <AlertDialogOverlay
          bg="blackAlpha.500"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        >
          <AlertDialogContent mx={2}>
            <AlertDialogHeader bgColor={'telegram.400'} color={'white'}>
              {headerText}
            </AlertDialogHeader>

            <AlertDialogBody>{bodyText}</AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={props.onClose}
                colorScheme="gray"
              >
                {cancelText}
              </Button>
              <Button
                onClick={onConfirm}
                ml={2}
                isLoading={isLoading}
                loadingText={loadingText}
              >
                {confirmText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default AppAlertDialog
