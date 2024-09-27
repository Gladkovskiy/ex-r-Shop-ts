import {Box} from '@chakra-ui/react'
import {FC, useState, useEffect} from 'react'
import {useGQGetAttributes} from '../../../../graphQL/hooks/products/attribute'
import AppBoxForm from '../../../Common/AppBoxForm'
import AppSkeleton from '../../../Common/AppSkeleton'
import AppSelectGroup from '../../../Common/SelectProductSettings/AppSelectGroup'
import FormProduct from './FormProduct'

const CreateProduct: FC = () => {
  const [group, setGroup] = useState('')
  const {data, loading} = useGQGetAttributes(group)
  const [reload, setReload] = useState(true)

  useEffect(() => {
    //при смене группы переинициализируем initialValue
    setTimeout(() => setReload(true), 200)
  }, [group])

  return (
    <Box>
      <AppBoxForm>
        <AppSelectGroup group={group} setGroup={setGroup} reload={setReload} />
      </AppBoxForm>

      {loading ? (
        <AppSkeleton repeat={4} />
      ) : (
        data?.attrs &&
        group &&
        reload && <FormProduct data={data?.attrs} group={group} />
      )}
    </Box>
  )
}

export default CreateProduct
