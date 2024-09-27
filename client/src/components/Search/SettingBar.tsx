import {Flex, Select} from '@chakra-ui/react'
import {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {ProductSort} from '../../graphQL/__generated__/graphql'
import {useSearchAction} from '../../hooks/useAction'
import {useAppSelector} from '../../hooks/useAppSelector'
import {RoutesForNav} from '../../types/router'

const SettingBar: FC = () => {
  const nav = useNavigate()
  const {setSort} = useSearchAction()
  const {groups} = useAppSelector(r => r.SearchReducer)

  return (
    <Flex
      bgColor={'white'}
      mt={2}
      p={2}
      justifyContent={'space-between'}
      alignItems={'center'}
      borderRadius={5}
    >
      <Flex alignItems={'center'}>
        <Select
          size={['sm']}
          borderRadius={5}
          borderColor={'telegram.100'}
          variant={'filled'}
          onChange={e => {
            nav(RoutesForNav.PRODUCTS + e.target.value)
          }}
        >
          <option>Группы товара</option>
          {groups.map(group => (
            <option key={group.type} value={group.type}>
              {group.description.ru}
            </option>
          ))}
        </Select>
      </Flex>

      <Select
        w={['60%', '30%', '28%', '20%']}
        size={['sm']}
        borderRadius={5}
        onChange={e => {
          setSort(e.target.value as ProductSort)
        }}
        borderColor={'telegram.100'}
        variant={'filled'}
      >
        <option value={ProductSort.Rating}>По рейтингу</option>
        <option value={ProductSort.UpPrice}>От дешёвых к дорогим</option>
        <option value={ProductSort.DownPrice}>От дорогих к дешёвым</option>
        <option value={ProductSort.Discount}>Акционные</option>
      </Select>
    </Flex>
  )
}

export default SettingBar
