import {Button, Flex, IconButton, Select, useMediaQuery} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {MdFilterAlt} from 'react-icons/md'
import {ProductSort} from '../../../graphQL/__generated__/graphql'
import {useFiltersAction} from '../../../hooks/useAction'

interface ISettingBar {
  filterOpen: () => void
}

const SettingBar: FC<ISettingBar> = ({filterOpen}) => {
  const [isLagerThan500] = useMediaQuery('(min-width: 500px)')
  const {setSort} = useFiltersAction()
  const {t} = useTranslation('products')

  return (
    <>
      <Flex
        bgColor={'white'}
        mt={2}
        p={2}
        justifyContent={'space-between'}
        alignItems={'center'}
        borderRadius={5}
      >
        {isLagerThan500 ? (
          <Button
            leftIcon={<MdFilterAlt />}
            size={['sm', 'md', 'lg']}
            onClick={filterOpen}
          >
            {isLagerThan500 && t('SettingBar.Filters')}
          </Button>
        ) : (
          <IconButton
            icon={<MdFilterAlt />}
            aria-label="filters"
            onClick={filterOpen}
          />
        )}

        <Select
          w={['60%', '30%', '28%', '20%']}
          size={['sm']}
          borderRadius={5}
          onChange={e => setSort(e.target.value as ProductSort)}
          borderColor={'telegram.100'}
          variant={'filled'}
        >
          <option value={ProductSort.Rating}>
            {t('SettingBar.By rating')}
          </option>
          <option value={ProductSort.UpPrice}>
            {t('SettingBar.From cheap to expensive')}
          </option>
          <option value={ProductSort.DownPrice}>
            {t('SettingBar.From expensive to cheap')}
          </option>
          <option value={ProductSort.Discount}>
            {t('SettingBar.Promotional')}
          </option>
        </Select>
      </Flex>
    </>
  )
}

export default SettingBar
