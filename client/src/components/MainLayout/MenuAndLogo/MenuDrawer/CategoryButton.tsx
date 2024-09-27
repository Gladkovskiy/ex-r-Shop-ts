import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Icon,
} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {BiCategory} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import {useGQGetCategories} from '../../../../graphQL/hooks/settings/category'
import {TKeyLang} from '../../../../types/common'
import {RoutesForNav} from '../../../../types/router'
import Error from '../../../Common/Error'
import {Settings_Category} from '../../../../graphQL/__generated__/graphql'

interface ICategoryButton {
  onCloseMenu: () => void
}

const CategoryButton: FC<ICategoryButton> = ({onCloseMenu}) => {
  const navigate = useNavigate()
  const {data, loading, error} = useGQGetCategories()
  const {t, i18n} = useTranslation('menu')

  if (loading) return null
  if (error) return <Error />

  const sortCategory = (arr: Settings_Category[], lang: TKeyLang) => {
    const tempArr = [...arr]

    return tempArr.sort((a, b) =>
      a.description[lang].localeCompare(b.description[lang])
    )
  }

  return (
    <Accordion allowToggle mb={10}>
      <AccordionItem>
        <AccordionButton>
          <Icon as={BiCategory} mr={2} fontSize={'2xl'} />
          <Heading flex={'1'} textAlign={'left'} fontSize={'md'}>
            {t('CategoriesOfGoods')}
          </Heading>
          <AccordionIcon />
        </AccordionButton>

        {sortCategory(data?.categories!, i18n.language as TKeyLang).map(
          ({description, type}) => (
            <AccordionPanel
              key={type}
              onClick={() => {
                navigate(
                  RoutesForNav.CATEGORY +
                    `${type}-${description.en}-${description.ru}`
                )
                onCloseMenu()
              }}
              _hover={{cursor: 'pointer', bg: 'gray.100'}}
              p={1}
            >
              {description[i18n.language as TKeyLang]}
            </AccordionPanel>
          )
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default CategoryButton
