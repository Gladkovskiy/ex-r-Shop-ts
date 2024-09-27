import {Box, Button, Text} from '@chakra-ui/react'
import React, {FC, useRef, MouseEvent, InputHTMLAttributes} from 'react'

interface IUploadFile extends InputHTMLAttributes<HTMLInputElement> {
  touched: boolean | undefined
  error: string | undefined
  onTouched: () => void
  language: string
}

const text = {
  ru: 'Загрузить изображение',
  en: 'Download the image',
}

const UploadFile: FC<IUploadFile> = ({
  touched,
  error,
  onTouched,
  language,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const clickHandler = (e: MouseEvent) => {
    e.preventDefault()
    onTouched()
    inputRef.current?.click()
  }

  return (
    <Box mt={4}>
      <input type="file" ref={inputRef} {...props} style={{display: 'none'}} />
      <Button onClick={clickHandler} variant={'ghost'} w={'full'}>
        {text[language as keyof typeof text]}
      </Button>
      {touched && error && <Text color={'red.400'}>{error}</Text>}
    </Box>
  )
}

export default UploadFile
