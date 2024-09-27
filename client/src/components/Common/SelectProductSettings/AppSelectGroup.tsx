import React, {FC, useState} from 'react'
import SelectCategories from './SelectCategories'
import SelectGroups from './SelectGroups'
import {Box} from '@chakra-ui/react'

interface IAppSelectGroup {
  group: string
  setGroup: React.Dispatch<React.SetStateAction<string>>
  reload: React.Dispatch<React.SetStateAction<boolean>>
}

const AppSelectGroup: FC<IAppSelectGroup> = ({group, setGroup, reload}) => {
  const [selectCategory, setSelectCategory] = useState('')

  return (
    <>
      <SelectCategories
        value={selectCategory}
        onChange={({target}) => {
          setSelectCategory(target.value)
          setGroup('')
        }}
      />

      <Box my={2}>
        <SelectGroups
          value={group}
          onChange={({target}) => {
            setGroup(() => target.value)
            reload(false)
          }}
          category={selectCategory}
        />
      </Box>
    </>
  )
}

export default AppSelectGroup
