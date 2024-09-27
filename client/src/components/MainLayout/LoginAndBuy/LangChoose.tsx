import {Button, Divider, HStack} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'

const LangChoose: FC = () => {
  const {i18n} = useTranslation()

  return (
    <HStack>
      <Button
        fontSize={[12, 15]}
        size={'sm'}
        onClick={() => {
          i18n.changeLanguage('ru')
          localStorage.setItem('language', 'ru')
        }}
        isDisabled={i18n.language === 'ru'}
      >
        RU
      </Button>
      <Divider orientation="vertical" h={5} />
      <Button
        fontSize={[12, 15]}
        size={'sm'}
        onClick={() => {
          i18n.changeLanguage('en')
          localStorage.setItem('language', 'en')
        }}
        isDisabled={i18n.language === 'en'}
      >
        EN
      </Button>
    </HStack>
  )
}

export default LangChoose
