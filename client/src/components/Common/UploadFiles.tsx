import {Box, Button} from '@chakra-ui/react'
import {FC, InputHTMLAttributes, MouseEvent, useRef} from 'react'

interface IUploadFiles extends InputHTMLAttributes<HTMLInputElement> {
  language: string
}

const text = {
  ru: 'Загрузить изображение',
  en: 'Download the image',
}

const UploadFiles: FC<IUploadFiles> = ({language, ...props}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const clickHandler = (e: MouseEvent) => {
    e.preventDefault()
    inputRef.current?.click()
  }

  return (
    <Box mt={4}>
      <input type="file" ref={inputRef} {...props} style={{display: 'none'}} />
      <Button onClick={clickHandler} variant={'ghost'} w={'full'}>
        {text[language as keyof typeof text]}
      </Button>
    </Box>
  )
}

export default UploadFiles
