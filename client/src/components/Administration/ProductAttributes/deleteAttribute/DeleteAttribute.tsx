import {Box} from '@chakra-ui/react'
import {FC, useCallback, useState} from 'react'
import SelectCategories from '../../../Common/SelectProductSettings/SelectCategories'
import SelectGroups from '../../../Common/SelectProductSettings/SelectGroups'
import AttrList from './AttrList'
import AppBoxForm from '../../../Common/AppBoxForm'
import UpdateAttribute from './UpdateAttribute'
import {Products_Eav_Attribute} from '../../../../graphQL/__generated__/graphql'

const DeleteAttribute: FC = () => {
  const [selectCategory, setSelectCategory] = useState('')
  const [selectGroup, setSelectGroup] = useState('')
  const [attr, setAttr] = useState<Products_Eav_Attribute | null>(null)

  const changeAttr = useCallback(
    (attr: Products_Eav_Attribute) => setAttr(attr),
    [setAttr]
  )

  const closeUpdate = useCallback(() => {
    setAttr(null)
  }, [setAttr])

  return (
    <AppBoxForm>
      {!attr ? (
        <>
          <SelectCategories
            value={selectCategory}
            onChange={({target}) => {
              setSelectCategory(target.value)
              setSelectGroup('')
            }}
          />

          <Box my={2}>
            <SelectGroups
              value={selectGroup}
              onChange={({target}) => setSelectGroup(target.value)}
              category={selectCategory}
            />
          </Box>

          <AttrList group={selectGroup} changeAttr={changeAttr} />
        </>
      ) : (
        <UpdateAttribute attr={attr} onClose={closeUpdate} />
      )}
    </AppBoxForm>
  )
}

export default DeleteAttribute
