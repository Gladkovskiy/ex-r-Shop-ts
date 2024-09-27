import {Box, Divider, Text} from '@chakra-ui/react'
import React, {FC} from 'react'

interface IDeleteItem {
  fullname: string
  mail: string
  tel: string
  onClick: () => void
}

const DeleteItem: FC<IDeleteItem> = ({fullname, mail, tel, ...props}) => {
  return (
    <>
      <Box
        p={2}
        mt={1}
        _hover={{bgColor: 'telegram.50', cursor: 'pointer'}}
        {...props}
      >
        <Text>{fullname}</Text>
        <Text>{tel}</Text>
        <Text>{mail}</Text>
      </Box>
      <Divider />
    </>
  )
}

export default DeleteItem
